import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap'; // Assuming you're using Reactstrap for Form components
import axios from 'axios';
import { API_URL } from '../../constants';

const NewFloorForm = (props) => {
  const [index, setindex] = useState(1);
  const [name, setName] = useState('Default');
  const [center_x, setCenterX] = useState(1.1);
  const [center_y, setCenterY] = useState(1.2);
  const [x_extents, setXExtents] = useState(1.1);
  const [y_extents, setYExtents] = useState(1.2);

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'index':
        setindex(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'center_x':
        setCenterX(center_x);
        break;
      case 'center_y':
        setCenterY(center_y);
        break;
      case 'x_extents':
        setXExtents(x_extents);
        break;
      case 'y_extents':
        setYExtents(y_extents);
        break;
      default:
        break;
    }
  };

  const createFloor = (e) => {
    e.preventDefault();
    const floorData = { index, name, center_x, center_y , x_extents, y_extents };
    axios.put(API_URL+"/add/floor", floorData).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  const editFloor = (e) => {
    e.preventDefault();
    const floorData = { index, name, center_x, center_y , x_extents, y_extents };
    axios.put(API_URL+"/edit/floor/" + index, floorData).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  const defaultIfEmpty = (value) => {
    return value === '' ? '' : value;
  };

  return (
    <Form onSubmit={props.device ? editFloor : createFloor}>
      <Form.Group>
        <Form.Label for="index">index:</Form.Label>
        <Form.Control
          type="number"
          name="index"
          onChange={onChange}
          value={defaultIfEmpty(index)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="name">name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={onChange}
          value={defaultIfEmpty(name)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="center_x">Center_X:</Form.Label>
        <Form.Control
          type="number"
          name="center_x"
          onChange={onChange}
          value={defaultIfEmpty(center_x)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="center_y">Center_Y:</Form.Label>
        <Form.Control
          type="number"
          name="center_y"
          onChange={onChange}
          value={defaultIfEmpty(center_y)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="x_extents">X_Extents:</Form.Label>
        <Form.Control
          type="number"
          name="x_extents"
          onChange={onChange}
          value={defaultIfEmpty(x_extents)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="y_extents">Y_Extents:</Form.Label>
        <Form.Control
          type="number"
          name="y_extents"
          onChange={onChange}
          value={defaultIfEmpty(y_extents)}
        />
      </Form.Group>
      <Button onClick={props.device ? editFloor : createFloor}>{props.create? "Add": "Edit"}</Button>
      <Button onClick={props.toggle}>Cancel</Button>
    </Form>
  );
};

export default NewFloorForm;
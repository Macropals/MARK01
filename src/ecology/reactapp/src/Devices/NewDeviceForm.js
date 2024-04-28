import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap'; // Assuming you're using Reactstrap for Form components
import axios from 'axios';
import { API_URL } from '../constants';

const NewDeviceForm = (props) => {
  const [id, setId] = useState(1);
  const [name, setType] = useState('Air sensor');
  const [floor, setFloor] = useState(1);
  const [x, setX] = useState(1.1);
  const [y, setY] = useState(1.2);

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'id':
        setId(value);
        break;
      case 'name':
        setType(value);
        break;
      case 'floor':
        setFloor(value);
        break;
      case 'x':
        setX(value);
        break;
      case 'y':
        setY(value);
        break;
      default:
        break;
    }
  };

  const createDevice = (e) => {
    e.preventDefault();
    const deviceData = { id, name, floor, x, y };
    axios.post(API_URL, deviceData).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  const editDevice = (e) => {
    e.preventDefault();
    const deviceData = { id, name, floor, x, y };
    axios.put(API_URL+"/get/defice/" + id, deviceData).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  const defaultIfEmpty = (value) => {
    return value === '' ? '' : value;
  };

  return (
    <Form onSubmit={props.device ? editDevice : createDevice}>
      <Form.Group>
        <Form.Label for="id">ID:</Form.Label>
        <Form.Control
          type="number"
          name="id"
          onChange={onChange}
          value={defaultIfEmpty(id)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="name">Type:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={onChange}
          value={defaultIfEmpty(name)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="floor">Floor:</Form.Label>
        <Form.Control
          type="text"
          name="floor"
          onChange={onChange}
          value={defaultIfEmpty(floor)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="x">X:</Form.Label>
        <Form.Control
          type="number"
          name="x"
          onChange={onChange}
          value={defaultIfEmpty(x)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for="y">Y:</Form.Label>
        <Form.Control
          type="number"
          name="y"
          onChange={onChange}
          value={defaultIfEmpty(y)}
        />
      </Form.Group>
      <Button onClick={props.device ? editDevice : createDevice}>{props.create? "Add": "Edit"}</Button>
      <Button onClick={props.toggle}>Cancel</Button>
    </Form>
  );
};

export default NewDeviceForm;
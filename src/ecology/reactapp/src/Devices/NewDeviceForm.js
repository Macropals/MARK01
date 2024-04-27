import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";


import { API_URL } from '../constants';

class NewDeviceForm extends React.Component {
  state = {
    id: 0,
    type: "",
    floor: 0,
    x: 0,
    y: 0
  };

  componentDidMount() {
    if (this.props.device) {
      const { id, type, floor, x,y } = this.props.student;
      this.setState({ id, type, floor, x,y });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createStudent = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editStudent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.device ? this.editDevice : this.createDevice}>
        <FormGroup>
          <Label for="id">ID:</Label>
          <Input
            type="text"
            name="id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.id)}
          />
          
        </FormGroup>
        <FormGroup>
          <Label for="type">Type:</Label>
          <Input
            type="text"
            name="type"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.type)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="floor">Floor:</Label>
          <Input
            type="text"
            name="text"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.floor)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="X">X:</Label>
          <Input
            type="number"
            name="X"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.x)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Y">Y:</Label>
          <Input
            type="number"
            name="Y"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.y)}
          />
        </FormGroup>
        <Button>Add</Button>
      </Form>
    );
  }
}

export default NewDeviceForm;
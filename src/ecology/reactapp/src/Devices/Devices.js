import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DevicesList from "./DevicesList";

import NewDeviceModal from "./NewDeviceModal";

import axios from "axios";

import { API_URL } from "../constants";

class Devices extends Component {
  state = {
    devices: []
  };

  componentDidMount() {
    this.resetState();
  }

  getDevices = () => {
    axios.get(API_URL + '/get/device').then(res => this.setState({ devices: res.data.devices }));
  };


  resetState = () => {
    this.getDevices();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <DevicesList
              devices={this.state.devices}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewDeviceModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Devices;
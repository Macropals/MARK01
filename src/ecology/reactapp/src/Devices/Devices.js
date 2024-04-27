import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
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
    axios.get(API_URL).then(res => this.setState({ devices: res.data }));
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
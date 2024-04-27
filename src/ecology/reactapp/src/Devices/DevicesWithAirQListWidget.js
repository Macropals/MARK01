import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import axios from "axios";


import { API_URL } from '../constants';

class DevicesWithAirQListWidget extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.resetState();
  }

  getAirQ = () => {
    axios.get(API_URL).then(res => this.setState({ students: res.data }));
  };

  resetState = () => {
    this.getAirQ();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    );
  }
}


export default DevicesWithAirQListWidget;
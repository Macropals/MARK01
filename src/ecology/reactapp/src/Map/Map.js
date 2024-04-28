import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'; // Assuming you're using Reactstrap for Form components
import axios from 'axios';
import { API_URL } from '../constants';
import { Col, Container, Row } from "react-bootstrap";
import Floor from './Floor/Floor';
import NewFloorModal from './Floor/NewFloorModal';


const Map = (props) => {
    const floor = 1;
    const [floors, setFloors] = useState([])


    const getFloors = () => {
        axios.get(API_URL + '/get/floor').then(res => setFloors({ floors: res.data.floors }));
    };

    const resetState = () => {
        getFloors();
    };

    return (
        <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
            {/* Place your button or any other content here */}
            <Button>Click Me</Button>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5vh' }}>
            {/* Place your button or any other content here */}
            {/* <Button>Click Me</Button> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <Floor floor={floors[floor]} resetState={resetState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewFloorModal create={true} resetState={resetState} />
          </Col>
        </Row>
      </Container>

  );
};

export default Map;
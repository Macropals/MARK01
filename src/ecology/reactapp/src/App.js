import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Container, Fragment } from "react";
import Devices from "./Devices/Devices";
import Header from './Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';

import './App.css';
import Main from './Main/Main';
import Map from './Map/Map';
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/device">Devices</Nav.Link>
                <Nav.Link href="/map">Map</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Fragment>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/device" element={<Devices />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </Fragment>
      </Fragment>
    </Router>
  );
}

export default App;

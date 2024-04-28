import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, Fragment } from "react";
import Devices from "./Devices/Devices";
import Header from './Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';
import Main from './Main/Main';
import Map from './Map/Map';
function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/device">Устройства</Link>
          </li>
          <li>
            <Link to="/map">План здания</Link>
          </li>
        </ul>
        <Fragment>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/device" element={<Devices />}/>
            <Route path="/map"element={<Map />}/> 
          </Routes>
        </Fragment>
      </Fragment>
    </Router>
  );
}

export default App;

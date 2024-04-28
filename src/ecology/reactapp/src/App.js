import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { Component, Fragment } from "react";
import Devices from "./Devices/Devices";
import Header from './Header';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Devices/>
    </Fragment>
  );
}

export default App;

import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap'; // Assuming you're using Reactstrap for Form components
import axios from 'axios';
import { API_URL } from '../constants';
import Header from '../Header';

const Main = (props) => {
  

  return (
        <Header style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}/>
  );
};

export default Main;
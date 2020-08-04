import React from 'react';
import ReactDOM from 'react-dom';
// import LandingPage from './LandingPage';
import Hi from "./Hi"
import { BrowserRouter } from 'react-router-dom';





ReactDOM.render(
  <BrowserRouter>
    <Hi/>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

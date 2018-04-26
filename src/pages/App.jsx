import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/w3-theme-black.css';
import '../styles/css.css';
//import '../styles/font-awesome.min.css';
import '../styles/w3.css';
import {
  Route,
  NavLink,
  HashRouter,
  Router
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import MasterHarness from './MasterHarness';

class App extends Component {
 
  render() {
    return (
      <div>
      <MasterHarness/>     
  </div>
    );
  }

}
export default App;

import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/w3-theme-black.css';
import '../styles/css.css';
//import './font-awesome.min.css';
import '../styles/w3.css';
import {
  Route,
  NavLink,
  HashRouter,
  Router
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
export default class Footer extends Component{
  render(){
    return(
      <div className="bottom-align">
        <footer id="myFooter">
        <div className="w3-container w3-theme-l2 w3-padding-32">
        <h4>Footer</h4>
        </div>
        <div className="w3-container w3-theme-l1">
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        </div>
        </footer>
      </div>
    );
  }
}
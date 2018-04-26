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
//-- Overlay effect when opening sidebar on small screens --
export default class OverLay extends Component{
  render(){
    return(
      <div className="w3-hide-large" title="close side menu" id="myOverlay">{/*Gago*/}</div>
    )
  }
}
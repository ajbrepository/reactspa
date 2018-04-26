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
export default class LeftPane extends Component{
  render(){
    return(
      //-- Sidebar --
      <nav className="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="mySidebar">
        <a href="javascript:void(0)" onclick="w3_close()" className="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" title="Close Menu">
          <i className="fa fa-remove"></i>
        </a>
        <h4 className="w3-bar-item"><b>Menu</b></h4>
        <PaneLink linkText="Home" linkAddress="#"/>
        <PaneLink linkText="Feature1" linkAddress="#"/>
        <PaneLink linkText="Feature2" linkAddress="#"/>
        <PaneLink linkText="Feature3" linkAddress="#"/>
        <PaneLink linkText="Feature4" linkAddress="#"/>
        <PaneLink linkText="About Us" linkAddress="#"/>
      </nav>
    )
  }
}
class PaneLink extends Component{
  render(){
    return(
      <a className="w3-bar-item w3-button w3-hover-black" href={this.props.linkAddress}>{this.props.linkText}</a>
    )
  }
}
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
import { LinkContainer  } from 'react-router-bootstrap';
import { ButtonToolbar,Button } from 'react-bootstrap';
import HeaderPane from './HeaderPane';
import OverLay from './Overlay';
import HomePane from './HomePane';
import Footer from './Footer';

export default class MasterHarness extends Component{

  render(){
    return(
          <div>
            <HashRouter>
              <div>
                  <HeaderPane/>                  
                  <div className="content">
                    <Route exact path="/" component={HomePane}/>
                    <Route exact path="/projects"/>
                  </div>
                  <Footer/>
              </div>              
            </HashRouter>          
          </div>
          
    );
  }

  

}
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
import firebase, { auth, provider } from '../auth/firebase';
export default class MasterHarness extends Component{
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null // <-- add this line
    }
    /* ... */
  this.login = this.login.bind(this); // <-- add this line
  this.logout = this.logout.bind(this); // <-- add this line
  }
  render(){
    return(
          <div>
            <HashRouter>
              <div>
                  <HeaderPane  displayName={this.state.user?this.state.user.displayName:null}/>
                  <ButtonToolbar>{this.state.user ?<Button bsStyle="primary" bsSize="large" onClick={this.logout}>Log Out</Button>: <Button bsStyle="primary" bsSize="large" onClick={this.login}>Log In</Button>}</ButtonToolbar>
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
  componentDidUpdate(){
    console.log('Compoent Updated by '+this.props.displayName);
  }
  handleChange(e) {
    /* ... */
    console.log("--------------------");
  }
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        //this.MasterHarness.setState({ user });
      } 
    });
  }
}
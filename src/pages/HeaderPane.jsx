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
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ButtonToolbar,Button } from 'react-bootstrap';
import firebase, { auth, provider } from '../auth/firebase';
//This is not Redux aware , just uses the Actions to store logged on user
//-- Redux components --
import {storeActiveUser} from '../store/actions/index'
import redStore from '../store/util/createStore'


class HeaderPane extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer replace exact to="/">
                                <NavItem eventKey={1}>About</NavItem>
                            </LinkContainer>
                            <LinkContainer replace exact to="/projects">
                                <NavItem eventKey={2} >Projects</NavItem>
                            </LinkContainer>
                            <LinkContainer replace exact to="/contacts">
                                <NavItem eventKey={2} >contact</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav bsStyle="tabs" pullRight>
                            <NavItem eventKey={2}><b>{this.state.user?this.state.user.displayName:null}</b></NavItem>
                            {this.state.user ?<NavItem eventKey={1} onClick={this.logout}>Log Out</NavItem>:<NavItem eventKey={1} onClick={this.login}><b>Log In</b></NavItem>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </div>
        )
    };
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
            //this.MasterHarness.setState({ user });
          } 
        });
      }
      logout() {
        auth.signOut()
          .then(() => {
            this.setState({
              user: null
            });
          });
          console.log("Removing  active users");
          redStore.dispatch(storeActiveUser({displayName:''}));
      }
      login() {
        auth.signInWithPopup(provider) 
          .then((result) => {
            const user = result.user;
            this.setState({
              user
            });
            //Storing active users
            console.log("Storing active users");
            //storeActiveUser(user);
            redStore.dispatch(storeActiveUser(user));
          });
          
      }
      componentDidUpdate(){
        console.log('Compoent Updated by ---- '+(this.state.user?this.state.user.displayName:""));
        if(this.state.user){
          redStore.dispatch(storeActiveUser(this.state.user));
        }
      }
      handleChange(e) {
        /* ... */
        console.log("Handle Change --------------------");
      }
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
}
export default HeaderPane;
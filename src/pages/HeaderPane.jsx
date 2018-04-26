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
//-- Overlay effect when opening sidebar on small screens --
export default class HeaderPane extends Component {
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
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={2}><b>{this.props.displayName?this.props.displayName:null}</b></NavItem>
                            <NavItem eventKey={1}>Contact</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    };
}
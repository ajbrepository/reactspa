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
import { Carousel } from 'react-bootstrap';
var divStyle = {
  marginLeft: "200px"
};

//Redux
import {connect} from 'react-redux';


class HomePane extends Component {
  componentWillMount(){
    console.log("Mount "+this.props.activeUser)
  }

  render() {
  
    return (

      <div>
        <div className="w3-container w3-hide-small">
          <Carousel className="w3-container">
            <Carousel.Item>
              <img className="carousel-size" src="/assets/1.png" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-size" src="/assets/2.png" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>


        <div className="w3-main" style={divStyle}>
          <div className="w3-row w3-padding-2">
            <div className="w3-twothird w3-container">
              <h1 className="w3-text-teal">Cybertron Works</h1>
              <p>Cybertron Works is a new company that will provide high quality IT services to it's clients. Cybertron is scheduled to begin operations starting January, 2019.
              We develop small scale custom applications both for On-Premises or Containerized Cloud Platform for diverse market.</p>
            </div>
            <div className="w3-third w3-container">
              <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
              <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
              <p>{this.props.loggedUser?this.props.loggedUser.payload.displayName:""}</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
// Get apps state and pass it as props to HomePane
//      > whenever state changes, the HomePane will automatically re-render
function mapStateToProps(state) {
  debugger;
  console.log("Fetching from store"+ state);
  return {
    loggedUser: state.activeUser[0]
  };
}

export default connect(mapStateToProps)(HomePane);
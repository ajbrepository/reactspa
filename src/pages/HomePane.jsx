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
import { Carousel, Image } from 'react-bootstrap';
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
    //debugger;
    return (
      
      <div>
        <div className="w3-main" >
          <div className="w3-row">
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
          </div>
        </div>


        <div className="w3-main" style={divStyle}>
          <div className="w3-row w3-padding-4">
            <div className="w3-container">
              <h1 className="w3-text-teal">Cybertron Works</h1>
              <p>Cybertron Works is a new company that will provide high quality IT services to it's clients. Cybertron is scheduled to begin operations starting January, 2019.
              We develop small scale custom applications both for On-Premises or Containerized Cloud Platform for diverse market.</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
//<img style={{width: '50px', height: '50px'}} src={this.props.loggedUser?this.props.loggedUser.payload.photoURL:""}/>
// Get apps state and pass it as props to HomePane
//      > whenever state changes, the HomePane will automatically re-render
function mapStateToProps(state) {
  //debugger;
  console.log("Fetching from store ::  "+ state.activeUser);
  return {    
    loggedUser: state.activeUser
  };
}

export default connect(mapStateToProps)(HomePane);
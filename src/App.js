import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "react-tiger-transition/styles/main.min.css";
import 'react-slideshow-image/dist/styles.css'
import "./index.scss";

import { Navigation, Route, Screen, Link, glide, unfold } from "react-tiger-transition";
import Home from './Home'; 
import Portfolio from './Portfolio'; 
import About from './About'; 

import Back from './assets/previous.svg'; 

// inject glide styles
glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'right'
});

const screenStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

// you will need to set the height of  <Navigation /> wrapper,
// in this case, it is the root node,
// better to do this on your stylesheet
document.getElementById("root").style.height = "100vh";

export default () => (
  <Router>
    <Navigation>
      <Route exact path="/">
        <Screen
          style={{
            backgroundColor: "#e5a5eb",
            ...screenStyle
          }}
        >
          <Home></Home>
            <div className="container buttons">
                <div className="center">
                    <Link to="/portfolio" transition='glide-right'><button className="home-btn portfolio">Portfolio</button></Link>
                    <Link to="/about" transition='glide-left'><button className="home-btn about">About</button></Link>
                </div>
            </div>
        </Screen>
      </Route>
      <Route
        exact
        path="/portfolio"
        screen // shorthand to wrap children with screen
        screenProps={{
          style: {
            // backgroundColor: "#607d88",
            ...screenStyle
          }
        }}
      >
        <Portfolio></Portfolio>
        <div className="nav">
          <Link to="/" transition='glide-left'><img className="back-btn portfolio" src={Back}/></Link>
        </div>
      </Route>
    
      <Route
        exact
        path="/about"
        screen // shorthand to wrap children with screen
        screenProps={{
          style: {
            backgroundColor: "#AD70B3",
            ...screenStyle
          }
        }}
      >
        
        <About></About>
        <Link to="/" transition='glide-right'>
        Back
        </Link> 
        
      </Route>
    </Navigation>
  </Router>
);
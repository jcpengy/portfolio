import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "react-tiger-transition/styles/main.min.css";
import 'react-slideshow-image/dist/styles.css'
import "./index.scss";

import { Navigation, Route, Screen, Link, glide, unfold } from "react-tiger-transition";
import Home from './Home'; 
import Portfolio from './Portfolio'; 
import About from './About'; 
import Title from './Title'; 

import Back from './assets/previous.svg'; 
import LinkedIn from './assets/icons/svg/052-linkedin.svg';
import Github from './assets/icons/svg/032-github.svg';

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
  // overflow: "visible"
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
          <Title></Title>
            <div className="container buttons">
                <div className="center">
                    <Link to="/portfolio" transition='glide-right'><button className="home-btn portfolio">Portfolio</button></Link>
                    <Link to="/about" transition='glide-left'><button className="home-btn about">About</button></Link>
                </div>
            </div>
            <div className="nav">
              <Link to="https://www.linkedin.com/in/jess-peng/"><img className="nav-btn" src={LinkedIn}/></Link>
              <Link to="https://github.com/jcpengy"><img className="nav-btn" src={Github}/></Link>
            </div>

        </Screen>
      </Route>
      <Route
        exact
        path="/portfolio"
        screen // shorthand to wrap children with screen
        screenProps={{
          style: {
            // backgroundColor: "radial-gradient(circle, rgba(255,46,255,0.5) 0%, rgba(66,227,255,0.5) 100%)",
            ...screenStyle
          }
        }}
      >
        <Portfolio></Portfolio>
        <div className="nav">
          <Link to="https://www.linkedin.com/in/jess-peng/"><img className="nav-btn" src={LinkedIn}/></Link>
          <Link to="https://github.com/jcpengy"><img className="nav-btn" src={Github}/></Link>

          <Link to="/" transition='glide-left'><img className="nav-btn back-portfolio" src={Back}/></Link>
        </div>
      </Route>
    
      <Route
        exact
        path="/about"
        screen // shorthand to wrap children with screen
        screenProps={{
          style: {
            backgroundColor: "white",
            ...screenStyle
          }
        }}
      >
        
        <About></About>
        <div className="nav">
          <Link to="/" transition='glide-right'><img className="nav-btn back-about" src={Back}/></Link>
          <Link to="https://www.linkedin.com/in/jess-peng/"><img className="nav-btn" src={LinkedIn}/></Link>
          <Link to="https://github.com/jcpengy"><img className="nav-btn" src={Github}/></Link>
        </div>
        
      </Route>
    </Navigation>
  </Router>
);
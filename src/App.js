  import React from "react";
  import { BrowserRouter as Router } from "react-router-dom";

  import "react-tiger-transition/styles/main.min.css";
  import 'react-slideshow-image/dist/styles.css'
  import "./index.scss";

  import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";
  import Home from './Home'; 
  import Portfolio from './Portfolio'; 
  import About from './About'; 
  import Title from './Title'; 

  import Back from './assets/previous.svg'; 
  import LinkedIn from './assets/icons/svg/052-linkedin.svg';
  import Instagram from './assets/icons/svg/044-instagram.svg';
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

  document.getElementById("root").style.height = "100vh";

  export default () => (
    <Router>
      <Navigation>
        <Route exact path="/">
          <Screen
            style={{
              backgroundColor: "#FFFAFF",
              ...screenStyle
            }}
          >
            <Home></Home>
            <div className="container home">
              <div className="row title">
                <Title></Title>
              </div>
              <div className="row home-btns">
                <Link to="/portfolio" transition='glide-right' className="home-btn">Portfolio</Link>
                <Link to="/about" transition='glide-left'className="home-btn">About</Link>
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
              backgroundColor: "#FFFAFF",
              ...screenStyle
            }
          }}
        >
          <Portfolio></Portfolio>
          <div className="nav portfolio">
            <Link to="/" transition='glide-left'><img className="nav-btn back-portfolio" src={Back} alt=""/></Link>
          </div>
        </Route>
      
        <Route
          exact
          path="/about"
          screen // shorthand to wrap children with screen
          screenProps={{
            style: {
              backgroundColor: "#FFFAFF",
              ...screenStyle
            }
          }}
        >
          
          <About></About>
          <div className="nav about">
            <Link to="/" transition='glide-right'><img className="nav-btn back-about" src={Back} alt=""/></Link>
          </div>
          
        </Route>
      </Navigation>
    </Router>
  );
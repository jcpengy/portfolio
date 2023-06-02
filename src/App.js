  import React from "react";
  import { BrowserRouter as Router } from "react-router-dom";

  import "react-tiger-transition/styles/main.min.css";
  import 'react-slideshow-image/dist/styles.css'
  import "./index.css";

  import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";
  import Home from './components/Home'; 
  import Portfolio from './components/Portfolio'; 
  import About from './components/About'; 
  import Title from './components/Title'; 

  import Back from './assets/previous.svg';
  import GraphicDesign from "./components/GraphicDesign";

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
    backgroundColor: "#FFFAFF"
    // overflow: "visible"
  };

  document.getElementById("root").style.height = "100vh";

  export default () => (
    <Router>
      <Navigation>
        <Route exact path="/">
          <Screen
            style={{
              ...screenStyle
            }}
          >
            <Home></Home>
            <div className="container home">
              <div className="row title">
                <Title></Title>
              </div>
              <div className="row home-btns">
                <Link to="/about" transition='glide-right'className="home-btn">About</Link>
                <Link to="/projects" transition='glide-left' className="home-btn">Portfolio</Link>
              </div>
            </div>
          </Screen>
        </Route>
        <Route
          exact
          path="/projects"
          screen // shorthand to wrap children with screen
          screenProps={{
            style: {
              ...screenStyle
            }
          }}
        >
          <Portfolio></Portfolio>
          <div className="nav portfolio">
            <Link to="/" transition='glide-right'><img className="nav-btn back-portfolio" src={Back} alt=""/></Link>
          </div>
        </Route>
        <Route
          exact
          path="/about"
          screen 
          screenProps={{
            style: {
              ...screenStyle
            }
          }}
        >
          <About></About>
          <div className="nav about">
            <Link to="/" transition='glide-left'><img className="nav-btn back-about" src={Back} alt=""/></Link>
          </div>
          
        </Route>
      </Navigation>
    </Router>
  );

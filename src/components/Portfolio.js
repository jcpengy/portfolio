import React, { Component, useState } from 'react';
import Projects from '../data/project.json'; 
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Back from "../assets/previous.svg";
import GraphicDesign from "./GraphicDesign";
import UXDesign from "./UXDesign";
import {Link} from "react-tiger-transition";
// import {ActionButton, Flex, Link,} from "@adobe/react-spectrum";

const Portfolio = () => {

    const [selectedGraphicDesign, setSelectedGraphicDesign] = useState(false);

    return (
        <div>

                {selectedGraphicDesign ? <GraphicDesign/> : <UXDesign/>}
                <Footer></Footer>

        </div>
    )

}

export default Portfolio; 

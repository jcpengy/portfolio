import React, { Component, useState } from 'react';
import Projects from '../data/project.json'; 
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Back from "../assets/previous.svg";
import GraphicDesign from "./GraphicDesign";
import UXDesign from "./UXDesign";
import {ActionButton, Flex, Link,} from "@adobe/react-spectrum";

const Portfolio = () => {

    const [selectedGraphicDesign, setSelectedGraphicDesign] = useState(false);

    const ProjectData = Projects.map(
        (project) => {
            return (
                <>
                    <div className="row">
                        <h3 key={project.name}>{project.name}</h3><br></br>
                        <Carousel>
                            {project.images &&
                                project.images.map(
                                    (image) => {
                                        return <>
                                            <div>
                                                <img key={image.url} src={image.url} alt={image.alt}/>
                                            </div>
                                        </>;
                                    }
                                )
                            }
                        </Carousel>
                        <p key={project.description}>{project.description}</p>
                        <p>{project.tools}<br></br><br></br>
                            {project.links &&
                                project.links.map(
                                    (link) => {
                                        return <><a href={link.src} key={link.src} target="_blank"
                                                    rel="noreferrer">{link.name}</a><br></br></>;
                                    }
                                )
                            }
                        </p>
                    </div>

                    <br></br><br></br>
                    <p>• • • • • • •</p>
                    <br></br><br></br>
                </>
            )
        }
    )
    return (
        <div>
            <div className="content-container portfolio">
                <Flex direction="column" alignItems="center">
                    <Flex id="portfolio-navbar" direction="row" gap="size-300">
                        <Link onPress={() => setSelectedGraphicDesign(false)}>UX Design</Link>
                        <Link onPress={() => setSelectedGraphicDesign(true)}>Graphic Design</Link>
                    </Flex>
                </Flex>

                {selectedGraphicDesign ? <GraphicDesign/> : <UXDesign/>}
                <Footer></Footer>
            </div>
        </div>
    )

}

export default Portfolio; 

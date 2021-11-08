

import React, { Component } from 'react'; 
import Projects from '../data/project.json'; 
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Portfolio extends Component {

    render() {
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
                                        return <><a href={link.src} key={link.src} target="_blank" rel="noreferrer">{link.name}</a><br></br></>;
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
                    {ProjectData}
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default Portfolio; 
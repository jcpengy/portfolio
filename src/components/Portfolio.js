

import React, { Component } from 'react'; 
import Projects from '../data/project.json'; 
import Footer from './Footer';

class Portfolio extends Component {

    render() {
        const ProjectData = Projects.map(
            (project) => {
                return (
                    <>
                    <div className="row">
                        <h3>{project.name}</h3><br></br>
                        <p>{project.description}</p>
                        <div className="row">  
                            <div className="col-sm-6">
                                <img class='cropped' key={project.images[0].url} src={project.images[0].url} width='100%' alt={project.images[0].alt}/><br></br><br></br>
                            </div>
                            <div className="col-sm-6">
                                <img class='cropped' key={project.images[1].url} src={project.images[1].url} width='100%' alt={project.images[1].alt}/><br></br><br></br>
                            </div>
                        </div>    
                        <p>{project.tools}<br></br><br></br>
                        {project.links && 
                        project.links.map(
                            (link) => {
                                return <><a href={link.src} key={link.name} target="_blank" rel="noreferrer">{link.name}</a><br></br></>;
                            }
                        )}
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
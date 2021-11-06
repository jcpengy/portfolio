

import React, { Component } from 'react'; 
import Projects from '../data/project.json'; 
import Footer from './Footer';

class Portfolio extends Component {

    render() {
        function showLink(link) {
            if (link) {
                return (
                    <>
                        <a href={link} target="_blank" rel="noreferrer">Project Link</a>
                    </>
                )
            }
        }
        const ProjectData = Projects.map(
            (project) => {
                return (
                    <>
                    <div className="row">
                        <h3>{project.name}</h3><br></br>
                        <p>{project.description}</p>
                        <div className="row">  
                            <div className="col-sm-6">
                                <img class='cropped' src={project.images[0]} width='100%' alt="Campaignion Input"/><br></br><br></br>
                            </div>
                            <div className="col-sm-6">
                                <img class='cropped' src={project.images[1]} width='100%'alt="Campaignion Output"/><br></br><br></br>
                            </div>
                        </div>    
                        <p>{project.tools}<br></br><br></br>
                            {showLink(project.link)}
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
import React, { Component } from 'react'; 

import heart from './assets/heart-icon.png';
import cartoon from './assets/cartoon.jpg'; 

import Github from './assets/icons/svg/032-github.svg'; 
import LinkedIn from './assets/icons/svg/052-linkedin.svg';
import Instagram from './assets/icons/svg/044-instagram.svg';

class About extends Component {
    render() {
        return(
            <div>
                <div className="content-container about">
                    <h1 className="h1 about">about me</h1><br></br>
                    <div className="row">
                        <p><h4>Hi! I'm Jess.</h4>I am currently a Tech Consultant on Adobe Campaign. 
                        I majored in <span><a href="http://cg.cis.upenn.edu/dmd.html" target="_blank" rel="noreferrer">Digital Media Design</a></span> and minored 
                        in Fine Arts at the University of Pennsylvania, where I graduated from the School of Engineering in May 2019.<br></br><br></br>
                        In my free time, I like drawing, cartooning on @peng.and.ink, watching stand-up/reality tv, and running. <br></br><br></br></p>
                                
                        <img id='cartoon' src={cartoon} alt="cartoon"/>
                    </div>
                    <div className="footer">
                        <p>Any questions? Feel free to email me at pengjess2@gmail.com.<br></br><br></br>
                        Made with <span><img id="heart" src={heart} alt="Heart"/></span> by Jess Peng<br></br><br></br>
                        <a href="https://www.linkedin.com/in/jess-peng/" target="_blank" rel="noreferrer"><img className="nav-btn" src={LinkedIn} alt="Github"/></a>
                        <a href="https://www.instagram.com/peng.and.ink/?hl=en" target="_blank" rel="noreferrer"><img className="nav-btn" src={Instagram} alt="Github"/></a>
                        <a href="https://github.com/jcpengy" target="_blank" rel="noreferrer"><img className="nav-btn" src={Github} alt="Github"/></a></p>
                    </div>
                </div>
            </div>
        )                    
    }
}

export default About; 
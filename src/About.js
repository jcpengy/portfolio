import React, { Component } from 'react'; 
import headshot from './assets/headshot.jpg';

import heart from './assets/heart-icon.png';
import cartoon from './assets/cartoon.jpg'; 


class About extends Component {
    render() {
        return(
            <div>
            <div className="content-container about">
                <h1 className="h1 header">about me</h1><br></br>
                    <div className="row">
                        {/* <div className="col">
                            <img src={headshot} alt="Headshot" width="450px"/>
                        </div>  */}
                        <div className="col">
                            <h4>Hi! I'm Jess.</h4><p className="p about">I am currently a Tech Consultant on Adobe Campaign. 
                            I majored in <span><a href="http://cg.cis.upenn.edu/dmd.html" target="_blank">Digital Media Design</a></span> and minored 
                            in Fine Arts at the University of Pennsylvania, where I graduated from the School of Engineering in May 2019.<br></br><br></br>
                            In my free time, I like graphic designing, cartooning on @peng.and.ink, watching stand-up/reality tv, and running. <br></br><br></br>
                            </p>
                        <img id='cartoon' src={cartoon}/>

                        </div>
                    </div>
            </div>

            <div className="content-container footer">
                Any questions? Feel free to email me at pengjess2@gmail.com.<br></br><br></br>
                Made with <span><img id="heart" src={heart} alt="Heart"/></span> by Jess Peng
            </div>
            </div>
        )                    
    }
}

export default About; 
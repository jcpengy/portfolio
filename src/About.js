import React, { Component } from 'react'; 
import headshot from './assets/headshot.jpg';
import pengandink from './assets/pengandink.png';
import pengandink2 from './assets/pengandink-selfie.png';
import pengandink3 from './assets/pengandink-selfie2.png'; 
import runningshoes from './assets/runningshoes.png'; 
import cats from './assets/cats.png'; 
import comedy from './assets/comedy.png';
import heart from './assets/heart-icon.png';


class About extends Component {
    render() {
        return(
            <div>
            <div className="content-container about">
                <h1 className="h1 header">about me</h1>
                    <div className="row">
                        {/* <div className="col">
                            <img src={headshot} alt="Headshot" width="450px"/>
                        </div>  */}
                        <div className="col">
                            <h4>Hi! I'm Jess.</h4><p className="p about">I am currently a Tech Consultant on Adobe Campaign. 
                            I majored in <span><a href="http://cg.cis.upenn.edu/dmd.html" target="_blank">Digital Media Design</a></span> and minored 
                            in Fine Arts at the University of Pennsylvania, where I graduated from the School of Engineering in May 2019.</p>

                        </div>
                    </div>
            </div>
            <div className="content-container hobbies">
                <h1 className="h1 thingsilike">Things I Like</h1>
                    <div className="row">
                        
                        <div className="col-sm-3">
                            <img className="portfolio-img" src={cats} alt="Cats"/>
                        </div>
                        <div className="col-sm-3">
                            <img className="portfolio-img" src={pengandink} alt="Peng and Ink"/>
                        </div>
                        <div className="col-sm-3">
                            <img className="portfolio-img" src={comedy} alt="Comedy"/>
                        </div>
                        <div className="col-sm-3">
                            <img className="portfolio-img" src={runningshoes} alt="Running"/>
                        </div>
                    </div>      
            </div>
            <div className="content-container footer">
                Any questions? Feel free to email me at pengjess2@gmail.com.<br></br><br></br>
                Made with <span><img width="20px" src={heart} alt="Heart"/></span> by Jess Peng
            </div>
            </div>
        )                    
    }
}

export default About; 
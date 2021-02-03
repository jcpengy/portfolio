import React, { Component } from 'react'; 
import headshot from './assets/headshot.jpg';
import pengandink from './assets/pengandink.png';
import pengandink2 from './assets/pengandink-selfie.png';
import pengandink3 from './assets/pengandink-selfie2.png'; 



class About extends Component {
    render() {
        return(
            <div>
                <h1 className="h1 header">About Me</h1>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={headshot} alt="Headshot" width="450px"/>
                        </div>
                        <div className="col">
                            <p className="p about"><span>Hi, I'm Jess!</span>I am currently a Tech Consultant based in NYC who works on the Campaign team at Adobe. I majored in Digital Media Design and 
                            minored in Fine Arts at the University of Pennsylvania, where I graduated from the 
                            School of Engineering in May 2019.<br></br><br></br>
                            In my free time, I love cartooning, making art, watching stand up, playing with my two cats, and running. </p>

                        </div>
                    </div>
                    <div className="row">
                        {/* <h2>Peng and Ink</h2> */}
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={pengandink2} alt="Peng and Ink" width="50%"/>
                            <img src={pengandink3} alt="Peng and Ink" width="50%"/>

                            <p className="p about">Inspired by old New Yorker cartoons, I started my own cartoon instagram called Peng and Ink as an outlet to showcase
                            my humor and creativity. It follows a potato-shaped, sassier, and much smaller version of me as I navigate the ups and downs of work, dating,
                            and everything in between. If you love cartoons or just want a laugh, feel free to check it out!:) 
                            </p>
                        </div>
                        <div className="col">
                            <img src={pengandink} alt="Peng and Ink" width="450px"/>
                        </div>
                    </div>      
                </div>
            </div>
        )                    
    }
}

export default About; 
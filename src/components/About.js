import React, { Component } from 'react'; 
import Contact from './Contact'; 

import Footer from './Footer';
// import cartoon from './assets/cartoon.jpg'; 

class About extends Component {
    render() {
        return(
            <div>
                <div className="content-container about">
                    <h1 className="h1 about">about me</h1><br></br>
                    <div className="row">
                        <h4>Hi! I'm Jess.</h4><p>I'm currently a Software Engineer on the DX Customer Engineering team at Adobe. I majored in Computer Science and Computer Graphics in the <span><a href="http://cg.cis.upenn.edu/dmd.html" target="_blank" rel="noreferrer">Digital Media Design</a></span> program and minored
                        in Fine Arts at the University of Pennsylvania, where I graduated from the School of Engineering in May 2019.<br></br><br></br>
                        In my free time, I love drawing pet portraits, cartooning on @officialceojess, running to a good playlist, and catching up on episodes of my favorite comedy/reality shows.<br></br><br></br></p>
                                
                        {/* <img id='cartoon' src={cartoon} alt="cartoon"/> */}
                    </div>
                    <br></br><br></br>
                    <p>• • • • • • •</p>
                    <br></br><br></br>
                    <Contact></Contact>
                    <Footer></Footer>
                </div>
            </div>
        )                    
    }
}

export default About; 

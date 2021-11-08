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
                        <h4>Hi! I'm Jess.</h4><p>I am currently a Tech Consultant at Adobe. 
                        I majored in Computer Science and Computer Graphics in the <span><a href="http://cg.cis.upenn.edu/dmd.html" target="_blank" rel="noreferrer">Digital Media Design</a></span> program and minored 
                        in Fine Arts at the University of Pennsylvania, where I graduated from the School of Engineering in May 2019. As a student, I was involved in the Society of Women Engineers, <i>The Daily Pennsylvanian</i>, Weiss Tech House, and Alpha Phi communities and interned at <i>The New York Times</i> and Molex.<br></br><br></br>
                        In my free time, I like drawing pet portraits, cartooning on @peng.and.ink, catching up on episodes of <i>The Bachelor</i>, and running. <br></br><br></br></p>
                                
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


import React, { Component } from 'react'; 

// NYT
import Syria2 from './assets/syria2.jpg'; 
import Syria from './assets/syriacover.jpg'; 
import Thai2 from './assets/thaicave-cutout.png';
import Crossword from './assets/nytcrossword.jpg'; 
 
// Molex
import Molex1 from './assets/2080card.png'; 
import Molex3 from './assets/fitfamilies.gif'; 

// Playful Palette
import Palette from './assets/playfulpalette.png'; 
import Palette2 from './assets/playfulpalette2.jpg'; 
import PaletteResults2 from './assets/playfulpalette-results2.png'; 

// Kessler Project
import Kessler1 from './assets/kessler-1.png';
import Kessler2 from './assets/kessler-2.png';
import Kessler3 from './assets/kessler-3.png'; 
import Kessler4 from './assets/kessler-4.png'; 
import Kessler5 from './assets/kessler-5.png'; 
import Kessler6 from './assets/kessler-6.png'; 
import KesslerCover from './assets/kessler-cover.png'; 

// Campaignion
import Camp1 from './assets/campaignion-2.png'; 
import Camp2 from './assets/campaignion-1.png';

//icons
import Github from './assets/icons/svg/032-github.svg'; 
import Youtube from './assets/icons/svg/116-youtube.svg'; 
import heart from './assets/heart-icon.png'; 
import GoogleDrive from './assets/icons/svg/036-googledrive.svg'; 
import LinkedIn from './assets/icons/svg/052-linkedin.svg';
import Instagram from './assets/icons/svg/044-instagram.svg';

class Portfolio extends Component {

    render() {
        return (
        <div>
            <div className="content-container portfolio">

                <div className="row">
                    <h3>Campaignion</h3><br></br>
                    <p>Campaignion is an internal web application I built to standardize and expedite the workflow documentation process in Adobe Campaign. It parses browser HTML and generates a numbered workflow with description tables that can be exported to Word.</p>
                    <div className="row">  
                        <div className="col-sm-6">
                            <img class='cropped' src={Camp1} width='100%' alt="Campaignion Input"/><br></br><br></br>
                        </div>
                        <div className="col-sm-6">
                            <img class='cropped' src={Camp2} width='100%'alt="Campaignion Output"/><br></br><br></br>
                        </div>
                    </div>    
                    <p>Tools Used: JavaScript, React Spectrum, Adobe I/O Runtime, HTML/CSS</p>
                </div>

                <br></br><br></br>
                <p>• • • • • • •</p>
                <br></br><br></br>

                <div className="row">
                    <h3>Adobe's Playful Palette</h3><br></br>
                    <p>For my senior design project, I reimplemented <a href="https://research.adobe.com/publication/playful-palette-an-interactive-parametric-color-mixer-for-artists/" target="_blank" rel="noreferrer">
                    Adobe's Playful Palette</a>, an interactive parametric color mixer for digital artists.
                    You can blend color blobs to create gradients and easily recolor strokes with an infinite history.</p>
                    <div className="row">  
                        <div className="col-sm-6">
                            <img className="portfolio-img" src={Palette2} alt="Playful Palette"/><br></br><br></br>
                            <img className="portfolio-img" src={PaletteResults2} alt="Playful Palette Results"/><br></br><br></br>                        
                        </div>
                        <div className="col-sm-6">
                            <img className="portfolio-img" src={Palette} alt="Playful Palette"/><br></br><br></br>
                        </div>
                    </div>   
                    <p>Tools Used: JavaScript, WebGL, HTML/CSS<br></br><br></br>
                        <a href="https://docs.google.com/document/d/1AE245QrD4Qwe_OkZKNu6Izy1jiXGPli55S3L2oGW-_8/edit?usp=sharing" target="_blank" rel="noreferrer"><img className="icon" src={GoogleDrive} alt="Google Drive"/></a>
                        <a href="https://www.youtube.com/watch?v=Zh1XR9ykuUw&t=1s" target="_blank" rel="noreferrer"><img className="icon" src={Youtube} alt="Youtube"/></a>
                        <a href="https://github.com/jesspeng/playful-palette" target="_blank" rel="noreferrer"><img className="icon" src={Github} alt="Github"/></a>
                    </p>
                    
                </div>

                <br></br><br></br>
                <p>• • • • • • •</p>
                <br></br><br></br>


                <div className="row">
                    <h3>Kessler Project</h3><br></br>
                    <p>Chosen as one of 6 teams from over 250 nationally for the 2019 Walt Disney Imaginations
                    Design Competition, my team conceptualized and created Kessler Project, an all-day space adventure that allows guests to experience the excitement
                    of space travel. I led design and development of all visual art, both 2d and 3d, 
                    for our submission slides and presentation to the Imagineering executives.<br></br><br></br>
                    Read more about our project in the <span><a href="http://www.philly.com/philly/education/disney-college-contest-yields-careers-as-imagineers-20180119.html" target="_blank" rel="noreferrer">
                    Philadelphia Inquirer</a></span> and the competition on the <span><a href="https://disneyimaginations.com/2018-imaginations-finalists/" target="_blank" rel="noreferrer">
                    WDI website</a></span>.</p>                    
                    <div className="row">  
                        <div class="slider">
                            <div class="slides">
                                <div id="slide-1">
                                    <img className="portfolio-img" src={KesslerCover} alt="Kessler"/>
                                </div>
                                <div id="slide-2">
                                    <img className="portfolio-img" src={Kessler1} alt="Kessler"/>
                                </div>
                                <div id="slide-3">
                                    <img className="portfolio-img" src={Kessler2} alt="Kessler"/>
                                </div>
                                <div id="slide-4">
                                    <img className="portfolio-img" src={Kessler3} alt="Kessler"/>
                                </div>
                                <div id="slide-5">
                                    <img className="portfolio-img" src={Kessler4} alt="Kessler"/>
                                </div>
                                <div id="slide-6">
                                    <img className="portfolio-img" src={Kessler5} alt="Kessler"/>
                                </div>
                                <div id="slide-7">
                                    <img className="portfolio-img" src={Kessler6} alt="Kessler"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>Tools Used: Maya, KeyShot6, Photoshop, Illustrator</p>
                </div>

                <br></br><br></br>
                <p>• • • • • • •</p>
                <br></br><br></br>

                <div className="row">
                    <h3>The New York Times</h3><br></br>
                    <p>As a Graphics intern on the Immersive Storytelling team, I 
                    prototyped 3-D assets to visualize AR moments, researched and tested emerging technologies like the Microsoft Hololens, 
                    and contributed graphics in the articles below. I also styled and contributed to UI functionality in our intern-led <span><a href="https://johnwestwig.github.io/three-d-crossword/" target="_blank" rel="noreferrer">3-D Crossword project</a></span> built using Three.js.</p>                    
                    <div className="row">  
                        <div className="col-sm-7">
                            <img className="portfolio-img" src={Syria} alt="The New York Times"/><br></br><br></br>
                            <img className="portfolio-img" src={Thai2} alt="The New York Times"/><br></br><br></br>
                        </div>
                        <div className="col-sm-5">
                            <img className="portfolio-img" src={Syria2} alt="The New York Times"/><br></br><br></br>
                        </div>
                    </div>    
                    <p>Articles where I received credit:<br></br>
                    <a href="https://www.nytimes.com/interactive/2018/06/24/world/middleeast/douma-syria-chemical-attack-augmented-reality-ar-ul.html" target="_blank" rel="noreferrer">"How We Created a Virtual Crime Scene to Investigate Syria's Chemical Attack"
                    </a><br></br> <span><a href="https://www.nytimes.com/interactive/2018/07/21/world/asia/thai-cave-rescue-ar-ul.html?mtrref=undefined&gwh=52CFC0C2E69BFBA38E84AF8D367CCE69&gwt=regi&assetType=REGIWALL" target="_blank" rel="noreferrer">
                    "Step Inside the Thai Cave in Augmented Reality"</a></span><br></br><br></br>
                    Tools Used: Maya, Photoshop, Illustrator, After Effects, Sketchfab</p>
                </div>

                <br></br><br></br>
                <p>• • • • • • •</p>
                <br></br><br></br>

                <div className="row">
                    <h3>Molex</h3><br></br>
                    <p>As a Product Management Intern under the Power Signal Business Unit, I designed 3-D
                    visuals and animations to market the company's new line 
                    of power connectors. I also developed VR mock-ups and introduced KeyShot to the Digital Marketing Team to add
                    dynamic content to their web and mobile platforms.</p>                    
                    <div className="row">  
                        <div className="col-sm-6">
                            <img src={Molex1} alt="Molex" width="100%"/><br></br><br></br>
                        </div>
                        <div className="col-sm-6">
                            <img src={Molex3} alt="Molex" width="100%"/><br></br><br></br>
                        </div>
                    </div>    
                    <p>Tools Used: Maya, KeyShot6, Illustrator, After Effects</p>
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

export default Portfolio; 
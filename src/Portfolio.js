

import React, { Component } from 'react'; 
import { Slide } from 'react-slideshow-image';

import Syria2 from './assets/syria2.jpg'; 
import Syria from './assets/syriacover.jpg'; 
import Thai from './assets/thaicavecover.png';
import Thai2 from './assets/thaicave-cutout.png';
import Crossword from './assets/nytcrossword.jpg'; 

import Molex1 from './assets/2080card.png'; 
import Molex2 from './assets/2080board.png'; 
import Molex3 from './assets/fitfamilies.gif'; 
import FitFamiliesAnimation from './assets/FiTFamiliesAnimation.mp4';

import Palette from './assets/playfulpalette.png'; 
import Palette2 from './assets/playfulpalette2.jpg'; 

import PaletteResults from './assets/playfulpalette-results.png'; 
import PaletteResults2 from './assets/playfulpalette-results2.png'; 

import Kessler1 from './assets/kessler-1.png';
import Kessler2 from './assets/kessler-2.png';
import Kessler3 from './assets/kessler-3.png'; 
import Kessler4 from './assets/kessler-4.png'; 
import Kessler5 from './assets/kessler-5.png'; 
import Kessler6 from './assets/kessler-6.png'; 
import KesslerStation from './assets/kesslerstation.png'; 
import KesslerPoster from './assets/kessler-poster.png'; 
import KesslerCover from './assets/kessler-cover.png'; 


// design
import Eid from './assets/eidmubarak.png'; 
import Rivers from './assets/rivers.png'; 
import Daisy from './assets/daisy.png'; 
import Rainbow from './assets/Rainbow.png'; 
import House from './assets/house.png'
import Wood from './assets/woodshop.png'; 
import Knox from './assets/knoxglow.png'; 
import Rise from './assets/riseup.png';
import Tappers from './assets/tappers.png'; 
import Jackie from './assets/jackie.png'; 
import Running from './assets/running.png'; 
import Law from './assets/law.png'; 
import Record from './assets/allison.png'; 
import JessPDesign from './assets/jesspdesign.png';
import Camp1 from './assets/campaignion-2.png'; 
import Camp2 from './assets/campaignion-1.png';

// art
import Rodin from './assets/rodinkitchen.png'; 
import SGB from './assets/blackoutday2020.png'; 
import Nainai from './assets/nainai.jpg'; 
import Yeye from './assets/yeye.jpg'; 
import Friends from './assets/friends.jpg'; 

import Sketches from './assets/100sketch.png'; 




//icons
import Github from './assets/icons/svg/032-github.svg'; 
import Youtube from './assets/icons/svg/116-youtube.svg'; 
import heart from './assets/heart-icon.png'; 
import GoogleDrive from './assets/icons/svg/036-googledrive.svg'; 

class Portfolio extends Component {
   
    render() {
        return (
        <div>
             <div className="content-container">
             <div className="row portfolio">
                <h3 className="h3 design">Campaignion</h3>
                <br></br>
                <div className="row">
                        <p className="p design">As a Technical Consultant on Adobe Campaign, I took the initiative to 
                        research, design, and code Campaignion, a web app that semi-automates email workflow documentation.</p>
                </div>
                
                <div className="row">  
                    <img class='cropped' src={Camp1} width='100%'/>
                    <img class='cropped' src={Camp2} width='100%'/>
                </div>
            </div>

                    <br></br><br></br>
                    <p className="p design">• • • • • • •</p>
                <br></br><br></br>



                <div className="row portfolio">
                    <h3 className="h3 design">JessPDesign</h3>
                <br></br>
                <div className="row">
                        <p className="p design">Check out my Etsy shop for graphic design <a href='https://www.etsy.com/shop/JessPDesign'>here</a> or view my full portfolio on <a href='https://www.etsy.com/shop/JessPDesign'>Behance.</a></p>
                </div>
                
                <img class='cropped' src={JessPDesign} width='100%'/>
                    {/* <div class="row">
                        <div class="col"><img class='cropped' src={Rise} width='100%'/></div>
                        <div class="col"><img class='cropped' src={Tappers} width='100%'/></div>
                        <div class="col"><img class='cropped' src={Jackie} width='100%'/></div>
                        
                    <div class="w-100"></div><br></br>
                    <div class="col"><img class='cropped' src={Running} width='100%'/></div>
                    <div class="col"><img class='cropped' src={Law} width='100%'/></div>
                    <div class="col"><img class='cropped' src={Record} width='100%'/></div>
                    </div> */}
                </div>
                <br></br><br></br>
                    <p className="p design">• • • • • • •</p>
                <br></br><br></br>
                {/* <div className="row">
                        <p className="p design">Personal Art Collection</p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col"><img src={Nainai} width='100%'/></div>
                        <div class="col"><img src={Yeye} width='100%'/></div>
                        <div class="col"><img src={Friends} width='100%'/></div>
                    <div class="w-100"></div>
                        <div class="col"></div>
                        <div class="col"></div>
                    </div>
                </div> */}

                {/* <div className="row">
                        <p className="p design">100 Mini Portraits</p><br></br>
                        <p className="p design">Currently working on a personal project to do 100 illustrations of what I see in the news and pop culture. All drawings are done on my iPhone using Adobe Fresco.</p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col"><img src={Sketches} width='100%'/></div>
                    </div>
                </div> */}
                    
                {/* </div> */}
                {/* <div className="content-container"> */}
                <div className="row portfolio">
                    <h3 className="h3 design">Adobe's Playful Palette</h3>
                <br></br>
                {/* <div className="tagsdiv">
                    <p className="tags">coding</p>
                    <p className="tags">ux design</p>
                </div> */}
                <div className="row">
                <p className="p design">For my senior design project, I reimplemented <a href="https://research.adobe.com/publication/playful-palette-an-interactive-parametric-color-mixer-for-artists/" target="_blank">
                          Adobe's Playful Palette</a>, an interactive parametric color mixer for artists that improves existing digital paint applications.
                        The palette allows you to blend color blobs to create gradients and easily recolor strokes with an infinite history.<br></br><br></br>
                        Tools Used: WebGL, JavaScript, HTML/CSS</p>
                        <div className="icons portfolio">
                            <a href="https://docs.google.com/document/d/1AE245QrD4Qwe_OkZKNu6Izy1jiXGPli55S3L2oGW-_8/edit?usp=sharing" target="_blank"><img className="icon" src={GoogleDrive} alt="Google Drive"/></a>
                            <a href="https://www.youtube.com/watch?v=Zh1XR9ykuUw&t=1s" target="_blank"><img className="icon" src={Youtube} alt="Youtube"/></a>
                            <a href="https://github.com/jesspeng/playful-palette" target="_blank"><img className="icon" src={Github} alt="Github"/></a>
                        </div>
                </div>
                <div className="row"> 
                <div className="col">
                        <img className="portfolio-img" src={Palette2} alt="Playful Palette"/><br></br><br></br>
                        <img className="portfolio-img" src={PaletteResults2} alt="Playful Palette Results"/>
                </div>
                <div className="col">
                        <img className="portfolio-img" src={Palette} alt="Playful Palette"/><br></br><br></br>
                </div>
                </div> 
                </div>

                   
           
                <br></br><br></br>
                    <p className="p design">• • • • • • •</p>
                <br></br><br></br>
                {/* </div> */}

                {/* <div className="content-container"> */}
                <div className="row portfolio">
                    <h3 className="h3 design">Kessler Project</h3>
                
                {/* <div>
                    <p className="tags">experience design</p>
                    <p className="tags">3d modeling</p>
                    <p className="tags">infographics</p>
                    <p className="tags">digital painting</p>
                </div> */}
                  <div className="row">
               
                        {/* <img id="kessler-slides" src={KesslerStation} alt="Kessler"/> */}
                        <p className="p design">Chosen as one of 6 teams from over 250 nationally for the 2019 Walt Disney Imaginations
                        Design Competition, my team conceptualized and created Kessler Project, an all-day space adventure that allows guests to experience the excitement
                        of space travel. I led design and development of all visual art, both 2d and 3d, 
                        for our submission slides and presentation to the Imagineering executives.<br></br><br></br>
                        Read more about it <span><a href="http://www.philly.com/philly/education/disney-college-contest-yields-careers-as-imagineers-20180119.html" target="_blank">
                        here</a></span> and <span><a href="https://disneyimaginations.com/2018-imaginations-finalists/" target="_blank">
                        here</a></span>. <br></br><br></br>
                        Tools Used: Maya, KeyShot, Photoshop, Illustrator</p>
               
               

                <div className="col">
                        <div class="slider">
                            {/* <a href="#slide-1">1</a>
                            <a href="#slide-2">2</a>
                            <a href="#slide-3">3</a>
                            <a href="#slide-4">4</a>
                            <a href="#slide-5">5</a> */}

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
                    </div>
                    </div>
                   
                  
                {/* </div> */}
                <br></br><br></br>
                    <p className="p design">• • • • • • •</p>
                <br></br><br></br>
                {/* <div className="content-container"> */}
                <div className="row portfolio">
                    <h3 className="h3 design">The New York Times</h3>
                <br></br>
                {/* <div>
                    <p className="tags">prototyping</p>
                    <p className="tags">research</p>
                    <p className="tags">coding</p>
                    <p className="tags">animation</p>
                </div> */}
                <div className="row">
                    <div>
                        <p className="p design">As a Graphics intern on the Immersive Storytelling team, I 
                        prototyped 3-D assets to visualize AR moments, researched and tested emerging technologies like the Microsoft Hololens, 
                        and contributed cover images and infographics in the articles below. I also developed the front-end of our intern-led 3-D Crossword <span><a href="https://johnwestwig.github.io/three-d-crossword/" target="_blank">project</a></span>.
                        </p>
                    </div>
                    <div className="col-sm-7">
                        <img className="portfolio-img" src={Syria} alt="The New York Times"/><br></br><br></br>
                        <img className="portfolio-img" src={Thai2} alt="The New York Times"/><br></br><br></br>
       
                    </div>
                    <div className="col-sm-5">
                        <img className="portfolio-img" src={Syria2} alt="The New York Times"/><br></br><br></br>
                      
                    </div>
                    <div class="row">
                        <p className="p design">Articles where I received credit:<br></br>
                        <a href="https://www.nytimes.com/interactive/2018/06/24/world/middleeast/douma-syria-chemical-attack-augmented-reality-ar-ul.html" target="_blank">"How We Created a Virtual Crime Scene to Investigate Syria's Chemical Attack"
                        </a><br></br> <span><a href="https://www.nytimes.com/interactive/2018/07/21/world/asia/thai-cave-rescue-ar-ul.html?mtrref=undefined&gwh=52CFC0C2E69BFBA38E84AF8D367CCE69&gwt=regi&assetType=REGIWALL" target="_blank">
                        "Step Inside the Thai Cave in Augmented Reality"</a></span><br></br><br></br>
                        Tools Used: Maya, Photoshop, Illustrator, After Effects, Sketchfab</p>
                        </div>

                </div>
                </div>
                {/* </div> */}
                <br></br><br></br>
                    <p className="p design">• • • • • • •</p>
                <br></br><br></br>
                {/* <div className="content-container"> */}
                <div className="row portfolio">
                    <h3 className="h3 design">Molex</h3>
                </div><br></br>
                <div className="row">

                        <p className="p design">As a Product Management Intern under the Power Signal Business Unit, I designed 3-D
                        visuals and animations to market the company's new line 
                        of power connectors. I also developed VR mockups and introduced KeyShot to the Digital Marketing Team to add
                        dynamic content to their web and mobile platforms.<br></br><br></br>
                        Tools Used: Maya, KeyShot, Illustrator, After Effects</p>
                   
                
                {/* <div>
                    <p className="tags">visual design</p>
                    <p className="tags">animation</p>
                    <p className="tags">photography</p>
                </div> */}
               
                    <div className="col">
                    {/* <video className="portfolio-img" controls>
                        <source src={FitFamiliesAnimation} type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video> */}

                        <img src={Molex1} alt="Molex" width="100%"/><br></br><br></br>

                    </div>
                    <div className="col">
                    <img src={Molex3} alt="Molex" width="100%"/>
                        <br></br><br></br>
                    </div>
                    </div>
                    
                {/* </div> */}

               

                {/* <div className="container">
                <div className="row portfolio">
                    <p>5 of 5<span><h3>Volunteering</h3></span></p>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <img src={SGB} alt="Spicy Green Book" width="100%"/>
                    </div>
                    <div className="col-sm-4">
                        <h3>Spicy Green Book and Black Power Blueprint</h3>
                        <div>
                            <p className="tags">graphic design</p>
                        </div>
                        <p className="p portfolio">On the side, I contribute graphic design to Spicy Green Book
                        and Black Power Blueprint. Spicy Green Book is a team of volunteers committed to help 
                        compile a directory of black owned businesses, while Black Power Blueprint is a program that strives
                        to transform North St. Louis through renovation, economic development, and political power by 
                        and for the black community.<br></br><br></br>
                        Tools Used: Maya, KeyShot, Illustrator, After Effects</p>
                    </div>
                </div>
                </div> */}
                </div>
                 <div className="content-container footer">
                Any questions? Feel free to email me at pengjess2@gmail.com.<br></br><br></br>
                Made with <span><img id="heart" src={heart} alt="Heart"/></span> by Jess Peng
            </div>
            </div>
        // </div>
        )
    }
}

export default Portfolio; 
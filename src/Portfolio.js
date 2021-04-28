

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

import SGB from './assets/blackoutday2020.png'; 

//icons
import Github from './assets/icons/svg/032-github.svg'; 
import Youtube from './assets/icons/svg/116-youtube.svg'; 
import heart from './assets/heart-icon.png'; 
import GoogleDrive from './assets/icons/svg/036-googledrive.svg'; 

class Portfolio extends Component {
   
    render() {
        return (
        <div>
                <div className="content-container playful-palette">
                <div className="row portfolio">
                    <p className="p playfulpalette">1 of 4<span><h3 className="h3 playful-palette">Adobe's Playful Palette</h3></span></p>
                </div>
                <div>
                    <p className="tags">coding</p>
                    <p className="tags">ux design</p>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="portfolio-img" src={Palette2} alt="Playful Palette"/><br></br><br></br>
                        <img className="portfolio-img" src={PaletteResults2} alt="Playful Palette Results"/>

                    </div>
                    <div className="col-sm-6">
                        <img className="portfolio-img" src={Palette} alt="Playful Palette"/><br></br><br></br>

                        <p className="p playfulpalette">For my senior design project, I recreated 
                        <span><a href="https://research.adobe.com/publication/playful-palette-an-interactive-parametric-color-mixer-for-artists/" target="_blank">
                         Adobe's Playful Palette</a></span>, an interactive parametric color mixer for artists that mimics and enhances the traditional
                        painting process. The palette allows you to blend color blobs to create gradients and easily recolor strokes with an infinite history. <br></br><br></br>
                        Tools Used: WebGL, JavaScript, HTML/CSS</p>
                        <div className="icons portfolio">
                            <a href="https://docs.google.com/document/d/1AE245QrD4Qwe_OkZKNu6Izy1jiXGPli55S3L2oGW-_8/edit?usp=sharing" target="_blank"><img className="icon" src={GoogleDrive} alt="Google Drive"/></a>
                            <a href="https://www.youtube.com/watch?v=Zh1XR9ykuUw&t=1s" target="_blank"><img className="icon" src={Youtube} alt="Youtube"/></a>
                            <a href="https://github.com/jesspeng/playful-palette" target="_blank"><img className="icon" src={Github} alt="Github"/></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                    </div>
                </div>
                </div>

                <div className="content-container imagineering">
                <div className="row portfolio">
                    <p className="p imagineering">2 of 4<span><h3 className="h3 imagineering">Kessler Project</h3></span></p>
                </div>
                <div>
                    <p className="tags">experience design</p>
                    <p className="tags">3d modeling</p>
                    <p className="tags">infographics</p>
                    <p className="tags">digital painting</p>
                </div>

                <div className="row">
                    <div className="col-sm-7">
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
                    <div className="col-sm-5">
                        <br></br>
                        <img width="80%" src={KesslerStation} alt="Kessler"/>
                        <br></br><br></br>
                        <p className="p imagineering">Chosen as one of 6 teams from over 250 nationally for the 2019 Disney Imagineering Imaginations
                        Design Competition, my team conceptualized and created Kessler Project, an all-day space adventure that allows guests to experience the excitement
                        of space travel. I led design and development of all visual art, both 2d and 3d, 
                        for our submission slides and presentation to the Imagineering executives.<br></br><br></br>
                        Read more about it <span><a href="http://www.philly.com/philly/education/disney-college-contest-yields-careers-as-imagineers-20180119.html" target="_blank">
                        here</a></span> and <span><a href="https://disneyimaginations.com/2018-imaginations-finalists/" target="_blank">
                        here</a></span>. <br></br><br></br>
                        Tools Used: Maya, KeyShot, Photoshop, Illustrator</p>
                    </div>
                </div>
                </div>

                <div className="content-container nyt">
                <div className="row portfolio">
                    <p className="p nyt">3 of 4<span><h3 className="h3 nyt">The New York Times</h3></span></p>
                </div>
                <div>
                    <p className="tags">prototyping</p>
                    <p className="tags">research</p>
                    <p className="tags">coding</p>
                    <p className="tags">animation</p>
                </div>
                <div className="row">
                    <div>
                        <p className="p nyt">As a Graphics intern on the Immersive Storytelling team, I 
                        prototyped 3-D assets to visualize AR moments, researched and tested emerging technologies, 
                        and contributed cover images and assets <span><a href="https://www.nytimes.com/interactive/2018/06/24/world/middleeast/douma-syria-chemical-attack-augmented-reality-ar-ul.html" target="_blank">
                        here</a></span> and <span><a href="https://www.nytimes.com/interactive/2018/07/21/world/asia/thai-cave-rescue-ar-ul.html?mtrref=undefined&gwh=52CFC0C2E69BFBA38E84AF8D367CCE69&gwt=regi&assetType=REGIWALL" target="_blank">
                        here</a></span>.<br></br><br></br>
                        Tools Used: Maya, Photoshop, Illustrator, After Effects, Sketchfab</p>
                    </div>
                    <div className="col-sm-7">
                        <img className="portfolio-img" src={Syria} alt="The New York Times"/><br></br><br></br>
                        <img className="portfolio-img" src={Thai2} alt="The New York Times"/>
                           
                        {/* <Slide className="slide" easing="ease">
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                                </div>
                            </div>
                        </Slide> */}
                    </div>
                    <div className="col-sm-5">
                        <img className="portfolio-img" src={Syria2} alt="The New York Times"/><br></br><br></br>
                        <p className="p nyt">I also did some front-end development for our intern-led 3-D Crossword <span><a href="https://johnwestwig.github.io/three-d-crossword/" target="_blank">project</a></span>.
                        </p>
                    </div>
                </div>
                </div>

                <div className="content-container molex">
                <div className="row portfolio">
                    <p className="p molex">4 of 4<span><h3 className="h3 molex">molex</h3></span></p>
                </div>
                <div>
                    <p className="tags">visual design</p>
                    <p className="tags">animation</p>
                    <p className="tags">photography</p>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                    {/* <video className="portfolio-img" controls>
                        <source src={FitFamiliesAnimation} type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video> */}

                        <img src={Molex1} alt="Molex" width="100%"/>

                    </div>
                    <div className="col-sm-4">
                    <img src={Molex3} alt="Molex" width="100%"/>

                        <p className="p molex">As a Product Management Intern under the Power Signal Business Unit, I designed 3-D
                        visuals and animations to market the company's new line 
                        of power connectors. I also developed VR mockups and introduced applications
                        like KeyShot to the Digital Marketing Team for adding dynamic content to their web
                        and mobile platforms.<br></br><br></br>
                        Tools Used: Maya, KeyShot, Illustrator, After Effects</p>
                    </div>
                </div>
                </div>

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
                 <div className="content-container footer">
                Any questions? Feel free to email me at pengjess2@gmail.com.<br></br><br></br>
                Made with <span><img width="20px" src={heart} alt="Heart"/></span> by Jess Peng
            </div>
            </div>
        // </div>
        )
    }
}

export default Portfolio; 
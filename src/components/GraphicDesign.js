import React, { Component } from 'react';
import Contact from './Contact';

import Footer from './Footer';
import {Link} from "react-tiger-transition";

class GraphicDesign extends Component {
    render() {
        return(
            <div className="content-container portfolio">
                <div className="dropdown">
                    <button>Portfolio</button>
                    <div className="dropdown-options">
                        <Link to="/uxDesign">
                            <div className="dropdown-option">ux design</div>
                        </Link>
                        <Link to="/graphicDesign">
                            <div className="dropdown-option">graphic design</div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div class="col-6">
                            <img class="graphic-design-img"
                                 src="https://i.postimg.cc/jSPBtPPR/Screen-Shot-2023-06-06-at-9-25-07-PM.png"
                                 alt=""/>
                        </div>
                        <div class="col-6">
                            <img class="graphic-design-img"
                                 src="https://i.postimg.cc/B6qrhb84/Screen-Shot-2023-06-06-at-9-25-27-PM.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img className="graphic-design-img"
                                 src="https://i.postimg.cc/Bn9wYbyk/Screen-Shot-2023-06-06-at-9-28-53-PM.png"
                                 alt=""/>
                        </div>
                        <div className="col-6">
                            <img className="graphic-design-img"
                                 src="https://i.postimg.cc/d1LbMX9x/Screen-Shot-2023-06-06-at-9-29-54-PM.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img className="graphic-design-img"
                                 src="https://i.postimg.cc/pLckNd1P/Screen-Shot-2023-06-06-at-9-31-32-PM.png"
                                 alt=""/>
                        </div>
                        <div className="col-6">
                            <img className="graphic-design-img"
                                 src="https://i.postimg.cc/d3QTt2Lp/Screen-Shot-2023-06-06-at-9-32-16-PM.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img className="graphic-design-img"
                                 src="https://i.postimg.cc/wMPT8LJh/Screen-Shot-2023-06-06-at-9-34-14-PM.png"
                                 alt=""/>
                        </div>
                        <div className="col-6">
                            <img className="graphic-design-img"
                                 src="https://i.postimg.cc/kX6gNY3w/Screen-Shot-2023-06-06-at-9-35-00-PM.png"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img className="graphic-design-img"
                                 src="https://i.postimg.cc/L8j4wqs1/Screen-Shot-2023-06-06-at-9-35-34-PM.png"
                                 alt=""/>
                        </div>
                        <div className="col-6">
                            <img className="graphic-design-img"
                                 src="https://i.postimg.cc/G2gbGGXZ/Screen-Shot-2023-06-06-at-9-36-21-PM.png"
                                 alt=""/>
                        </div>
                    </div>
                    <br></br><br></br>
                    <p>• • • • • • •</p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default GraphicDesign;

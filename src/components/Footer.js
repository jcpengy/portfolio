import React, { Component } from 'react'; 

import heart from '../assets/heart-icon.png';

import Github from '../assets/icons/svg/032-github.svg'; 
import LinkedIn from '../assets/icons/svg/052-linkedin.svg';
import Instagram from '../assets/icons/svg/044-instagram.svg';

class Footer extends Component {
    render() {
        return(
            <div>
                <div className="footer">
                    <p>Made with <span><img id="heart" src={heart} alt="Heart"/></span> by Jess Peng<br></br><br></br>
                    <a href="https://www.linkedin.com/in/jess-peng/" target="_blank" rel="noreferrer"><img className="nav-btn" src={LinkedIn} alt="Github"/></a>
                    <a href="https://www.instagram.com/peng.and.ink/?hl=en" target="_blank" rel="noreferrer"><img className="nav-btn" src={Instagram} alt="Github"/></a>
                    <a href="https://github.com/jcpengy" target="_blank" rel="noreferrer"><img className="nav-btn" src={Github} alt="Github"/></a></p>
                </div>
            </div>
        )                    
    }
}

export default Footer; 
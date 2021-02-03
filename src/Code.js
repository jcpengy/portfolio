import React, { Component } from 'react'; 
import PlayfulPalette2 from './assets/playfulpalette2.jpg';
import NYTCrossword from './assets/nytcrossword.jpg';
import SyriaCover from './assets/syriacover.jpg';

import Campaignion from './assets/campaignion-2.png'; 
import autoscroll from 'autoscroll-react'


class Code extends Component {

    render() {
      const { ...props } = this.props
        return (
          <div { ...props }>
            <div class="content-container">
              <div class="row">
                    <img src={Campaignion} alt="Campaignion thumbnail" class="cropped"></img>
             </div>
       
              <div class="row">
                  <img src={PlayfulPalette2} alt="Playful Palette thumbnail" class="cropped"></img>
              </div>

              <div class="row">
                    <img src={NYTCrossword} alt="NYT Crossword thumbnail" class="cropped"></img>
             </div>
            </div>
          </div>
        ) 
    }
}
export default autoscroll(Code); 
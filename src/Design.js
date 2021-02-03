import React, { Component } from 'react'; 
import {Image} from '@adobe/react-spectrum'
import TATP from './assets/TATP.png'; 
import BPB1 from './assets/bpb-infographic-01.png'; 
import BPB2 from './assets/bpb-infographic-03.png'; 
import BlackOutDay2020 from './assets/blackoutday2020.png';
import BlackOut from './assets/blackout.png';


class Design extends Component {

    render() {
        return (
          <div>
            <div class="content-container">
              <div class="row">
                <Image src={BlackOutDay2020} alt="Spicy Green Book thumbnail" class="cropped"></Image>
              </div> 
              <div class="row">
                <Image src={BlackOut} alt="Spicy Green Book thumbnail" class="cropped"></Image>
             </div> 
              <div class="row">
                <Image src={BPB1} alt="Black Power Blueprint thumbnail" class="cropped"></Image>
              </div>
              <div class="row">
                <Image src={BPB2} alt="Black Power Blueprint thumbnail" class="cropped"></Image>
             </div>
              <div class="row">
                <Image src={TATP} alt="TATP thumbnail" class="cropped"></Image>
             </div>    
            </div>
          </div>
        ) 
    }
}
export default Design; 
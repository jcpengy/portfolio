import React, { Component } from 'react'; 
import Syria from './assets/syriacover.jpg'; 
import ThaiCave from './assets/thaicave-cutout.png'; 
import Kessler from './assets/kessler-2.png'; 
import GasTracer from './assets/gastracer.gif'; 

class ThreeD extends Component {

    render() {
        return (
          <div>
            <div class="content-container">
              <div class="row">
                <img src={Syria} alt="Syria thumbnail" class="cropped"></img>
             </div>
       
              <div class="row">
                <img src={ThaiCave} alt="Thai Cave thumbnail" class="cropped"></img>
              </div>

              <div class="row">
                <img src={Kessler} alt="Kessler thumbnail" class="cropped"></img>
             </div>

             <div class="row">
                {/* <img src={GasTracer} alt="Gas Tracer GIF" class="cropped"></img> */}
             </div>
            </div>
          </div>
        ) 
    }
}
export default ThreeD; 
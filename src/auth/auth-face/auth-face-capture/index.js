import React, { Component } from 'react'
import './auth-face-capture.css';
import * as images from '../../auth-constants';

class CaptureYourFace extends Component {
    state = {  }
    render() { 
        return ( <div className="RcgYrCap_wrapper row">
            <div className="col-6">
                <img src={images.logo} alt="Logo" className="RcgYrCap_logo"/>
                <div className="RcgYrCap_left">
                <div className="RcgYrCap_heading">SMILE WE ARE CAPTURING YOU</div>
                <br/>
                <div className="RcgYrCap_text">Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                  <br/>
                  <div className="RcgYrCap_button">
          <p>NEXT</p>
        </div></div>
            </div>
            <div className="RcgYrCap_right col-6 d-flex justify-content-end">
                <img src={images.faceCap} alt="faceImage" className="RcgYrCap_rImag"/>
                <img src={images.OrgImg} alt="orange_img" className="RcgYrCap_rMain"/>
            </div>
        </div> );
    }
}
 
export default CaptureYourFace;
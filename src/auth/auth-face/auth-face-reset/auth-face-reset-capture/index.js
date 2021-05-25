import React, { Component } from 'react'
import './auth-face-reset-capture.css';
import * as images from '../../../auth-constants';

class ResetCaptureYourFace extends Component {
    state = {  }
    render() { 
        return ( <div className="ResetRcgYrCap_wrapper row">
            <div className="col-6">
                <img src={images.logo} alt="Logo" className="ResetRcgYrCap_logo"/>
                <div className="ResetRcgYrCap_left">
                <div className="ResetRcgYrCap_heading">ADJUST THE LIGHT for your <br/>perfect  IMAGE RECOGNITION</div>
                <br/>
                <div className="ResetRcgYrCap_text">Lorem ipsum dolor sit amet, consectetur
                 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                  <br/>
                  <div className="ResetRcgYrCap_button">
          <p>NEXT</p>
        </div></div>
            </div>
            <div className="ResetRcgYrCap_right col-6 d-flex justify-content-end">
                <img src={images.faceCap} alt="faceImage" className="ResetRcgYrCap_rImag"/>
                <img src={images.OrgImg} alt="orange_img" className="ResetRcgYrCap_rMain"/>
            </div>
        </div> );
    }
}
 
export default ResetCaptureYourFace;
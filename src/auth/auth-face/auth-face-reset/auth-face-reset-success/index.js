import React, { Component } from 'react'
import './auth-face-reset-success.css';
import * as images from '../../../auth-constants';

class ResetCaptureSuccess extends Component {
    state = {  }
    render() { 
        return ( <div className="ResetRcgSucess_wrapper row">
            <div className="col-6">
                <img src={images.logo} alt="Logo" className="ResetRcgSucess_logo"/>
                <div className="ResetRcgSucess_left">
                <div className="ResetRcgSucess_heading">PERFECT ! It’s MATCHED</div>
                <br/>
                <div className="ResetRcgSucess_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation.
                </div>
                  <br/>
                  <div className="ResetRcgSucess_button">
          <p>NEXT</p>
        </div></div>
            </div>
            <div className="ResetRcgSucess_right col-6 d-flex justify-content-end">
                <img src={images.faceSuccess} alt="faceImage" className="ResetRcgSucess_rImag"/>
                <img src={images.OrgImg} alt="orange_img" className="ResetRcgSucess_rMain"/>
            </div>
        </div> );
    }
}
 
export default ResetCaptureSuccess;
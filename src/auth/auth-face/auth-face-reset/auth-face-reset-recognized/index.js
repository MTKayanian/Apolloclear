import React, { Component } from 'react'
import './auth-face-reset-recognized.css';
import * as images from '../../../auth-constants';

class ResetRecogYourFace extends Component {
    state = {  }
    render() { 
        return ( <div className="RstRstRcgYrFc_wrapper row">
            <div className="col-6">
                <img src={images.logo} alt="Logo" className="RstRcgYrFc_logo"/>
                <div className="RstRcgYrFc_left">
                <div className="RstRcgYrFc_heading">recognition your face?<br/>
                 To REST YOUR PASSWORD</div>
                <br/>
                <div className="RstRcgYrFc_text">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                 quis nostrud exercitation.</div>
                  <br/>
                  <div className="RstRcgYrFc_button">
          <p>NEXT</p>
        </div></div>
            </div>
            <div className="RstRcgYrFc_right col-6 d-flex justify-content-end">
                <img src={images.faceRecog} alt="faceImage" className="RstRcgYrFc_rImag"/>
                <img src={images.OrgImg} alt="orange_img" className="RstRcgYrFc_rMain"/>
            </div>
        </div> );
    }
}
 
export default ResetRecogYourFace;
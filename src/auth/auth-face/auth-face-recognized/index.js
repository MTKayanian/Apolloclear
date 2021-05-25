import React, { Component } from 'react'
import './auth-face-recognized.css';
import * as images from '../../auth-constants';
class RecogYourFace extends Component {
    state = {  }
    render() { 
        return ( <div className="RcgYrFc_wrapper row">
            <div className="col-6">
                <img src={images.logo} alt="Logo" className="RcgYrFc_logo"/>
                <div className="RcgYrFc_left">
                <div className="RcgYrFc_heading">recognition your face</div>
                <br/>
                <div className="RcgYrFc_text">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation.</div>
                  <br/>
                  <div className="RcgYrFc_button">
          <p>NEXT</p>
        </div></div>
            </div>
            <div className="RcgYrFc_right col-6 d-flex justify-content-end">
                <img src={images.faceRecog} alt="faceImage" className="RcgYrFc_rImag"/>
                <img src={images.OrgImg} alt="orange_img" className="RcgYrFc_rMain"/>
            </div>
        </div> );
    }
}
 
export default RecogYourFace;
import React, { Component } from 'react'
import './auth-face-success.css';
import * as images from '../../auth-constants';

class CaptureSuccess extends Component {
    state = {  }
    render() { 
        return ( <div className="RcgSucess_wrapper row">
            <div className="col-6">
                <img src={images.logo} alt="Logo" className="RcgSucess_logo"/>
                <div className="RcgSucess_left">
                <div className="RcgSucess_heading">PERFECT</div>
                <br/>
                <div className="RcgSucess_text">Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                   quis nostrud exercitation.</div>
                  <br/>
                  <div className="RcgSucess_button">
          <p>NEXT</p>
        </div></div>
            </div>
            <div className="RcgSucess_right col-6 d-flex justify-content-end">
                <img src={images.faceSuccess} alt="faceImage" className="RcgSucess_rImag"/>
                <img src={images.OrgImg} alt="orange_img" className="RcgSucess_rMain"/>
            </div>
        </div> );
    }
}
 
export default CaptureSuccess;
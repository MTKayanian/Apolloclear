import React, { Component } from 'react'
import './auth-face-verified.css';
import * as images from '../../auth-constants';
class EmailVerified extends Component {
    state = {  }
    render() { 
        return ( <div className="EmailVerified_wrapper row">
            <div className="col-6">
                <img src={images.logo} alt="Logo" className="EmailVerified_logo"/>
                <div className="EmailVerified_left">
                <div className="EmailVerified_heading">HI, MiKAEL</div>
                <br/>
                <div className="EmailVerified_text">
                    Your email address is verfied !<br/>
                    Go to your account and feel free to contact us if 
                    you haveany questions. It's great to have you on board!
</div>
                  <br/>
                  <div className="EmailVerified_button">
          <p>NEXT</p>
        </div></div>
            </div>
            <div className="EmailVerified_right col-6 d-flex justify-content-end">
                <img src={images.faceMail} alt="faceImage" className="EmailVerified_rImag"/>
                <img src={images.OrgImg} alt="orange_img" className="EmailVerified_rMain"/>
            </div>
        </div> );
    }
}
 
export default EmailVerified;
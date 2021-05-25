import React, { Component } from 'react'
import './auth-face-mail.css';
import * as images from '../../auth-constants';
class CheckYourMail extends Component {
    state = {  }
    render() { 
        return ( <div className="CheckYourMail_wrapper row">
            <div className="col-6">
                <img src={images.logo} alt="Logo" className="CheckYourMail_logo"/>
                <div className="CheckYourMail_left">
                <div className="CheckYourMail_heading">GREAT CHECK YOUR INBOX</div>
                <br/>
                <div className="CheckYourMail_text">
                    <div className="CheckYourMail_link"><a>Verfiy your email address</a></div>
                    Email confirmation helps us to ensure your 
                    data will always be safe. Don’t recive an 
                    email from us? <a>contact us</a>

</div>
                  <br/>
                  <div className="CheckYourMail_button">
          <p>NEXT</p>
        </div></div>
            </div>
            <div className="CheckYourMail_right col-6 d-flex justify-content-end">
                <img src={images.faceMail} alt="faceImage" className="CheckYourMail_rImag"/>
                <img src={images.OrgImg} alt="orange_img" className="CheckYourMail_rMain"/>
            </div>
        </div> );
    }
}
 
export default CheckYourMail;
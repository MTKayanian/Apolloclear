import React, { Component } from 'react';
import * as images from '../../auth-constants';
import './auth-signup-success.css';


class HelloSignin extends Component {
    state = {}
    render() {
        return (<div className="HelloSignin_wrapper">
            <div className="HelloSignin_left">
                <div className="HelloSignin_heading">Hello, Mikael</div>
                <div className="HelloSignin_text">Your password is successflly changed</div>
                <div className="SignUpNow_button">
                    <p>SIGN IN NOW</p>
                </div>
            </div>
            <div className="HelloSignin_right"><img src={images.signupSuccess} alt="main image" /></div>
        </div>);
    }
}

export default HelloSignin;
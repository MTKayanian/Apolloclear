import React, { Component } from 'react';
import { getItem } from '../../../utils/localStore';
import 'react-phone-number-input/style.css';
import axios from 'axios';
import { BASE_URL } from '../../../app.constants';
import * as images from '../../auth-constants';
import Swal from 'sweetalert2';
import $ from 'jquery';
import classnames from 'classnames';
import './auth-forget-password-mobile.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import AlertBox from '../../../utils/AlertBox.js';

class ForgetPasswordMobile extends Component {
  state = {
    value: '',
    Error: false,
    message: '',
    togglePhoneNo: false,
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    $('.loading-container').fadeIn();
    var chars = { '+': '', '-': '', '': '' };
    let number = this.state.value;
    number = number.replace(/[+-]/g, (m) => chars[m]);
    number = number.trim();
    number = number.split(' ')[1];
    console.log('number****', number);

    axios({
      url: `${BASE_URL}/user/resetPasswordRequest`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        phone_number: number,
      },
    })
      .then((response) => {
        Swal.fire({
          type: 'success',
          text: 'OTP has been sent to your number',
        });
        this.props.history.push('/auth-forget-password-otp');
        console.log(response);
        $('.loading-container').fadeOut();
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 406 || error.response.status === 404) {
          Swal.fire({
            type: 'error',
            text: error.response.data.message,
          });
        } else {
          Swal.fire({
            type: 'error',
            text: 'Server Error!!!, Please Try After Sometime.',
          });
        }
        $('.loading-container').fadeOut();
      });
  };
  resendMail = () => {
    $('.loading-container').fadeIn();
    let TOKEN = getItem('accessToken');
    axios({
      method: 'POST',
      url: `${BASE_URL}/user/login/resendOtp`,
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
    })
      .then((response) => {
        console.log(response);
        $('.loading-container').fadeOut();
        Swal.fire({
          type: 'success',
          text: 'Email Resend Successfully',
        });
      })
      .catch((error) => console.log(error));
  };
  render() {
    console.log(this.state);

    return (
      <div>
        <div className="row login-main m-0 p-0 body-class">
          <div className="col-sm-6 mx-auto pt-5 mx-lg-0 mt-2 forget-password-m">
            <div className="l-form mb-4">
              <div className="p-logo mb-4">
                <img src={images.plutoclear} alt="pluto clear" />
              </div>
              <p className="sign-text">Reset your Password</p>
              <p style={{color:'#95A0A9'}}>Select your registered phone number</p>
              <form onSubmit={this.onSubmit}>
                <div className="position-relative">
                  {this.state.togglePhoneNo ? (
                    <div className="error-msg"> Mobile Number not verified</div>
                  ) : (
                    ''
                  )}
                  <PhoneInput
                    placeholder="Mobile Number"
                    value={this.state.value}
                    onChange={(value) => this.setState({ value })}
                    inputClass={classnames('', {
                      ' SignUpNow_phoneNo': true,
                      ' SignUpNow_phoneNo_error': false,
                    })}
                    buttonClass={classnames('', {
                      ' SignUpNow_phoneNo_dropDown': true,
                      ' SignUpNow_phoneNo_dropDown_error': false,
                    })}
                  />
                </div>

                <div className="mb-4 mt-4">
                  <button className="b-reset-new" type="submit">
                    NEXT
                  </button>
                </div>
                <p className="last-p" style={{ marginBottom: '30%' }}>
                  Copyright © 2020 PlutoClear Ltd All Rights Reserved. Use of this
                  website is governed by the User Agreement. The contents
                  contained on this website is provided to users "AS IS" without
                  any express or implied warranty. For information on your
                  privacy, please read our Privacy Policy. | Powered by PlutoClear
                </p>
              </form>
            </div>
            {this.state.togglePhoneNo && (
              <AlertBox
                imageIcon="./images/alert.png"
                message="Please sign in with a different method and verify phone number"
              />
            )}
          </div>
          <div className="col-sm-6 mr-0 ml-12  d-none p-0 d-lg-flex justify-content-end">
            <img className="img-fluid" src={images.Image} alt="adv-man" />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgetPasswordMobile;

import React, { Component } from 'react';
import Swal from 'sweetalert2';
import $ from 'jquery';
import {
  userLoginAction,
  userRoleAction,
  userDetailAction,
} from '../../auth-actions/auth.actions';
import { connect } from 'react-redux';
import * as images from '../../auth-constants';
import { withRouter } from 'react-router';
import axios from 'axios';
import { BASE_URL } from '../../../app.constants';
import { getItem } from '../../../utils/localStore';
import AlertBox from '../../../utils/AlertBox.js';
import classnames from 'classnames';
import './auth-forget-password-otp.css';

class ForgetVerifyOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      otp5: '',
      otp6: '',
      toggleOtp: false,
      toggleSkipOtp: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleVerify = this.handleVerify.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.setState({toggleSkipOtp:false})
      }
    );
  }
  handleKeyUp(e) {
    if (e.keyCode === 8) {
      $(e.target).prev().focus();
      $(e.target).prev().select();
    }
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.otp6 !== '') {
          // this.handleVerify();
        }
      }
    );
  }

  //check all field
  checkAllField = async () => {
    new Promise((resolve, reject) => {
      if (
        this.state.otp1 == '' ||
        this.state.otp2 == '' ||
        this.state.otp3 == '' ||
        this.state.otp4 == '' ||
        this.state.otp5 == '' ||
        this.state.otp6 == ''
      ) {
        this.setState({ toggleSkipOtp: true });
      } else {
        this.setState({ toggleSkipOtp: false });
      }
    });
  };

  handleVerify = async (event) => {
    event.preventDefault();

    await this.checkAllField().then(() => {
      if (this.state.toggleSkipOtp == true) {
        return;
      } else {
        $('.loading-container').fadeIn();
        const { otp1, otp2, otp3, otp4, otp5, otp6 } = this.state;
        let OTP = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
        let TOKEN = getItem('accessToken');
        axios({
          method: 'POST',
          url: `${BASE_URL}/user/login/verifyOtp`,
          headers: {
            'Content-Type': 'application/json',
            authorization: TOKEN,
          },
          data: {
            otp: OTP,
          },
        })
          .then((response) => {
            console.log(response);
            $('.loading-container').fadeOut();
            this.props.history.push('/auth-data-slider');
            this.props.userLoginAction(true);
          })
          .catch((error) => {
            console.log('error is here**** ', error);
            if (
              error.response.data.statusCode == 406 ||
              error.response.data.statusCode == 404 ||
              error.response.data.statusCode === 401
            ) {
              this.setState({ toggleOtp: true }, () => {
                $('.loading-container').fadeOut();
              });
              // Swal.fire({
              //   type: "error",
              //   text: error.response.data.message
              // });
            } else {
              Swal.fire({
                type: 'error',
                text: error.response.data.message,
              });
              $('.loading-container').fadeOut();
            }
            $('.loading-container').fadeOut();
          });
      }
    });
  };

  handleKeyPress(e) {
    if (e.which >= 48 && e.which <= 57) {
      e.target.value = '';
      $(e.target).next().focus();
    } else {
      e.preventDefault();
    }
  }
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
    console.log('state***', this.state);
    const { otp1, otp2, otp3, otp4, otp5, otp6 } = this.state;
    console.log(this.props);
    return (
      <div>
        <div className="row m-0 p-0 m-0 body-class">
          <div className="col-sm-6 mx-auto pt-5 mx-lg-0 d-flex justify-content-center align-items-center">
            <div className="l-form mb-4">
              <div className="p-logo mb-4">
                <img src={images.plutoclear} alt="pluto clear" />
              </div>
              {/* <h3>TWO STEP VERIFICATION</h3> */}
              <p className="verification-otp">Reset your Password</p>
              <p style={{color:'#95A0A9'}}> Enter your recived CODE</p>
              <form onSubmit={this.handleVerify}>
                <div className="d-lg-flex mx-auto">
                  <div className="mb-4 mb-lg-0">
                    <input
                      type="text"
                      className={classnames('', {
                        'verification-popup-input': !this.state.toggleOtp,
                        'verification-popup-input-error':
                          this.state.toggleOtp ||
                          (this.state.toggleSkipOtp && this.state.otp1 != ''),
                      })}
                      maxLength="1"
                      name="otp1"
                      value={otp1}
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress.bind(this)}
                      onKeyUp={this.handleKeyUp}
                    />
                    <input
                      type="text"
                      className={classnames('', {
                        'verification-popup-input': !this.state.toggleOtp,
                        'verification-popup-input-error':
                          this.state.toggleOtp ||
                          (this.state.toggleSkipOtp && this.state.otp2 != ''),
                      })}
                      maxLength="1"
                      name="otp2"
                      value={otp2}
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress.bind(this)}
                      onKeyUp={this.handleKeyUp}
                    />
                    <input
                      type="text"
                      className={classnames('mb-sm-2', {
                        'verification-popup-input': !this.state.toggleOtp,
                        'verification-popup-input-error':
                          this.state.toggleOtp ||
                          (this.state.toggleSkipOtp && this.state.otp3 != ''),
                      })}
                      maxLength="1"
                      name="otp3"
                      value={otp3}
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress.bind(this)}
                      onKeyUp={this.handleKeyUp}
                    />
                    <input
                      type="text"
                      className={classnames('mb-lg-0 mb-2', {
                        'verification-popup-input': !this.state.toggleOtp,
                        'verification-popup-input-error':
                          this.state.toggleOtp ||
                          (this.state.toggleSkipOtp && this.state.otp4 != ''),
                      })}
                      maxLength="1"
                      name="otp4"
                      value={otp4}
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress.bind(this)}
                      onKeyUp={this.handleKeyUp}
                    />
                    <input
                      type="text"
                      className={classnames('', {
                        'verification-popup-input': !this.state.toggleOtp,
                        'verification-popup-input-error':
                          this.state.toggleOtp ||
                          (this.state.toggleSkipOtp && this.state.otp5 != ''),
                      })}
                      maxLength="1"
                      name="otp5"
                      value={otp5}
                      onChange={this.handleChange}
                      onKeyPress={this.handleKeyPress.bind(this)}
                      onKeyUp={this.handleKeyUp}
                    />
                    <input
                      type="text"
                      className={classnames('', {
                        'verification-popup-input': !this.state.toggleOtp,
                        'verification-popup-input-error':
                          this.state.toggleOtp ||
                          (this.state.toggleSkipOtp && this.state.otp6 != ''),
                      })}
                      maxLength="1"
                      name="otp6"
                      value={otp6}
                      onChange={this.handleChange.bind(this)}
                      onKeyUp={this.handleKeyUp}
                      onKeyPress={this.handleKeyPress}
                    />
                  </div>
                </div>
                <div className="my-4">
                  <div className="d-flex justify-content-between">
                    {/* <div className="col-3 d-flex align-items-center">
                      <img src={images.warning} alt="warning" />
                    </div> */}
                    <p className="col-9 s-text-my">
                      Didn't get the OTP?{' '}
                      <a
                        className="s-text"
                        style={{ color: '#2F80ED' }}
                        href="#"
                        onClick={this.resendMail}
                      >
                        Resend
                      </a>
                    </p>
                  </div>
                </div>
                <div style={{ margin: '15% 0% 15% 0%' }}>
                  <button type="submit" className="b-login">
                    NEXT
                  </button>
                </div>
                <p className="last-p mt-4">
                  Copyright © 2020 PlutoClear Ltd All Rights Reserved. Use of this
                  website is governed by the User Agreement. The contents
                  contained on this website is provided to users "AS IS" without
                  any express or implied warranty. For information on your
                  privacy, please read our Privacy Policy. | Powered by PlutoClear
                </p>
              </form>
              {!this.state.toggleOtp && !this.state.toggleSkipOtp && (
                <AlertBox
                  imageIcon="./images/alert.png"
                  message="We have sent a code to your registered phone number"
                />
              )}

              {this.state.toggleSkipOtp && (
                <AlertBox
                  imageIcon="./images/triangle.png"
                  message="You skipped a step, please enter all fields"
                />
              )}

              {this.state.toggleOtp && (
                <AlertBox
                  imageIcon="./images/triangle.png"
                  message="Please enter correct code"
                />
              )}
            </div>
          </div>
          <div className="col-sm-6 mr-0 ml-12  d-none p-0 d-lg-flex justify-content-end">
            <img className="img-fluid" src={images.Image} alt="adv-man" />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLoginAction: (payload) => dispatch(userLoginAction(payload)),
  userRoleAction: (payload) => dispatch(userRoleAction(payload)),
});

export default connect(null, mapDispatchToProps)(withRouter(ForgetVerifyOTP));

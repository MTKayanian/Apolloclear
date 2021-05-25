import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../app.constants';
import Swal from 'sweetalert2';
import * as images from '../../auth-constants';
import { getItem } from '../../../utils/localStore';
import $ from 'jquery';
import './auth-forget-password-email.css';
import axios from 'axios';
import classnames from 'classnames';
import AlertBox from '../../../utils/AlertBox.js';
import { withRouter } from "react-router-dom";

class ForgetPasswordEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      toggleError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  handleChange = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.id]: !this.state[event.target.id],
    });
    this.setState({ email: event.target.value }, () => {
      this.setState({ toggleError: false });
    });
  };
  onNext = (event) => {
    event.preventDefault();
    if (this.state.email === '') {
      Swal.fire({
        type: 'warning',
        text: 'Please Enter Email to Proceed Futher',
      });
      return;
    }
    $('.loading-container').fadeIn();
    axios({
      url: `${BASE_URL}/user/forgotPassword`,
      method: 'POST',
      data: {
        email: this.state.email,
      },
    })
      .then((response) => {
        $('.loading-container').fadeOut();
        this.props.history.push('/auth-resent-link')
        // Swal.fire({
        //   type: 'success',
        //   text: response.data.message,
        // });
        console.log(response);
      })
      .catch((error) => {
        if (
          error.response.status === 404 &&
          error.response.data.message === 'Email not found'
        ) {
          this.setState({ toggleError: true });
        } else {
          Swal.fire({
            type: 'error',
            text: error.response.data.message,
          });
        }

        $('.loading-container').fadeOut();

        console.log(error);
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
    return (
      <div className="body-class">
        <div className="row m-0">
          <div className="col-sm-6 mx-auto pt-5 mx-lg-0 mt-5">
            <div className="l-form mb-4">
              <div className="p-logo mb-4">
                <img src={images.plutoclear} alt="pluto clear" />
              </div>
              <p className="sign-text"> Reset your Password</p>
              <p className="sub-text m-0">Enter your mail ID</p>
              <div className="">
                <form onSubmit={this.onNext}>
                  <div className="t-input my-4 p-2">
                    <div className="position-relative">
                      {this.state.toggleError ? (
                        <div className="error-msg"> Email id not found</div>
                      ) : (
                        ''
                      )}
                      <input
                        className={classnames('d-block mb-4 mb-md-0 w-100', {
                          'p-input-container-forget': !this.state.toggleError,
                          'p-input-container-forget-error': this.state
                            .toggleError,
                        })}
                        type="email"
                        placeholder="email id"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="mb-2 mt-4">
                    <button className="b-forgot-new" type="submit">
                      NEXT
                    </button>
                  </div>
                </form>
              </div>
              <p className="s-text mt-0">
                Try different method.{' '}
                <Link to="/forget-password-mobile" style={{ color: '#2F80ED' }}>
                  <small className="s-texthyper">Click Here</small>
                </Link>
              </p>
              <p className="last-p">
                Copyright © 2020 PlutoClear Ltd All Rights Reserved. Use of this
                website is governed by the User Agreement. The contents
                contained on this website is provided to users "AS IS" without
                any express or implied warranty. For information on your
                privacy, please read our Privacy Policy. | Powered by PlutoClear
              </p>
            </div>
            <div className="box-error-forget">
              {this.state.toggleError && (
                <AlertBox
                  imageIcon="./images/alert.png"
                  message="Please Sign in with a different method or check your email id"
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

export default withRouter(ForgetPasswordEmail);


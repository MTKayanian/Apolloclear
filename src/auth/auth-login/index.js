import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  userLoginAction,
  userRoleAction,
  userDetailAction,
} from '../auth-actions/auth.actions';
import { connect } from 'react-redux';
import axios from 'axios';
import $ from 'jquery';
import Swal from 'sweetalert2';

import { setItem } from '../../utils/localStore';
import * as images from '../auth-constants';

import { BASE_URL } from '../../app.constants';
import AlertBox from '../../utils/AlertBox.js';
import './auth-login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Password1: false,
      email: '',
      password: '',
      toggleVerification: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleShow = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.id]: !this.state[event.target.id],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const ajaxRequestHeaders = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    if (this.state.email === '') {
      Swal.fire({
        type: 'warning',
        text: 'Please Enter Your Email',
      });
      return;
    }
    if (this.state.password === '') {
      Swal.fire({
        type: 'warning',
        text: 'Please Enter Your Password',
      });
      return;
    }
    $('.loading-container').fadeIn();
    axios({
      url: `${BASE_URL}/user/login`,
      method: 'POST',
      headers: ajaxRequestHeaders,
      data: {
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then((response) => {
        setItem('accessToken', response.data.data.accessToken);
        $('.loading-container').fadeOut();
        this.props.userRoleAction(response.data.data.type);
        localStorage.setItem('role', response.data.data.type);
        console.log('Role is ', response.data.data.type);
        console.log(response);

        this.props.history.push('/verify-otp');
      })
      .catch((error) => {
        console.log(error)
        // console.log(error.response.data.message);
        // console.log(error.response.status);
        if (
          error.response.status === 404 &&
          error.response.data.message === 'Please verify your email to login'
        ) {
          this.setState({ toggleVerification: true }, () => {
            $('.loading-container').fadeOut();
          });
          // Swal.fire({
          //   type: 'error',
          //   text: error.response.data.message,
          // });
        } else {
          Swal.fire({
            type: 'error',
            text: error.response.data.message,
          });
        }
        $('.loading-container').fadeOut();
      });
  };
  renderRedirect() {
    if (this.props.userReducer.details.isUserLoggedIn) {
      console.log('hello from future');
      return <Redirect to="/dashboard" />;
    }
  }

  render() {
    return (
      <div>
        <div className="row login-main m-0 p-0 body-class">
          {this.renderRedirect()}
          <div className="col-sm-6 mx-auto pt-5 mx-lg-0">
            <div className="p-signin-frm">
              <form onSubmit={this.handleSubmit} className="l-form mb-4">
                <div className="p-logo mb-4">
                  <img src={images.plutoclear} alt="pluto clear" />
                </div>
                <p className="sign-text">Sign in to your account</p>
                <div className="t-input p-input-container my-4 p-2">
                  <input
                    className="t-input"
                    onChange={this.handleChange}
                    name="email"
                    type="email"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="t-input p-input-container my-4 p-2">
                  <input
                    className="p-input"
                    onChange={this.handleChange}
                    name="password"
                    type={this.state.Password1 ? 'text' : 'password'}
                    placeholder="Enter Your Password"
                  />
                  <span onClick={this.handleShow} className="e-icon">
                    <img id="Password1" src={images.eye} alt="show" />
                  </span>
                </div>
                <div className="d-flex justify-content-between remamber_row">
                  <div className="remember_left">
                    <div className="SignIn_checkbox">
                      <label className="SignIn_main">
                        <input type="checkbox" />
                        <span className="SignIn_geekmark" />
                      </label>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="remember_txt">Remember me</div>
                    </div>
                  </div>
                  <div>
                    <Link
                      className="s-texthyper  mt-1 pt-0"
                      
                      to="/forget-password-email"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2 remamber_row d-flex">
                  <button className="b-login-new" type="submit">
                    Sign in
                  </button>
                  {/* <Link
                    style={{ color: '#545961', textDecoration: 'none' }}
                    to="/sign-up"
                  >
                    <button className="b-signup ml-3" type="button">
                      SIGN UP
                    </button>
                  </Link> */}
                </div>
                <div className="ext-login d-inline-block">
                  <p
                    className="s-text d-inline-block"
                    style={{ color: '#646464' }}
                  >
                    Or log in with
                  </p>
                  <span className="p-icon">
                    <span>
                      <img src={images.fb} alt="fb" className="mr-2" />
                    </span>
                    <span>
                      <img src={images.tw} alt="twt" className="mr-2" />
                    </span>
                    <span>
                      <img src={images.gg} alt="google" />
                    </span>
                  </span>
                </div>
                <p className="s-text">
                  Don’t have an account?{' '}
                  <Link style={{ color: '#2F80ED' }} to="/sign-up">
                    {' '}
                    <small className="s-texthyper">Create one here</small>
                  </Link>
                </p>
                <p className="last-p">
                  Copyright © 2020 PlutoClear Ltd All Rights Reserved. Use of this
                  website is governed by the User Agreement. The contents
                  contained on this website is provided to users "AS IS" without
                  any express or implied warranty. For information on your
                  privacy, please read our Privacy Policy. | Powered by PlutoClear
                </p>
              </form>

              {this.state.toggleVerification && (
                <AlertBox
                  imageIcon="./images/alert.png"
                  message="Please verify your email before signing in for security purpose"
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

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  userLoginAction: (payload) => dispatch(userLoginAction(payload)),
  userRoleAction: (payload) => dispatch(userRoleAction(payload)),
  userDetailAction: (payload) => dispatch(userDetailAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

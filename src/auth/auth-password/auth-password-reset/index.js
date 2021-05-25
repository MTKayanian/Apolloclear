import React, { Component } from 'react';
import classnames from 'classnames';
import * as images from '../../auth-constants';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../app.constants';
import $ from 'jquery';
import axios from 'axios';
import './auth-password-reset.css';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: '',
      password2: '',
      Password1: false,
      Password2: false,
      togglePassword1: false,
      togglePassword2: false,
    };
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.id]: !this.state[event.target.id],
    });
  };

  //for data handle in state
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  password1Handler = () => {
    var pattern = /[a-zA-Z0-9]{8,}/;
    if (pattern.test(this.state.password1)) {
      this.setState({ togglePassword1: false });
    } else {
      this.setState({ togglePassword1: true });
    }
  };

  FocusPassword1Field = () => {
    this.password1Handler();
  };

  //for password2 handle in state
  handleChangePassword2 = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        this.MatchPassword(this.state.password1);
      }
    );
  };

  //match password
  MatchPassword = (password1) => {
    if (this.state.password2 != password1) {
      this.setState({ togglePassword2: true });
    } else {
      this.setState({ togglePassword2: false });
    }
  };

  //check all field
  checkAllField = async () => {
    new Promise((resolve, reject) => {
      if (this.state.password2 == '' || this.state.password2 == '') {
        Swal.fire({
          type: 'warning',
          text: 'Please field all fields',
        });
        return;
      }
    });
  };

  //submit handler
  submitHandler = async (event) => {
    event.preventDefault();
    await this.checkAllField().then(() => {
      if (
        this.state.togglePassword1 == true ||
        this.state.togglePassword1 == true ||
        this.state.password2 == '' ||
        this.state.password2 == ''
      ) {
        return;
      } else {
        let URLSplitter = window.location.href.split('/');
        console.log('URLSplitter*****', URLSplitter);
        $('.loading-container').fadeIn();
        axios({
          method: 'POST',
          url: `${BASE_URL}/user/newPassword`,
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
          },
          data: {
            resetToken: URLSplitter[[4]],
            newPassword: this.state.password1,
            email: URLSplitter[[5]],
          },
        })
          .then((response) => {
            $('.loading-container').fadeOut();
            console.log(response);
            this.props.history.replace('/auth-password-reset-success');
          })
          .catch((error) => {
            $('.loading-container').fadeOut();
            console.log(error);
            if (
              error.response.status === 406 ||
              error.response.status === 404
            ) {
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
          });
      }
    });
  };

  render() {
    console.log('state****', this.state);
    return (
      <div>
        <div className="row m-0">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="l-form mb-4">
              <div className="p-logo mb-4">
                <img src={images.plutoclear} alt="Pluto Clear" />
              </div>
              <p className="sign-text">Reset your Password</p>
              <div
                className={classnames('t-input my-4 p-2', {
                  'p-input-container-reset-password': !this.state
                    .togglePassword1,
                  'p-input-container-reset-password-error': this.state
                    .togglePassword1,
                })}
              >
                <div className="position-relative">
                  {this.state.togglePassword1 ? (
                    <div className="error-msg" style={{ top: '-75px' }}>
                      {' '}
                      Password too short, should have at least 8 charcters
                    </div>
                  ) : (
                    ''
                  )}
                  <input
                    className="p-input"
                    type={this.state.Password1 ? 'text' : 'password'}
                    placeholder="Enter your password"
                    onChange={this.handleChange}
                    name="password1"
                  />
                  <span onClick={this.handleShow} className="e-icon">
                    <img id="Password1" src={images.eye} alt="show" />
                  </span>
                </div>
              </div>
              <div
                className={classnames('t-input my-4 p-2', {
                  'p-input-container-reset-password': !this.state
                    .togglePassword2,
                  'p-input-container-reset-password-error': this.state
                    .togglePassword2,
                })}
              >
                <div className="position-relative">
                  {this.state.togglePassword2 ? (
                    <div className="error-msg" style={{ top: '-52px' }}>
                      {' '}
                      Password doesn’t match
                    </div>
                  ) : (
                    ''
                  )}
                  <input
                    className="p-input"
                    type={this.state.Password2 ? 'text' : 'password'}
                    placeholder="Re-enter Password"
                    onChange={this.handleChangePassword2}
                    onFocus={(e) => this.FocusPassword1Field()}
                    name="password2"
                  />
                  <span onClick={this.handleShow} className="e-icon">
                    <img id="Password2" src={images.eye} alt="show" />
                  </span>
                </div>
              </div>

              <p className="s-text v-message">
                Use a password that has at least 8 characters, use at least one
                number one upper case letter, one lower case letter and one
                special symbol.
              </p>
              <div className="mb-4 mt-4">
                <button className="b-reset-new" onClick={this.submitHandler}>
                  NEXT
                </button>
              </div>
              <p className="last-p">
                Copyright © 2020 PlutoClear Ltd All Rights Reserved. Use of this
                website is governed by the User Agreement. The contents
                contained on this website is provided to users "AS IS" without
                any express or implied warranty. For information on your
                privacy, please read our Privacy Policy. | Powered by PlutoClear
              </p>
            </div>
          </div>
          <div className="col-6 p-0 d-flex justify-content-end">
            <img className="m-image" src={images.Image} alt="adv-man" />
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;

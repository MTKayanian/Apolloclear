import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import * as images from '../../auth-constants';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../../app.constants';
import $ from 'jquery';
import axios from 'axios';
import './auth-password-reset-success.css';

class ResetPasswordSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('state****', this.state);
    return (
      <div
        className="row reset-pass-block"
        id="screen-height"
        style={{ height: '657px' }}
      >
        <div className="col-md-6 p-0">
          <div className="reset-success-lft position-relative">
            <h2>Hello, Mikael</h2>
            <p>Your password is successfully changed</p>
            <div className="reset-success-buttns">
              <Link to="/login" className="auth-password-reset-new">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0 h-100 ">
          <div className="reset-right-block">
            <div className="reset-success-right">
              <img
                src="./images/checked.png"
                alt="checked"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPasswordSuccess;

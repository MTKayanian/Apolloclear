import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../app.constants';
import Swal from 'sweetalert2';
import * as images from '../../auth-constants';
import { getItem } from '../../../utils/localStore';
import $ from 'jquery';
import './auth-resent-link.css';
import axios from 'axios';
import classnames from 'classnames';
import AlertBox from '../../../utils/AlertBox.js';

class ForgetPasswordEmail extends Component {
  constructor(props) {
    super(props);
  }

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
              <p className="sub-text m-0">Reset link sent </p>
              <div className="">
                <p className="p-resent-link">
                  We have sent a password reset link to your registered mail id.
                  Didn’t get the mail?
                  <Link style={{ color: '#2F80ED' }}> Click Here</Link>
                </p>
                <div className="mb-2 mt-4 mt-2 remamber_row d-flex">
                  <Link to="/">
                    <button className="b-login-new" type="submit">
                      NEXT
                    </button>
                  </Link>
                </div>
              </div>
              <p className="s-text mt-0">
                Try different method.{' '}
                <Link to="/forget-password-mobile" style={{ color: '#2F80ED' }}>
                  Click Here
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
            <div className="box-error-forget"></div>
          </div>
          <div className="col-sm-6 mr-0 ml-12  d-none p-0 d-lg-flex justify-content-end">
            <img className="img-fluid" src={images.Image} alt="adv-man" />
          </div>
        </div>
      </div>
    );
  }
}

export default ForgetPasswordEmail;

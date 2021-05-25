import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { BASE_URL } from '../../../app.constants';
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2';
import './css/style.css';

import verfiymail from './images/verified-mail.png';

class AuthVerifiedMail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let URLSplitter = window.location.href.split('/');
    console.log('URLSplitter', URLSplitter);
    $('.loading-container').fadeIn();
    axios({
      url: `${BASE_URL}/user/verifyEmail/${URLSplitter[[4]]}/${
        URLSplitter[[5]]
      }`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {},
    })
      .then((response) => {
        $('.loading-container').fadeOut();
        console.log(response);
        Swal.fire({
          type: 'success',
          text: 'Email Verify Successfully',
        });
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response.status === 406 &&
          error.response.data.message ===
            'Email is already verified or Please confirm your Email first '
        ) {
          Swal.fire({
            type: 'success',
            text: 'Email is already verified',
          });
          $('.loading-container').fadeOut();
          // Swal.fire({
          //   type: 'error',
          //   text: error.response.data.message,
          // });
        } else {
          Swal.fire({
            type: 'error',
            text: 'Server Error!!!, Please Try After Sometime.',
          });
        }
        $('.loading-container').fadeOut();
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 p-0">
          <div className="verified-mail-lft position-relative">
            <div className="cmp-logo">
              <img src="./images/Logo.png" alt="logo" />
            </div>
            <h2>verified-mail</h2>
            <p className="verified-txt">Your email address is verfied!</p>
            <p className="mb-0">
              Go to your account and feel free to contact us if you have any
              questions.
              <br />
              It's great to have you on board!
            </p>
            <div className="verified-mail-buttns">
              <Link to="/login" className="b-verified-new">
                Next
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="verified-mail-right">
            <img src={verfiymail} alt="verified-mail" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthVerifiedMail;

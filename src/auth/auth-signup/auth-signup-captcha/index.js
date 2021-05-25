import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TEST_SITE_KEY } from '../../../app.constants';
import Swal from 'sweetalert2';
import axios from 'axios';
import { connect } from 'react-redux';
import $ from 'jquery';
import { BASE_URL } from '../../../app.constants';

import './auth-signup-captcha.css';
import * as images from '../../auth-constants';

const DELAY = 1500;

let rerenders = 0;

class SignUpCaptch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRerender: rerenders,
      callback: 'not fired',
      value: '',
      load: false,
      expired: 'false',
      success: true,
      condition: false,
      agreement: false,
      disclosures: false,
      essentials: false
    };
    this._reCaptchaRef = React.createRef();
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log('didMount - reCaptcha Ref-', this._reCaptchaRef);
  }
  //this
  asyncScriptOnLoad = () => {
    this.setState({ callback: 'called!' });
    console.log('scriptLoad - reCaptcha Ref-', this._reCaptchaRef);
  };

  handleExpired = () => {
    this.setState({ expired: 'true' });
  };

  handleExpired2 = () => {
    this.setState({ expired2: 'true' });
  };
  //this
  handleChange5 = value => {
    console.log('Captcha value:', value);
    this.setState({ value });
  };
  handleChange1 = () => {
    this.setState({
      condition: !this.state.condition
    });
  };
  handleChange2 = () => {
    this.setState({
      agreement: !this.state.agreement
    });
  };

  handleChange3 = () => {
    this.setState({
      disclosures: !this.state.disclosures
    });
  };

  handleChange4 = () => {
    this.setState({
      essentials: !this.state.essentials
    });
  };

  onClick = event => {
    event.preventDefault();
    if (this.state.value.length === 0) {
      Swal.fire({
        type: 'error',
        text: 'Please fill the Captcha'
      });
      return;
    }
    if (!this.state.disclosures) {
      Swal.fire({
        type: 'error',
        text: 'Please Agree with PlutoClears Agreements & Disclosures'
      });
      return;
    }
    if (!this.state.condition) {
      Swal.fire({
        type: 'error',
        text: 'Please Agree with Terms and Conditions'
      });
      return;
    }
    if (!this.state.agreement) {
      Swal.fire({
        type: 'error',
        text: 'Please Agree with PlutoClear Agreement'
      });
      return;
    }
    if (!this.state.essentials) {
      Swal.fire({
        type: 'error',
        text: 'Please Agree with PlutoClear Online Essentials'
      });
      return;
    }
    let data = this.props.userReducer.signupData;
    if (data === null) {
      Swal.fire({
        type: 'error',
        text: 'Connection Lost!! Please Fill the SignUp Form Again'
      });
      return;
    }
    axios({
      method: 'POST',
      url: `${BASE_URL}/userRegister`,
      data: data
    })
      .then(response => {
        $('.loading-container').fadeOut();
        console.log(response);
        Swal.fire({
          type: 'success',
          text: 'congratulations! Signup Successfully'
        });
        this.props.history.replace('/auth-signup-warning');
      })
      .catch(error => {
        $('.loading-container').fadeOut();
        if (error.response.status === 406 || error.response.status === 404) {
          if (error.response.status === 406) {
            Swal.fire({
              type: 'warning',
              text: 'Email is Already Registered'
            });
          }
        }
      });
  };

  render() {
    console.log('here is the start', this.props.userReducer.signupData);
    return (
      <div className="SignUpCaptch_wrapper row">
        <div className="SignUpCaptch_content col-sm-6 mx-auto pl-lg-5 ml-lg-0 mr-5 mr-lg-0 d-flex justify-content-center align-items-center mb-4">
          <div className="SignUpCaptch_left">
            <img src={images.logo} alt="Logo picture" />
            <div className="SignUpCaptch_heading">SIGN UP NOW</div>

            <div className="SignUpCaptch_text d-block">
              By checking this box, you agree to receive our email newsletter
              and the latest news from the PlutoClear . We will never share your
              information with any third parties. An overview of how PlutoClear
              collects personal data, the kind of data it collects, its purpose
              for doing so, and the people to whom it discloses data, in
              addition to other policies not limited to direct marketing, access
              and correction, as well as user consent.For more information,
              please refer to our latest privacy policy
            </div>
            <div className="SignUpCaptch_text d-block">
              When signing up for an account please be aware that you are
              agressing to all of our terms (Privacy Policy, Customer Agreement,
              Arbitration Agreement, Electronic Communications Disclosure,
              Regulated Digital Asset Account Disclosure and Terms and
              Conditions, ) and account opening documents provided at the end of
              KYC/AML process.Business Continuity, Customer Identification
              Program, Legal, Disclaimer.
            </div>
            <div className="SignUpCaptch_bottom">
              <div className="SignUpCaptch_checkbox">
                <label className="SignUpCaptch_main">
                  <input
                    type="checkbox"
                    onClick={this.handleChange3}
                    name="disclosures"
                  />
                  <span className="SignUpCaptch_geekmark" />
                </label>
              </div>
              <p>
                I acknowledge that I have read and agree to all
                <a href="/"> PlutoClear Agreements & Disclosures.</a>
              </p>
            </div>
            <div className="SignUpCaptch_bottom">
              <div className="SignUpCaptch_checkbox">
                <label className="SignUpCaptch_main">
                  <input
                    type="checkbox"
                    onClick={this.handleChange1}
                    name="condition"
                  />
                  <span className="SignUpCaptch_geekmark" />
                </label>
              </div>
              <p>
                I accept PlutoClear business <a href="/">Terms and Conditions</a>{' '}
                and have reviewed the
                <a href="/"> Risk Warnings.</a>
              </p>
            </div>
            <div className="SignUpCaptch_bottom">
              <div className="SignUpCaptch_checkbox">
                <label className="SignUpCaptch_main">
                  <input
                    type="checkbox"
                    name="agreement"
                    onClick={this.handleChange2}
                  />
                  <span className="SignUpCaptch_geekmark" />
                </label>
              </div>
              <p>
                I agree to the{' '}
                <a href="/">
                  PlutoClear User Agreement, Privacy Policy, Cookie Policy
                </a>
                and <a href="/">E-Sign Consent.</a>
              </p>
            </div>
            <div className="SignUpCaptch_bottom">
              <div className="SignUpCaptch_checkbox">
                <label className="SignUpCaptch_main">
                  <input
                    type="checkbox"
                    name="essentials"
                    onClick={this.handleChange4}
                  />
                  <span className="SignUpCaptch_geekmark" />
                </label>
              </div>
              <p>
                I do not want to receive <a href="/">email </a>
                and <a href="/">SMS </a>
                with useful offers from{' '}
                <a href="/">PlutoClear Online Essentials.</a>I can change this
                preference at any time.
              </p>
            </div>
            <div className="g-recaptcha">
              <ReCAPTCHA
                style={{ display: 'inline-block' }}
                theme="light"
                ref={this._reCaptchaRef}
                sitekey={TEST_SITE_KEY}
                onChange={this.handleChange5}
                asyncScriptOnLoad={this.asyncScriptOnLoad}
              />
            </div>
            <button className="b-captcha-new" onClick={this.onClick}>
              NEXT
            </button>
          </div>
        </div>
        <div className="col-sm-6 mr-0 ml-12  d-none p-0 d-lg-flex justify-content-end">
          <img
            className="img-fluid SignUpCaptch_img"
            src={images.signupCaptch}
            alt="main image"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(SignUpCaptch);

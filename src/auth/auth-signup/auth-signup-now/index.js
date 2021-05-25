import React, { Component } from 'react';
import * as images from '../../auth-constants';
import { COUNTRY_LIST } from '../../auth-constants';
import Swal from 'sweetalert2';
import classnames from 'classnames';
import {
  userLoginAction,
  SignupData,
  userRoleAction,
  userDetailAction
} from '../../auth-actions/auth.actions';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';
import SignUpNowBus from '../auth-signup-business';
import { BASE_URL } from '../../../app.constants';
import $ from 'jquery';
import './auth-signup-now.css';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

class SignUpNow extends Component {
  state = {
    termcond: false,
    recEmail: false,
    personal: true,
    business: false,
    date: 'text',
    passwordHide1: true,
    passwordHide2: true,
    firstName: '',
    lastName: '',
    country: '',
    date: '',
    email: '',
    phoneNo: '',
    password: '',
    passwordR: '',
    toggleFirstName: false,
    toggleLastName: false,
    toggleCountry: false,
    toggleDate: false,
    toggleEmail: false,
    togglePhoneNo: false,
    togglePassword: false,
    togglePasswordR: false,
    toggleMsg: false,
    toggleValidEmail: false,
    toggleMatchPassword: false,
    togglePhoneNoDigits: false,
    togglePasswordLength: false
  };

  //for password hide and show
  passwordShow = v => {
    if (v === 1) {
      this.setState({ passwordHide1: !this.state.passwordHide1 });
    }
    if (v === 2) {
      this.setState({ passwordHide2: !this.state.passwordHide2 });
    }
  };
  //for data handle in state
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  //check all field
  checkAllField = async () => {
    new Promise((resolve, reject) => {
      this.setState({ toggleMsg: false });
      this.state.firstName == ''
        ? this.setState({ toggleFirstName: true })
        : this.setState({ toggleFirstName: false });
      this.state.lastName == ''
        ? this.setState({ toggleLastName: true })
        : this.setState({ toggleLastName: false });
      this.state.country == '' || this.state.country == 'country'
        ? this.setState({ toggleCountry: true })
        : this.setState({ toggleCountry: false });
      this.state.date == ''
        ? this.setState({ toggleDate: true })
        : this.setState({ toggleDate: false });
      this.state.email == ''
        ? this.setState({ toggleEmail: true })
        : this.setState({ toggleEmail: false });
      this.validEmail(this.state.email);
      this.state.phoneNo == ''
        ? this.setState({ togglePhoneNo: true })
        : this.setState({ togglePhoneNo: false });
      this.state.password == ''
        ? this.setState({ togglePassword: true })
        : this.setState({ togglePassword: false });
      this.state.passwordR == ''
        ? this.setState({ togglePasswordR: true })
        : this.setState({ togglePasswordR: false });
      this.state.email != '' && this.validEmail(this.state.email);
      this.state.phoneNo != '' && this.phoneNoDigitsHandler();
      this.state.password != '' && this.checkPassword();
      this.state.passwordR != '' && this.MatchPassword(this.state.passwordR);
    });
  };

  //for submitted data in API
  submitForm = async event => {
    event.preventDefault();

    var chars = {'+':'','-':'','':''};
    var phoneNumber = this.state.phoneNo;
		phoneNumber = phoneNumber.replace(/[+-]/g, m => chars[m]);
		phoneNumber = phoneNumber.trim();
    phoneNumber = phoneNumber.split(' ')[1];
    
    console.log('phoneNumber***',phoneNumber);

    await this.checkAllField().then(() => {
      if (
        this.state.toggleFirstName == true ||
        this.state.toggleLastName == true ||
        this.state.toggleCountry == true ||
        this.state.toggleDate == true ||
        this.state.toggleEmail == true ||
        this.state.togglePhoneNo == true ||
        this.state.togglePassword == true ||
        this.state.togglePasswordR == true ||
        this.state.toggleValidEmail == true ||
        this.state.toggleMatchPassword == true ||
        this.state.togglePhoneNoDigits == true ||
        this.state.togglePasswordLength == true
      ) {
        return;
      } else {
        $('.loading-container').fadeIn();
        axios({
          method: 'PUT',
          url: `${BASE_URL}/userValidate`,
          data: {
            type: 'P',
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            country: this.state.country,
            date_of_birth: this.state.date,
            email: this.state.email,
            phone_number: phoneNumber,
            password: this.state.password,
            confirm_password: this.state.passwordR
          }
        })
          .then(response => {
            $('.loading-container').fadeOut();
            let data = {
              type: 'P',
              first_name: this.state.firstName,
              last_name: this.state.lastName,
              country: this.state.country,
              date_of_birth: this.state.date,
              email: this.state.email,
              phone_number: phoneNumber,
              password: this.state.password,
              confirm_password: this.state.passwordR
            };
            this.props.SignupData(data);
            console.log(response);
            this.props.history.replace('/signup-captch');

            Swal.fire({
              type: 'success',
              text:
                'Please Agree with terms and Condition and fill Captcha to continue'
            });
          })
          .catch(error => {
            $('.loading-container').fadeOut();
            console.log(error);
            if (
              error.response.status === 406 ||
              error.response.status === 404
            ) {
              if (error.response.status === 406) {
                Swal.fire({
                  type: 'warning',
                  text: 'Email is Already Registered'
                });
              } else
                Swal.fire({
                  type: 'error',
                  text: error.response.data.message
                });
            } else {
              Swal.fire({
                type: 'error',
                text: 'Server Error!!!, Please Try After Sometime.'
              });
            }
          });
      }
    });
  };
  _onFocus = e => {
    e.currentTarget.type = 'date';
    this.state.firstName == ''
      ? this.setState({ toggleFirstName: true })
      : this.setState({ toggleFirstName: false });
    this.state.lastName == ''
      ? this.setState({ toggleLastName: true })
      : this.setState({ toggleLastName: false });
    this.state.country == '' || this.state.country == 'country'
      ? this.setState({ toggleCountry: true })
      : this.setState({ toggleCountry: false });
    this.setState({
      toggleDate: false,
      toggleEmail: false,
      togglePhoneNo: false,
      togglePassword: false,
      togglePasswordR: false,
      toggleMsg: true,
      toggleValidEmail: false,
      toggleMatchPassword: false,
      togglePhoneNoDigits: false,
      togglePasswordLength: false
    });
  };

  _onBlur = e => {
    e.currentTarget.type = 'text';
  };

  FocusFirstNameField = () => {
    this.setState({
      toggleFirstName: false,
      toggleLastName: false,
      toggleCountry: false,
      toggleDate: false,
      toggleEmail: false,
      togglePhoneNo: false,
      togglePassword: false,
      togglePasswordR: false,
      toggleValidEmail: false,
      toggleMatchPassword: false,
      togglePhoneNoDigits: false,
      togglePasswordLength: false,
      toggleMsg: true
    });
  };

  FocusLastNameField = () => {
    this.state.firstName == ''
      ? this.setState({ toggleFirstName: true })
      : this.setState({ toggleFirstName: false });
    this.setState({
      toggleLastName: false,
      toggleCountry: false,
      toggleDate: false,
      toggleEmail: false,
      togglePhoneNo: false,
      togglePassword: false,
      togglePasswordR: false,
      toggleValidEmail: false,
      toggleMatchPassword: false,
      togglePhoneNoDigits: false,
      togglePasswordLength: false,
      toggleMsg: true
    });
  };

  FocusCountryField = () => {
    this.state.firstName == ''
      ? this.setState({ toggleFirstName: true })
      : this.setState({ toggleFirstName: false });
    this.state.lastName == ''
      ? this.setState({ toggleLastName: true })
      : this.setState({ toggleLastName: false });
    this.setState({
      toggleCountry: false,
      toggleDate: false,
      toggleEmail: false,
      togglePhoneNo: false,
      togglePassword: false,
      togglePasswordR: false,
      toggleValidEmail: false,
      toggleMatchPassword: false,
      togglePhoneNoDigits: false,
      togglePasswordLength: false,
      toggleMsg: true
    });
  };

  FocusEmailField = () => {
    this.state.firstName == ''
      ? this.setState({ toggleFirstName: true })
      : this.setState({ toggleFirstName: false });
    this.state.lastName == ''
      ? this.setState({ toggleLastName: true })
      : this.setState({ toggleLastName: false });
    this.state.country == '' || this.state.country == 'country'
      ? this.setState({ toggleCountry: true })
      : this.setState({ toggleCountry: false });
    this.state.date == ''
      ? this.setState({ toggleDate: true })
      : this.setState({ toggleDate: false });
    this.setState({
      toggleEmail: false,
      toggleValidEmail: false,
      toggleMatchPassword: false,
      togglePhoneNoDigits: false,
      togglePasswordLength: false,
      togglePhoneNo: false,
      togglePassword: false,
      togglePasswordR: false,
      toggleMsg: true
    });
  };

  FocusPhoneNoField = () => {
    this.state.firstName == ''
      ? this.setState({ toggleFirstName: true })
      : this.setState({ toggleFirstName: false });
    this.state.lastName == ''
      ? this.setState({ toggleLastName: true })
      : this.setState({ toggleLastName: false });
    this.state.country == '' || this.state.country == 'country'
      ? this.setState({ toggleCountry: true })
      : this.setState({ toggleCountry: false });
    this.state.date == ''
      ? this.setState({ toggleDate: true })
      : this.setState({ toggleDate: false });
    this.state.email == ''
      ? this.setState({ toggleEmail: true })
      : this.setState({ toggleEmail: false });
    this.state.email != '' && this.validEmail(this.state.email);
    this.setState({
      togglePhoneNo: false,
      togglePassword: false,
      togglePasswordR: false,
      toggleMsg: true
    });
  };

  //for email handle in state
  handleChangeEmail = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.validEmail(event.target.value);
  };

  //check valid email
  validEmail = email => {
    if (email == '') {
      return;
    }
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    //console.log("vaildEmail*******",pattern.test(email));
    if (pattern.test(email)) {
      this.setState({ toggleValidEmail: false, toggleEmail: false });
    } else {
      this.setState({ toggleValidEmail: true, toggleEmail: true });
    }
  };

  //for password handle in state
  passwordHandleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.checkPassword();
      }
    );
  };

  //check password length
  checkPassword = () => {
    var pattern = /(?=^.{8,32}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

    if (pattern.test(this.state.password)) {
      this.setState({ togglePasswordLength: false, togglePassword: false });
    } else {
      this.setState({ togglePasswordLength: true, togglePassword: true });
    }
  };

  //change phone state
  phoneNoHandler = phoneNo => {
    this.setState({ phoneNo: phoneNo }, () => {
      this.phoneNoDigitsHandler();
    });
  };
  //check phone no digits
  phoneNoDigitsHandler = () => {
    if (this.state.phoneNo == '') {
      return;
    }
    if (this.state.phoneNo.length < 7) {
      this.setState({ togglePhoneNoDigits: true });
    } else {
      this.setState({ togglePhoneNoDigits: false });
    }
  };

  FocusPasswordField = () => {
    this.state.firstName == ''
      ? this.setState({ toggleFirstName: true })
      : this.setState({ toggleFirstName: false });
    this.state.lastName == ''
      ? this.setState({ toggleLastName: true })
      : this.setState({ toggleLastName: false });
    this.state.country == '' || this.state.country == 'country'
      ? this.setState({ toggleCountry: true })
      : this.setState({ toggleCountry: false });
    this.state.date == ''
      ? this.setState({ toggleDate: true })
      : this.setState({ toggleDate: false });
    this.state.email == ''
      ? this.setState({ toggleEmail: true })
      : this.setState({ toggleEmail: false });
    this.validEmail(this.state.email);
    this.state.phoneNo == ''
      ? this.setState({ togglePhoneNo: true })
      : this.setState({ togglePhoneNo: false });
    this.setState({
      togglePassword: false,
      togglePasswordR: false,
      toggleMsg: true
    });
  };

  FocusPasswordRField = () => {
    this.state.firstName == ''
      ? this.setState({ toggleFirstName: true })
      : this.setState({ toggleFirstName: false });
    this.state.lastName == ''
      ? this.setState({ toggleLastName: true })
      : this.setState({ toggleLastName: false });
    this.state.country == '' || this.state.country == 'country'
      ? this.setState({ toggleCountry: true })
      : this.setState({ toggleCountry: false });
    this.state.date == ''
      ? this.setState({ toggleDate: true })
      : this.setState({ toggleDate: false });
    this.state.email == ''
      ? this.setState({ toggleEmail: true })
      : this.setState({ toggleEmail: false });
    this.validEmail(this.state.email);
    this.state.phoneNo == ''
      ? this.setState({ togglePhoneNo: true })
      : this.setState({ togglePhoneNo: false });
    this.state.password == ''
      ? this.setState({ togglePassword: true })
      : this.setState({ togglePassword: false });
    this.state.passwordR == ''
      ? this.setState({ togglePasswordR: true })
      : this.setState({ togglePasswordR: false });
    this.state.password != '' && this.checkPassword();
    this.setState({
      toggleMsg: true
    });
  };

  //for passwordR handle in state
  handleChangePasswordR = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.MatchPassword(this.state.passwordR);
      }
    );
  };

  MatchPassword = passwordR => {
    if (passwordR == '') {
      return;
    }

    if (this.state.password != passwordR) {
      this.setState({ toggleMatchPassword: true, togglePasswordR: true });
    } else {
      this.setState({ toggleMatchPassword: false, togglePasswordR: false });
    }
  };

  componentDidMount() {
    this.setState({
      firstName: '',
      lastName: '',
      country: '',
      date: '',
      email: '',
      phoneNo: '',
      password: '',
      passwordR: '',
      toggleFirstName: false,
      toggleLastName: false,
      toggleCountry: false,
      toggleDate: false,
      toggleEmail: false,
      togglePhoneNo: false,
      togglePassword: false,
      togglePasswordR: false,
      toggleMsg: false,
      toggleValidEmail: false,
      toggleMatchPassword: false,
      togglePhoneNoDigits: false,
      togglePasswordLength: false
    });
  }
  render() {
    console.log('state*********', this.state);
    console.log(this.props);
    return (
      <div className="row m-0 p-0">
        <div className="col-sm-6 mx-auto mx-lg-0 pl-lg-5 ml-4">
          <div className="SignUp_logo">
            <img src={images.logo} alt="logo" />
          </div>
          <div className="SignUpNow_heading">
            <h3> Sign up now </h3>
            <p>Welcome to PlutoClear</p>
          </div>
          <div className="SignUpNow_radio d-block d-md-flex mt-2 mb-2">
            <div className="text-lg-left mr-3">I am a</div>
            <div className="d-flex">
              <label
                className="radio"
                onClick={() =>
                  this.setState({ personal: true, business: false })
                }
              >
                Individual
                <input
                  type="radio"
                  checked={this.state.personal ? 'checked' : ''}
                  name="is_company"
                />
                <span className="checkround"></span>
              </label>
              <label
                className="radio"
                onClick={() =>
                  this.setState({ personal: false, business: true })
                }
              >
                Business
                <input
                  type="radio"
                  checked={this.state.business ? 'checked' : ''}
                  name="is_company"
                />
                <span className="checkround"></span>
              </label>
            </div>
          </div>
          {this.state.personal ? (
            <div className="Signup_Now">
              <form onSubmit={this.submitForm}>
                <div>
                  <div className="d-md-flex mb-md-3">
                    <div className="position-relative">
                      {this.state.toggleMsg ? (
                        this.state.toggleFirstName ? (
                          <div className="error-msg">
                            Please provide first name
                          </div>
                        ) : (
                          ''
                        )
                      ) : (
                        ''
                      )}
                      <input
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        className={classnames('d-block mb-4 mb-md-0 w-100', {
                          ' SignUpNow_inputs': !this.state.toggleFirstName,
                          ' SignUpNow_inputs_error': this.state.toggleFirstName
                        })}
                        style={{ marginRight: '20px' }}
                        onChange={this.handleChange}
                        onFocus={e => this.FocusFirstNameField()}
                      />
                    </div>
                    <div className="position-relative">
                      {this.state.toggleLastName && this.state.toggleMsg ? (
                        <div className="error-msg">
                          {' '}
                          Please provide last name
                        </div>
                      ) : (
                        ''
                      )}
                      <input
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        className={classnames('d-block mb-4 mb-md-0 w-100', {
                          ' SignUpNow_inputs': !this.state.toggleLastName,
                          ' SignUpNow_inputs_error': this.state.toggleLastName
                        })}
                        style={{ marginRight: '20px' }}
                        onChange={this.handleChange}
                        onFocus={e => this.FocusLastNameField()}
                      />
                    </div>
                  </div>
                  <div className="d-md-flex mb-md-3">
                    <div className="position-relative mr-4">
                      {this.state.toggleCountry && this.state.toggleMsg ? (
                        <div className="error-msg">Please select a country</div>
                      ) : (
                        ''
                      )}
                      <select
                        name="country"
                        aria-invalid="false"
                        className={classnames('d-block mb-4 mb-md-0', {
                          ' SignUpNow_inputs': !this.state.toggleCountry,
                          ' SignUpNow_inputs_error': this.state.toggleCountry
                        })}
                        onChange={this.handleChange}
                        onFocus={e => this.FocusCountryField()}
                      >
                        <option value="Country">Country</option>
                        {COUNTRY_LIST.map((country, id) => (
                          <option key={id} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="position-relative">
                      {this.state.toggleDate && this.state.toggleMsg ? (
                        <div className="error-msg">
                          {' '}
                          Please enter a date of birth
                        </div>
                      ) : (
                        ''
                      )}
                      <input
                        type="text"
                        onFocus={e => this._onFocus(e)}
                        onBlur={e => this._onBlur(e)}
                        placeholder="Date of Birth"
                        name="date"
                        className={classnames('d-block mb-3 mb-md-0', {
                          ' SignUpNow_inputs_date': !this.state.toggleDate,
                          ' SignUpNow_inputs_date__error': this.state.toggleDate
                        })}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-md-flex mb-md-3">
                    <div className="position-relative">
                      {this.state.toggleEmail && this.state.toggleMsg ? (
                        <div className="error-msg">
                          {' '}
                          Please enter an email address
                        </div>
                      ) : (
                        ''
                      )}

                      {this.state.toggleEmail && this.state.toggleValidEmail ? (
                        <div className="error-msg">
                          {' '}
                          Please enter a valid email address
                        </div>
                      ) : (
                        ''
                      )}
                      <input
                        placeholder="Email"
                        type="text"
                        name="email"
                        onChange={this.handleChangeEmail}
                        className={classnames('d-block mb-4 mb-md-0 w-100', {
                          ' SignUpNow_inputs': !this.state.toggleEmail,
                          ' SignUpNow_inputs_error': this.state.toggleEmail
                        })}
                        style={{ marginRight: '20px' }}
                        onFocus={e => this.FocusEmailField()}
                      />
                    </div>
                    <div className="position-relative">
                      {this.state.togglePhoneNo && this.state.toggleMsg ? (
                        <div className="error-msg" style={{ top: '-65px' }}>
                          {' '}
                          Mobile number required to verify user KYC/AML
                        </div>
                      ) : (
                        ''
                      )}
                      {this.state.togglePhoneNoDigits ? (
                        <div className="error-msg" style={{ top: '-65px' }}>
                          {' '}
                          Please provide mobile number that is at least 7 digits
                          long
                        </div>
                      ) : (
                        ''
                      )}

                      <PhoneInput
                        // country={'us'}
                        placeholder="Mobile Number"
                        value={this.state.phoneNo}
                        onChange={phone => this.phoneNoHandler(phone)}
                        inputClass={classnames('', {
                          ' SignUpNow_phoneNo': !this.state.togglePhoneNo,
                          ' SignUpNow_phoneNo_error': this.state.togglePhoneNo
                        })}
                        buttonClass={classnames('', {
                          ' SignUpNow_phoneNo_dropDown': !this.state
                            .togglePhoneNo,
                          ' SignUpNow_phoneNo_dropDown_error': this.state
                            .togglePhoneNo
                        })}
                        onFocus={this.FocusPhoneNoField}
                      />
                      {/* <input
                        placeholder="Phone Number"
                        type="tel"
                        name="phoneNo"
                        onChange={this.handleChange}
                        className={classnames('d-block mb-4 mb-md-0 w-100', {
                          ' SignUpNow_inputs': !this.state.togglePhoneNo,
                          ' SignUpNow_inputs_error': this.state.togglePhoneNo
                        })}
                        style={{ marginRight: '20px' }}
                        onFocus={e => this.FocusPhoneNoField()}
                      /> */}
                    </div>
                  </div>
                  <div className="d-md-flex w-100">
                    <div className="position-relative">
                      {this.state.togglePassword && this.state.toggleMsg ? (
                        <div className="error-msg cust-top-pswrd">
                          {' '}
                          <b>Password - has an invalid value</b>
                          The password must consists 8-32 characters, containing
                          at least 1 number, 1 uppercase letter and 1 lowercase
                          letter & a symbol
                        </div>
                      ) : (
                        ''
                      )}

                      {this.state.togglePassword &&
                      this.state.togglePasswordLength ? (
                        <div className="error-msg cust-top-pswrd">
                          {' '}
                          <b>Password - has an invalid value</b>
                          The password must consists 8-32 characters, containing
                          at least 1 number, 1 uppercase letter and 1 lowercase
                          letter & a symbol
                        </div>
                      ) : (
                        ''
                      )}

                      <div
                        className={classnames('mb-4', {
                          ' SignUpNow_eye': !this.state.togglePassword,
                          ' SignUpNow_eye_error': this.state.togglePassword
                        })}
                        style={{ marginRight: '20px' }}
                      >
                        <input
                          placeholder="Password"
                          type={this.state.passwordHide1 ? 'password' : 'text'}
                          name="password"
                          onChange={this.passwordHandleChange}
                          className="d-block mb-md-0"
                          onFocus={e => this.FocusPasswordField()}
                        />
                        <img
                          src={images.eye}
                          alt="eye"
                          onClick={() => this.passwordShow(1)}
                          className="ml-2 img-fluid"
                        />
                      </div>
                    </div>
                    <div className="position-relative">
                      <div
                        className={classnames('w-100', {
                          ' SignUpNow_eye': !this.state.togglePasswordR,
                          ' SignUpNow_eye_error': this.state.togglePasswordR
                        })}
                        style={{ marginRight: '20px' }}
                      >
                        {this.state.togglePasswordR && this.state.toggleMsg ? (
                          <div className="error-msg">Confirm Password </div>
                        ) : (
                          ''
                        )}

                        {this.state.togglePasswordR &&
                        this.state.toggleMatchPassword ? (
                          <div className="error-msg">Match the password </div>
                        ) : (
                          ''
                        )}

                        <input
                          placeholder="Re-type Password"
                          type={this.state.passwordHide2 ? 'password' : 'text'}
                          name="passwordR"
                          onChange={this.handleChangePasswordR}
                          className="d-block mb-md-0"
                          onFocus={e => this.FocusPasswordRField()}
                        />
                        <img
                          src={images.eye}
                          alt="eye"
                          onClick={() => this.passwordShow(2)}
                          className="ml-2 img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="SignUpNow_bottom_text mb-2 mb-lg-0">
                  <div>
                    Use a password that has at least 8 characters, use at least
                    one number, one uppercase letter, one lowercase letter and
                    one special symbol.
                  </div>
                </div>
                {/* <div className="SignUpNow_bottom_text mb-2 mb-lg-0">
                <div className="SignUpNow_checkbox">
                  <label className="SignUpNow_main">
                    <input type="checkbox" onClick={() => { this.setState({ termcond: !this.state.termcond }) }} />
                    <span className="SignUpNow_geekmark" />
                  </label>
                </div>
                <div>I agree to the <a href="/">terms privacy policy</a> and <a  href="/">fee</a></div>
              </div> */}
                <button className="b-signup-new" type="submit">
                  SIGN UP
                </button>
              </form>
              <div className="SignUpNow_bottom_text1">
                <p>
                  Already have an account
                  <Link to="/login" style={{ color: '#2F80ED' }}>
                    {' '}
                    <small className="s-texthyper">log in</small>
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <div className="SignUpBusiness">
              <SignUpNowBus />
            </div>
          )}
        </div>
        <div className="col-sm-6 mr-0  d-none p-0 d-lg-flex justify-content-end">
          {this.state.personal ? (
            <img
              src={images.signup1}
              alt="Main Image"
              className="SignUpNow_img img-fluid"
            />
          ) : (
            <img
              src={images.signup2}
              alt="Main image Business"
              className="SignUpNow_img img-fluid"
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  userLoginAction: payload => dispatch(userLoginAction(payload)),
  SignupData: payload => dispatch(SignupData(payload)),
  userRoleAction: payload => dispatch(userRoleAction(payload)),
  userDetailAction: payload => dispatch(userDetailAction(payload))
});
// export default connect(mapStateToProps)(SignUp);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUpNow);

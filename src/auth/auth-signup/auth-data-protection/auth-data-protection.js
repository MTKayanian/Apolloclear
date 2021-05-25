import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css/style.css';

class AuthDataProtection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProtection: false
    };
  }

  handleChange = () => {
    this.setState({
      dataProtection: !this.state.dataProtection
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-6 p-0">
          <div className="d-protect-lft position-relative">
            <div className="cmp-logo">
              <img src="images/Logo.png" alt="Logo" />
            </div>
            <h2>
              General Data Protection
              <br />
              Regulation (GDPR){' '}
            </h2>
            <p>
              The <span>General Data Protection Regulation (GDPR)</span>{' '}
              implements new data protection regulations which require us to
              obtain additional consents to process and use information for
              those who are in the European Union.
            </p>
            <p>
              Are you a citizen or resident of the European Union, or will you
              use our service while you are in the European Union?
            </p>
            <div>
              <div className="protect-checkbox">
                <label>
                  <input                  
                    type="checkbox"
                    onClick={this.handleChange}
                    name="dataProtection"
                  />
                  <span className="checkmark"></span>
                </label>
                <div className="protect-txt">Yes</div>
              </div>
              <div className="protect-checkbox">
                <label>
                <input                  
                    type="checkbox"
                    onClick={this.handleChange}
                    name="dataProtection"
                  />
                  <span className="checkmark"></span>
                </label>
                <div className="protect-txt">No</div>
              </div>
            </div>
            <div className="d-protect-buttns">
              <Link to='./auth-mailbox' className="auth-data-protection">
                I agree
              </Link>{' '}
              <Link className="auth-data-protection">
                Cancel
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="d-protect-right">
            <img
              src="images/data-proection.png"
              alt="d-protect"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthDataProtection;

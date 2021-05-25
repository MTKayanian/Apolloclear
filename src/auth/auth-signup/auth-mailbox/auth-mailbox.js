import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css/style.css';
import * as images from '../../auth-constants';


class AuthMailBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 p-0">
          <div className="mailbox-lft position-relative">
            <div className="cmp-logo">
              <img src={images.logo} alt="logo" />
            </div>
            <h2>GREAT CHECK YOUR INBOX</h2>
            <p className="mb-0">
              Email confirmation helps us to ensure your <br />
              data will always be safe. Don’t receive an email from us?{' '}
              <span>contact us</span>
            </p>
            <div className="req-doc">
              <div className="req-doc-left">
                <img src="./images/doc.png" alt="doc" className="img-fluid" />
              </div>
              <div className="req-doc-right">
                Please note , it is required for you to{' '}
                <span>verify your email</span> address before you could sign in
              </div>
            </div>

            <div className="mailbox-buttns">
              <Link to="./login" className="b-mailbox-new">
                Signin
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="mailbox-right">
            <img
              src="./images/mailbox.png"
              alt="mailbox"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthMailBox;

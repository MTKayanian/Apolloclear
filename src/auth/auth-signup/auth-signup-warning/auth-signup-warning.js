import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css/style.css';

class Warning extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 p-0">
          <div className="warning-lft position-relative">
            <div className="cmp-logo">
              <img src="./images/Logo.png" alt="Logo" />
            </div>
            <h2>Warning </h2>
            <p>
              This system is the property of the PlutoClear. It is provided to you
              for official PlutoClear business and must be used in accordance with
              PlutoClear Policy. Under no circumstances must you give any other
              person your <span className="para-color">User ID</span> and{' '}
              <span className="para-color">Password</span>. Any unauthorised
              access to this system is strictly prohibited.
            </p>
            <div className="warning-buttns">
              <Link to='./auth-data-protection' className="btn auth-signup-warning-new">
                I agree
              </Link>{' '}
              <Link className="btn auth-signup-warning-new">
                Cancel
              </Link>
            </div>
            <p className="bottom-txt">
              Plutoclear's privacy notice{' '}
              <a href="#">www.plutonet.network/data-protection</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="warning-right">
            <img
              src="./images/warning.png"
              alt="warning"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Warning;

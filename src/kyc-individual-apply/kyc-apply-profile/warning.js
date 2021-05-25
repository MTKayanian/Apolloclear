import React from "react";
import Cancel from "./images/alert-close.png";

import "./individual.css";
import "./responsive.css";

export default class Warning extends React.Component {
  render() {
    return (
      <div className="kyc-started-enable-popup">
        <div className="kyc-started-enable-left pink-bg">
          <img src="images/disabled.png" alt="disabled" className="img-fluid" />
        </div>
        <div className="kyc-started-enable-right">
          <p>{this.props.message}</p>
          <div>
            <a href="#" className="kyc-started-enable-learn-more">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="kyc-started-cross-btn">
          <img src={Cancel} alt="cross" />
        </div>
      </div>
    );
  }
}

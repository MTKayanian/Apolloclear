import React, { Component } from 'react';
import './style.css';

const AlertBox = (props) => {
  return (
    <div className="e-message-popup">
      <div className="e-message-left">
        <img src={props.imageIcon} />
      </div>
      <div className="e-message-right">
        <p>{props.message}</p>
        <div>
          <a href="#" className="e-message-learn-more">
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="cross-btn">
        <img src="./images/cross-btn.png" />
      </div>
    </div>
  );
};

export default AlertBox;

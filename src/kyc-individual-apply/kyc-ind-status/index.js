import React from "react";
import KycCompleted from "./images/kyc-completed.png";
import "./kyc-completed.css";
export default class KYCStatus extends React.Component {
  render() {
    return (
      <div>
        <div class="row pb-4">
          <div class="col-md-12">
            <div class="row">
              <div class="content-head pt-0 pb-0 col-12">
                <div class="left-content">
                  <div class="row">
                    <h4 class="mb-0">
                      <a href="#">Individual KYC &nbsp;</a>{" "}
                      <span style={{ color: "orange", fontSize: 14 }}>
                        {" "}
                        >&nbsp;&nbsp;{" "}
                      </span>
                      <span style={{ color: "orange", fontSize: 14 }}>
                        Status Update
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="kyc-completed-kyc-approval" id="custom-height">
              <div class="kyc-completed-lyc-lft-sect">
                <img src={KycCompleted} alt="time" />
              </div>
              <div class="kyc-completed-lyc-approve-right">
                <p>Your personal KYC is Completed</p>
                <p>
                  <a href="/kyc-individual-profile">
                    Go to your personal profile
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

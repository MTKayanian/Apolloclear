import React from "react";
import { render } from "react-dom";
import Thick from "./images/thick-check.png";
import List from "./images/kyc-list.png";
import Disable from "./images/disabled.png";
import "./required-doc.css";
import "./sidebar.css";

export default class KYCIndividualCheckList extends React.Component {
  render() {
    return (
      <div>
        <div class="row pl-4 pr-4">
          <div class=" col-12  pl-md-0 pr-md-0">
            <div class="content-head pt-3 pb-4">
              <div class="left-content">
                <div class="row">
                  <h4 class="mb-0">
                    <a href="#">Individual KYC/AML &nbsp;</a>{" "}
                    <span style={{ color: "orange", fontSize: 14 }}>
                      {" "}
                      >&nbsp;&nbsp;{" "}
                    </span>
                    <span style={{ color: "orange", fontSize: 14 }}>
                      Documentation
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row  mt-4 pl-4 pr-4">
          <div class="col-lg-2 pl-md-0 pr-md-0">
            <div class="left-source-list">
              <ul>
                <li>
                  <span class="green-circle">
                    <img src={Thick} alt="check" />
                  </span>
                  Individual Profile
                </li>
                <li>
                  <span class="green-circle">
                    <img src={Thick} alt="check" />
                  </span>
                  Documentation
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="kyc-checklist-checklist-doc-bg">
              <form name="myForm" method="post" action="">
                <div class="kyc-checklist-checklist-req-doc">
                  <div class="kyc-checklist-checklist-doc-left">
                    <h3>Checklist</h3>
                    <p>
                      Following documents need to be with you while completing
                      KYC.
                    </p>
                    <div>
                      <div class="kyc-checklist-round">
                        <label>
                          <input
                            type="checkbox"
                            id="checkbox1"
                            name="mcheckbox"
                            onclick="validate()"
                          />
                          <span class="kyc-checklist-checkmark"></span>
                        </label>
                        <div class="kyc-checklist-check-error">
                          <img src="images/red-cross.png" alt="error" />
                        </div>
                        <span class="kyc-checklist-list-require">
                          A proof of address
                        </span>
                      </div>
                      <div class="kyc-checklist-round">
                        <label>
                          <input
                            type="checkbox"
                            id="checkbox2"
                            name="mcheckbox"
                            onclick="validate()"
                          />
                          <span class="kyc-checklist-checkmark"></span>
                        </label>
                        <div class="kyc-checklist-check-error">
                          <img src="images/red-cross.png" alt="error" />
                        </div>
                        <span class="kyc-checklist-list-require">
                          A Selfie of yoursel with photo ID
                        </span>
                      </div>
                      <div class="kyc-checklist-round mb-0">
                        <label>
                          <input
                            type="checkbox"
                            id="checkbox3"
                            name="mcheckbox"
                            onclick="validate()"
                          />
                          <span class="kyc-checklist-checkmark"></span>
                        </label>
                        <div class="kyc-checklist-check-error">
                          <img src="images/red-cross.png" alt="error" />
                        </div>
                        <span class="kyc-checklist-list-require">
                          A proof of second photo ID
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="kyc-checklist-list-checklist-doc-right">
                    <img src={List} alt="kyc list" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row pl-4 pr-4 mt-5">
          <div class="kyc-checklist-doclist-enable-popup">
            <div class="kyc-checklist-doclist-left pink-bg">
              <img src={Disable} alt="disabled" class="img-fluid" />
            </div>
            <div class="kyc-checklist-doclist-right">
              <p>Select all checklist to submit.</p>
              <div>
                <a href="#" class="kyc-checklist-doclist-learn-more">
                  LEARN MORE
                </a>
              </div>
            </div>
            <div class="kyc-checklist-doclist-cross-btn">
              <img src="images/cross-btn.png" alt="cross" />
            </div>
          </div>
        </div>
        <div className="button-doc">
          <a href="/kyc-documentation">
            <span>Go Back</span>
          </a>

          <button
            className="b-checklist-new"
            id="dbutton"
            disabled=""
            onClick="if(!this.form.checkbox.checked){alert('You must agree to the terms first.');return false}"
          >
            <a href="/kyc-status">Submit</a>
          </button>
        </div>
      </div>
    );
  }
}

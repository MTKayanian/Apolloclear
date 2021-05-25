import React from "react";
import "./required-doc.css";
import "./sidebar.css";
import Check from "./images/thick-check.png";
import List from "./images/kyc-list.png";

export default class Indreqkycdoc extends React.Component {
  render() {
    return (
      <div>
        <div className="row pl-4 pr-4">
          <div className=" col-12 pl-md-0 pr-md-0">
            <div className="content-head pt-3 pb-4">
              <div className="left-content">
                <div className="row">
                  <h4 className="mb-0">
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
        <div className="row mt-4 pl-4 pr-4">
          <div className="col-lg-2 pl-md-0 pr-md-0">
            <div className="left-source-list">
              <ul>
                <li>
                  <span className="green-circle">
                    <img src={Check} alt="check" />
                  </span>
                  Individual Profile
                </li>
                <li>
                  <span className="white-circle"></span>Documentation
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="kyc-requireddoc-required-doc-bg">
              <div className="kyc-requireddoc-kyc-req-doc">
                <div className="kyc-requireddoc-req-doc-left">
                  <h3>Required KYC/AML Documents</h3>
                  <p>
                    Prepare the following before completing KYC documentation
                    step.
                  </p>
                  <ul>
                    <li>1-Provide Minimum Two Photo ID Documents </li>
                    <li>
                      2- Provide Front & Back Screenshot of the two ID Documents{" "}
                    </li>
                    <li>
                      3-Provide Selfie of Yourself Holding one of your photo ID
                      Document{" "}
                    </li>
                  </ul>
                </div>
                <div className="kyc-requireddoc-req-doc-right">
                  <img src={List} alt="kyc list" />
                </div>
              </div>
              <div className="kyc-requireddoc-kyc-kyc-requireddoc-instruction">
                <p className="kyc-requireddoc-instruction">
                  <span>Instructions:</span> Take a selfie in a room with enough
                  light. Hold up the document next to your face. Make sure face
                  and ID both are clear in the photo. Choose the highest photo
                  quality option on the camera.
                </p>
                <p className="kyc-requireddoc-ins-cls">
                  Be carefull not to cover any part of your ID with your
                  fingers.
                </p>
              </div>
              <div className="">
                <span>
                  <a href="/kyc-apply-profile" className="requireddoc-new">
                    Go Back
                  </a>
                </span>
                <a href="/kyc-documentation" className="requireddoc-new">
                  CONTINUE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

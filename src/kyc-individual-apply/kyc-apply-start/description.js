import React from "react";
import YourDetails from "./images/yourdetails.png";
import Wallet from "./images/wallet-info.png";
import Planting from "./images/planting.png";
import Document from "./images/documents.png";
import Review from "./images/reviewcheck.png";
import TimeLeft from "./images/timeleft.png";
import Info from "./images/info.png";
import List from "./images/kyc-list.png";
import Steps from "./images/steps.png";

import "./kyc-aml.css";
import "./responsive.css";
class GetStarted extends React.Component {
  state = {
    hoverColor: "white",
  };
  render() {
    return (
      <div className="container-fluid dashboard-content">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="content-head pt-3 pb-0 col-12">
                <div className="left-content">
                  <div className="row">
                    <h4 className="mb-0">
                      <a
                        href="#"
                        style={{ fontSize: 14, color: "black" }}
                        onMouseEnter={() =>
                          this.setState({
                            hoverColor: "orange",
                          })
                        }
                        onMouseLeave={() =>
                          this.setState({
                            hoverColor: "white",
                          })
                        }
                      >
                        Individual KYC &nbsp;
                      </a>{" "}
                      <span style={{ color: "Black", fontSize: 18 }}>
                        {" "}
                        >&nbsp;&nbsp;{" "}
                      </span>
                      <span style={{ color: "orange", fontSize: 14 }}>
                        Apply KYC/AML
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pl-md-0 pr-md-0">
          <div className="row">
            <div className="pt-5 w-100 text-center kyc-aml-kyc-process">
              <div className="kyc-aml-beforeline">
                <div>
                  <div className="kyc-aml-circlesteps kyc-aml-kyc-nobefore  ml-0">
                    <div>
                      <img src={YourDetails} alt="yourdetails" />
                    </div>
                  </div>
                </div>
                <div className="lh60">
                  <p className="subtitle">Your Details</p>
                </div>
              </div>
              <div className="kyc-aml-beforeline">
                <div className="kyc-aml-circlesteps">
                  <div>
                    <img src={Wallet} alt="wallet-info" />
                  </div>
                </div>
                <div className="lh60">
                  <p className="subtitle">
                    Verify Email <br />
                    linking Wallet{" "}
                  </p>
                </div>
              </div>
              <div className="kyc-aml-beforeline">
                <div className="kyc-aml-circlesteps">
                  <div>
                    <img src={Planting} alt="planting" />
                  </div>
                </div>
                <div className="lh60">
                  <p className="subtitle">Proof Physical Address </p>
                </div>
              </div>
              <div className="kyc-aml-beforeline">
                <div className="kyc-aml-circlesteps removeline">
                  <div>
                    <img src={Document} alt="documents" />
                  </div>
                </div>
                <div className="lh60">
                  <p className="subtitle">KYC Documents</p>
                </div>
              </div>
              <div className="kyc-aml-beforeline">
                <div className="kyc-aml-circlesteps">
                  <div>
                    <img src={Review} alt="reviewcheck" />
                  </div>
                </div>
                <div className="lh60">
                  <p className="subtitle">Review & Check</p>
                </div>
              </div>
              <div className="kyc-aml-beforeline">
                <div className="kyc-aml-circlesteps mr-0">
                  <div>
                    <img src={TimeLeft} alt="timeleft" />
                  </div>
                </div>
                <div className="lh60">
                  <p className="subtitle">KYC/AML VerifIed In 48 Hours </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 pl-md-0 pr-md-0">
              <div className="pt-40">
                <div className="card-main d-flex">
                  <div>
                    <p className="heading1">
                      <img src={Info} alt="info" className="pr-3" />
                      PLUTOCLEAR KYC/AML
                    </p>
                    <div className="subh1">
                      Know Your Customer (KYC) procedures are a critical
                      function to assess customer risk and a legal requirement
                      to comply with Anti-Money Laundering (AML) laws. Effective
                      KYC involves knowing a customers identity, their financial
                      activities and the risk they pose. .
                    </div>
                    <div className="kyc-aml-re">
                      <ul>
                        <li className="mr-5">
                          <span>1:</span> Customer Identification Program (CIP)
                        </li>
                        <li className="mr-5">
                          <span>2:</span> Customer Due Diligence
                        </li>
                        <li>
                          <span>3:</span> Ongoing Monitoring
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="kyc-left-img">
                    <img src={List} alt="whitelisting" />
                  </div>
                </div>
                <div className="card-main mt-4">
                  <p className="heading1">
                    <img src={Steps} alt="info" className="pr-3" />
                    Requierements
                  </p>
                  <div className="subh1">
                    Following are the steps that you need to complete for
                    KYC/AML.
                  </div>
                  <div className="row">
                    <div className="col-md-5 p-0">
                      <div className="kyc-requirement">
                        <ul>
                          <li className="">
                            <span>1:</span> Provide profile picture.
                          </li>
                          <li className="">
                            <span>2:</span> Provide personal information
                          </li>
                          <li>
                            <span>3:</span> Verify Email linking to wallet{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-5 p-0">
                      <div className="kyc-requirement">
                        <ul>
                          <li className="">
                            <span>4:</span> Take selfie with your photo ID{" "}
                          </li>
                          <li className="">
                            <span>5:</span> Proof of Physical address{" "}
                          </li>
                          <li>
                            <span>6:</span> KYC/AML documents
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <a href="/kyc-apply-profile" className="b-applystart-new">
                    CONTINUE{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;

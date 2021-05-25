// import React, { Component } from "react";

// import rightArrow from "./images/rightArrow.svg";
// import { Link } from "react-router-dom";
// import "./sidebar.css";
import React from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import axios from "axios";
import $ from "jquery";

import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { popUp } from "../head-actions/head.actions";

import "./sidebar.css";

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeMenuRef: null,
      AcustMang: false,
      Aadmin: false,
      Abilling: false,
      Aextras: false,
      AmyProfile: false,
      Aiam: false,
      Awallet: false,
      Awallets: false,
      whitelistingCount: 0,
      overview: false,
      cusMg: false,
      sndReq: false,
      trans: false,
      marketCap: false,
      BankMenu: false,
      kycaml: false,
      accountManagement: true,
      setting: false,
      digital:false,
    };
  }
  subOption = (option) => {
    console.log(option);
    switch (option) {
      case "wallet":
        console.log("i am wallet");
        this.setState({ AcustMang: true, Awallet: !this.state.Awallet });
        break;
      case "AcustMang":
        this.setState({ AcustMang: !this.state.AcustMang });
        break;
      case "Aprofile":
        this.setState({ AmyProfile: !this.state.AmyProfile });
        break;
      case "Aextras":
        this.setState({ Aextras: !this.state.Aextras });
        break;
      case "iadmin":
        this.setState({ Aadmin: !this.state.Aadmin });
        break;
      case "iam":
        this.setState({ Aiam: !this.state.Aiam });
        break;
      case "billing":
        this.setState({ Abilling: !this.state.Abilling });
        break;
        case "setting":
        this.setState({ settingpr: !this.state.settingpr });
        break;
      case "bank":
        this.setState({ BankMenu: !this.state.BankMenu });
        break;
      case "digital":
        this.setState({ digitalass: !this.state.digitalass });
        break;
         case "atlas":
        this.setState({ atlastoken: !this.state.atlastoken });
        break;
      default:
        return;
    }
  };

  accountManagementHandler = () => {
    this.setState({
      accountManagement: true,
      overview: false,
      cusMg: false,
      sndReq: false,
      trans: false,
      marketCap: false,
      BankMenu: false,
     
    });
  };

  onOverview = () => {
    this.setState({
      overview: true,
      accountManagement: false,
      cusMg: false,
      sndReq: false,
      trans: false,
      marketCap: false,
      BankMenu: false,
   
    });
  };
  onCusMg = () => {
    this.setState({
      overview: false,
      accountManagement: false,
      cusMg: true,
      sndReq: false,
      trans: false,
      marketCap: false,
      BankMenu: false,
    
    });
  };
  onSndReq = () => {
    this.setState({
      overview: false,
      accountManagement: false,
      cusMg: false,
      sndReq: true,
      trans: false,
      marketCap: false,
      BankMenu: false,
    
    });
  };
  onTrans = () => {
    this.setState({
      overview: false,
      accountManagement: false,
      cusMg: false,
      sndReq: false,
      trans: true,
      marketCap: false,
      BankMenu: false,
    
    });
  };
  onMarketCap = () => {
    this.setState({
      overview: false,
      accountManagement: false,
      cusMg: false,
      sndReq: false,
      trans: false,
      marketCap: true,
      BankMenu: false,
 
    });
  };
  onBankMenu = () => {
    this.setState({
      overview: false,
      accountManagement: false,
      cusMg: false,
      sndReq: false,
      trans: false,
      marketCap: false,
      BankMenu: true,
    
    });
  };
  comingSoon = () => {
    this.props.popUp(true);
    console.log("popUp is ", this.props.headReducer.popUp);
  };

  render() {
    console.log("State is ", this.state);
    console.log("Email is verfied ", this.props.headReducer.headAccess);
    console.log("popUp is ", this.props.headReducer.popUp);

    let fill = this.state.overview ? "#0084F8" : "#52616B";
    let fill1 = this.state.cusMg ? "#0084F8" : "#52616B";
    let fill2 = this.state.sndReq ? "#0084F8" : "#52616B";
    let fill3 = this.state.trans ? "#0084F8" : "#52616B";
    let fill4 = this.state.marketCap ? "#0084F8" : "#52616B";
    let fill5 = this.state.accountManagement ? "#0084F8" : "#52616B";

    // debugger
    let menu = (
      <div className=" menu-container">
        <ul className="navbar-nav ml-3">
          <li>
            <Link
              to={
                localStorage.getItem("role") == "P"
                  ? "/individual-account-management"
                  : localStorage.getItem("role") == "B" &&
                    "/business-account-management"
              }
              style={{ color: fill5 }}
              onClick={this.accountManagementHandler}
              exact
            >
              <span>
                <img
                  src={
                    this.state.accountManagement
                      ? "./images/cloud-1.png"
                      : "./images/cloud-2.png"
                  }
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                />
              </span>
              ATLAS Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/overview"
              style={{ color: fill }}
              onClick={this.onOverview}
              exact
            >
              <span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.75">
                    <circle cx="2.75" cy="2.75" r="2.75" fill={fill} />
                    <circle cx="2.75" cy="11" r="2.75" fill={fill} />
                    <circle cx="2.75" cy="19.25" r="2.75" fill={fill} />
                    <circle cx="11" cy="2.75" r="2.75" fill={fill} />
                    <circle cx="11" cy="11" r="2.75" fill={fill} />
                    <circle cx="11" cy="19.25" r="2.75" fill={fill} />
                    <circle cx="19.25" cy="2.75" r="2.75" fill={fill} />
                    <circle cx="19.25" cy="11" r="2.75" fill={fill} />
                    <circle cx="19.25" cy="19.25" r="2.75" fill={fill} />
                  </g>
                </svg>
              </span>
              Overview
            </Link>
          </li>
          {/* ----------------------
      
      
      My profile
      
      
      --------------------- */}
          {/* <li className="nav-item ">
          <div className="nav-link menu " style={{color: fill1}}>
            <div onClick={()=>this.subOption("Aprofile")}>
          
           My Profile
               
               <span className={this.state.AmyProfile?"menu-arrow ml-4 menu-arrow-rotated":"menu-arrow ml-4 "}>
              
                <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="#52616B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
              </span>
              </div>
              <div className={this.state.AmyProfile?"submenu-container submenu-display":"submenu-container"} >
                          <Link to="/MyProfile" exact  className="nav-link submenu menu active-menu activeClass w-100">
                          My Profile</Link>

                        <Link to="/GetStarted" exact  className="nav-link submenu menu active-menu activeClass w-100">
                        Get Started</Link>
                         
                          <Link to="/Business-profile" exact  className="nav-link submenu menu active-menu activeClass w-100">
                          Update Profile</Link>
                          
                          </div></div></li> */}

          {/* ------------ */}

          {/* --------
            
            CUSTOMER MANAGEMENT
            
            --------------------------- */}

          <li
            className="nav-item "
            onClick={
              this.props.headReducer.headAccess ? this.onCusMg : this.comingSoon
            }
          >
            <div className="nav-link menu ">
              <div
                onClick={
                  this.props.headReducer.headAccess
                    ? () => this.subOption("AcustMang")
                    : null
                }
                style={{ color: fill1 }}
              >
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z"
                      fill={fill1}
                    />
                  </svg>
                </span>
                {/* <span style={{color:fill1}}></span> */}
                Customer
                <br /> management
                <span
                  className={
                    this.state.AcustMang
                      ? "menu-arrow ml-4 menu-arrow-rotated"
                      : "menu-arrow ml-4 "
                  }
                >
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="#52616B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={
                  this.state.AcustMang
                    ? "submenu-container submenu-display"
                    : "submenu-container"
                }
              >
                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Organisation
                </Link>
                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Projects
                </Link>
                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Groups
                </Link>
                <div className="nav-link menu" style={{ color: fill1 }}>
                  <div onClick={() => this.subOption("iam")}>
                    KYC/AML
                    <span
                      className={
                        this.state.Aiam
                          ? "menu-arrow ml-5  menu-arrow-rotated"
                          : "menu-arrow ml-5"
                      }
                    >
                      <svg
                        width="7"
                        height="10"
                        viewBox="0 0 7 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#52616B"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={
                      this.state.Aiam
                        ? "submenu-container submenu-display"
                        : "submenu-container"
                    }
                  >
                    <Link
                      to="/kyc-apply-start/description"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      APPLY KYC/AML
                    </Link>
                    <Link
                      to="/kyc-messaging-submitted"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      KYC/AML Submitted
                    </Link>
                    <Link
                      to="/kyc-aml-enquiry"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      KYC/AML Enquiry
                    </Link>
                    <Link
                      to="#"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Archive
                    </Link>
                  </div>
                </div>
                <div className="nav-link menu" style={{ color: fill1 }}>
                  <div onClick={() => this.subOption("atlas")}>
                    Atlas Tokenization
                    <span
                      className={
                        this.state.atlastoken
                          ? "menu-arrow ml-5  menu-arrow-rotated"
                          : "menu-arrow ml-5"
                      }
                    >
                      <svg
                        width="7"
                        height="10"
                        viewBox="0 0 7 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#52616B"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={
                      this.state.atlastoken
                        ? "submenu-container submenu-display"
                        : "submenu-container"
                    }
                  >
                    <Link
                      to="#"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Your Issue & Listing
                    </Link>
                    <Link
                      to="#"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Tokenize Asset
                    </Link>
                    
                    
                  </div>
                </div>
                  <div className="nav-link menu" style={{ color: fill1 }}>
                  <div onClick={() => this.subOption("digital")}>
                   Digital Asset
                    <span
                      className={
                        this.state.digitalass
                          ? "menu-arrow ml-5  menu-arrow-rotated"
                          : "menu-arrow ml-5"
                      }
                    >
                      <svg
                        width="7"
                        height="10"
                        viewBox="0 0 7 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#52616B"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={
                      this.state.digitalass
                        ? "submenu-container submenu-display"
                        : "submenu-container"
                    }
                  >
                    <Link
                      to="#"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Assets Value
                    </Link>
                    <Link
                      to="#"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Halo Balance
                    </Link>
                    <Link
                      to="/issues-and-listing"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Issue & Listing
                    </Link>
                    <Link
                      to="/atlas-tokenization-hub"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Atlas Token Hub
                    </Link>
                  </div>
                </div>
                    
                  
                <div className="nav-link menu" style={{ color: fill1 }}>
                  <div onClick={() => this.subOption("wallet")}>
                    Wallets
                    {/* </div> */}
                    {/* </div> */}
                    {/* Extras */}
                    <span
                      className={
                        this.state.Awallet
                          ? "menu-arrow ml-4 menu-arrow-rotated"
                          : "menu-arrow ml-4 "
                      }
                    >
                      {/* <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.1,12.515a.907.907,0,0,1,1.276,0,.885.885,0,0,1,0,1.263l-5.1,5a.908.908,0,0,1-1.277,0l-5.1-5a.888.888,0,0,1,0-1.263.907.907,0,0,1,1.276,0l4.462,4.1,4.458-4.1Z"
                    transform="translate(-12.252 20.638) rotate(-90)"
                  />
                </svg> */}
                      <svg
                        width="7"
                        height="10"
                        viewBox="0 0 7 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="#52616B"
                          stroke-width="2"
                          d="M1 9L5 5L1 1"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={
                      this.state.Awallet
                        ? "submenu-container submenu-display"
                        : "submenu-container"
                    }
                  >
                    <Link
                      to="/create-wallet"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Creating <br />
                      New Wallet
                    </Link>
                    <Link
                      to="/login-wallet"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Login To <br />
                      Saved Wallet
                    </Link>
                    <Link
                      to="/musig-conversion"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Convert
                      <br />
                      Wallet To <br />
                      Musing
                    </Link>
                    <Link
                      to="digital-assets"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Issuing <br />
                      Digital Asset
                    </Link>
                    
                  </div>
                </div>
                <div className="nav-link menu" style={{ color: fill1 }}>
                  <div onClick={() => this.subOption("iadmin")}>
                    Iam &<br />
                    Admin
                    {/* </div> */}
                    {/* </div> */}
                    {/* Extras */}
                    <span
                      className={
                        this.state.Aadmin
                          ? "menu-arrow ml-4 menu-arrow-rotated"
                          : "menu-arrow ml-4 "
                      }
                    >
                      {/* <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.1,12.515a.907.907,0,0,1,1.276,0,.885.885,0,0,1,0,1.263l-5.1,5a.908.908,0,0,1-1.277,0l-5.1-5a.888.888,0,0,1,0-1.263.907.907,0,0,1,1.276,0l4.462,4.1,4.458-4.1Z"
                    transform="translate(-12.252 20.638) rotate(-90)"
                  />
                </svg> */}
                      <svg
                        width="7"
                        height="10"
                        viewBox="0 0 7 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L5 5L1 1"
                          stroke="#52616B"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={
                      this.state.Aadmin
                        ? "submenu-container submenu-display"
                        : "submenu-container"
                    }
                  >
                    <div className="nav-link menu" style={{ color: fill1 }}>
                      <div onClick={() => this.subOption("iam")}>
                        I AM
                        <span
                          className={
                            this.state.Aiam
                              ? "menu-arrow ml-5  menu-arrow-rotated"
                              : "menu-arrow ml-5"
                          }
                        >
                          <svg
                            width="7"
                            height="10"
                            viewBox="0 0 7 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div
                        className={
                          this.state.Aiam
                            ? "submenu-container submenu-display"
                            : "submenu-container"
                        }
                      >
                        <Link
                          to="/GetStarted"
                          exact
                          className="nav-link submenu menu activeClass w-100"
                        >
                          Members
                        </Link>
                        <Link
                          to="/GetStarted"
                          exact
                          className="nav-link submenu menu activeClass w-100"
                        >
                          Organisation
                        </Link>
                        <Link
                          to="/GetStarted"
                          exact
                          className="nav-link submenu menu activeClass w-100"
                        >
                          Projects
                        </Link>
                        <Link
                          to="/GetStarted"
                          exact
                          className="nav-link submenu menu activeClass w-100"
                        >
                          Groups <br />
                          Accounts
                        </Link>
                        <Link
                          to="/GetStarted"
                          exact
                          className="nav-link submenu menu activeClass w-100"
                        >
                          Settings
                        </Link>
                      </div>
                    </div>
                    <Link
                      to="/identity"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Identity &
                      <br />
                      Organisation
                    </Link>
                    <Link
                      to="/GetStarted"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Organisation
                      <br />
                      Policies
                    </Link>
                    <Link
                      to="/GetStarted"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Quotes
                    </Link>
                    <Link
                      to="/GetStarted"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Service <br />
                      Accounts
                    </Link>
                    <Link
                      to="/GetStarted"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Settings
                    </Link>
                    <Link
                      to="/GetStarted"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Roles
                    </Link>
                    <Link
                      to="/GetStarted"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Audits Logs
                    </Link>
                    <Link
                      to="/GetStarted"
                      exact
                      className="nav-link submenu menu activeClass w-100"
                    >
                      Identity- <br />
                      Aware Proxy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* -------------------------
        
        SEND/REQUEST

        -------------------------------------  */}
          <li
            onClick={
              this.props.headReducer.headAccess
                ? this.onSndReq
                : this.comingSoon
            }
          >
            <Link
              to={this.props.headReducer.headAccess ? "/send-overview" : "#"}
              // to="/send-overview"
              // to="#"
              style={{ color: fill2 }}
            >
              <span>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.75">
                    <path
                      d="M5.41686 5.05171C4.95722 5.05171 4.58343 4.67402 4.58343 4.2096C4.58343 3.74518 4.95722 3.3675 5.41686 3.3675C5.8765 3.3675 6.25029 3.74518 6.25029 4.2096H7.08372C7.08372 3.28076 6.33613 2.52539 5.41686 2.52539C4.49759 2.52539 3.75 3.28076 3.75 4.2096C3.75 5.13844 4.49759 5.89381 5.41686 5.89381C5.8765 5.89381 6.25029 6.2715 6.25029 6.73592C6.25029 7.20034 5.8765 7.57802 5.41686 7.57802C4.95722 7.57802 4.58343 7.20034 4.58343 6.73592H3.75C3.75 7.66476 4.49759 8.42013 5.41686 8.42013C6.33613 8.42013 7.08372 7.66476 7.08372 6.73592C7.08372 5.80707 6.33613 5.05171 5.41686 5.05171Z"
                      fill={fill2}
                    />
                    <path
                      d="M5.83441 1.68359H5.00098V2.94675H5.83441V1.68359Z"
                      fill={fill2}
                    />
                    <path
                      d="M5.83441 8H5.00098V9.26316H5.83441V8Z"
                      fill={fill2}
                    />
                    <path
                      d="M15.002 17.4746V18.3167H15.8354V19.1588H10.0014V18.3167H14.1686V17.4746H9.16797V20.0009H16.6688V17.4746H15.002Z"
                      fill={fill2}
                    />
                    <path
                      d="M9.16797 15.7891V17.8943H10.0014V16.6312H15.8354V17.8943H16.6688V15.7891H9.16797Z"
                      fill={fill2}
                    />
                    <path
                      d="M9.16797 14.1055V16.6318H16.6688V14.1055H9.16797ZM15.8354 15.7897H10.0014V14.9476H15.8354V15.7897Z"
                      fill={fill2}
                    />
                    <path
                      d="M17.1767 3.47461C16.6449 3.47461 16.2121 3.9119 16.2121 4.44925C16.2121 4.9866 16.6449 5.42389 17.1767 5.42389H18.6513L13.9151 10.2097L11.3682 8.60122L2.1875 15.8873L2.58492 16.3983L11.41 9.39425L14.0077 11.0346L20.2037 4.77413H17.1767C16.9993 4.77413 16.8552 4.62826 16.8552 4.44925C16.8552 4.27024 16.9993 4.12437 17.1767 4.12437H21.3567V8.34781C21.3567 8.52682 21.2126 8.67269 21.0351 8.67269C20.8577 8.67269 20.7136 8.52682 20.7136 8.34781V5.61427L14.227 12.1681L11.3567 10.557L3.14985 17.1907L3.55177 17.6982L11.4216 11.3367L14.3389 12.9744L20.0705 7.18279V8.34781C20.0705 8.88516 20.5033 9.32245 21.0351 9.32245C21.567 9.32245 21.9997 8.88516 21.9997 8.34781V3.47461H17.1767Z"
                      fill={fill2}
                    />
                    <path
                      d="M9.16741 5.05273H8.33398V5.89484H9.16741V5.05273Z"
                      fill={fill2}
                    />
                    <path
                      d="M5.4173 0C2.43028 0 0 2.45558 0 5.47368C0 8.49179 2.43028 10.9474 5.4173 10.9474C8.40431 10.9474 10.8346 8.49179 10.8346 5.47368C10.8346 2.45558 8.40431 0 5.4173 0ZM5.4173 10.1053C2.88992 10.1053 0.83343 8.02737 0.83343 5.47368C0.83343 2.92 2.88992 0.842105 5.4173 0.842105C7.94467 0.842105 10.0012 2.92 10.0012 5.47368C10.0012 8.02737 7.94467 10.1053 5.4173 10.1053Z"
                      fill={fill2}
                    />
                  </g>
                </svg>
              </span>
              Send/request
            </Link>
          </li>
          {/* -------------------------

              TRANSACTION

------------------- */}

          <li
            onClick={
              this.props.headReducer.headAccess ? this.onTrans : this.comingSoon
            }
          >
            <Link
              to={this.props.headReducer.headAccess ? "/transaction" : "#"}
              // to="/transaction"
              style={{ color: fill3 }}
            >
              <span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6464 7.48555C16.5942 7.35946 16.5301 7.24064 16.4555 7.13042H17.5742C18.664 7.13042 19.5507 6.23321 19.5507 5.13042C19.5507 4.02764 18.664 3.13043 17.5742 3.13043H14.1333C14.352 2.8086 14.4804 2.41926 14.4804 2C14.4804 0.897216 13.5937 0 12.5039 0H1.97656C0.886701 0 0 0.897216 0 2C0 3.10278 0.886701 3.99999 1.97656 3.99999H5.41749C5.19874 4.32182 5.0703 4.71116 5.0703 5.13042C5.0703 5.54969 5.19869 5.93903 5.41749 6.26086H4.29687C3.20701 6.26086 2.32031 7.15807 2.32031 8.26085C2.32031 8.8942 2.6131 9.45937 3.06861 9.82607C2.6131 10.1928 2.32031 10.7579 2.32031 11.3913C2.32031 12.0246 2.6131 12.5898 3.06861 12.9565C2.6131 13.3232 2.32031 13.8884 2.32031 14.5217C2.32031 15.1551 2.6131 15.7202 3.06861 16.0869C2.6131 16.4536 2.32031 17.0188 2.32031 17.6521C2.32031 18.7549 3.20701 19.6521 4.29687 19.6521H9.36072C10.6947 21.0959 12.5925 22 14.6953 22C18.7231 22 22 18.6843 22 14.6087C22 11.2167 19.73 8.35142 16.6464 7.48555ZM17.5742 3.99999C18.1902 3.99999 18.6914 4.50712 18.6914 5.13042C18.6914 5.75373 18.1902 6.26086 17.5742 6.26086H14.8242H7.04686C6.43082 6.26086 5.92968 5.75373 5.92968 5.13042C5.92968 4.50712 6.43082 3.99999 7.04686 3.99999H17.5742ZM1.97656 3.13043C1.36052 3.13043 0.859373 2.6233 0.859373 2C0.859373 1.37669 1.36052 0.869564 1.97656 0.869564H12.5039C13.1199 0.869564 13.6211 1.37669 13.6211 2C13.6211 2.6233 13.1199 3.13043 12.5039 3.13043H1.97656ZM4.29687 7.13042H14.8242C14.9973 7.13042 15.163 7.17112 15.3117 7.24399C15.1084 7.22673 14.903 7.21742 14.6953 7.21742C12.6782 7.21742 10.8494 8.04911 9.52624 9.39129H4.29687C3.68087 9.39129 3.17968 8.88416 3.17968 8.26085C3.17968 7.63755 3.68087 7.13042 4.29687 7.13042ZM4.29687 10.2608H8.79203C8.30425 10.9371 7.92712 11.6998 7.68761 12.5217H4.29687C3.68082 12.5217 3.17968 12.0146 3.17968 11.3913C3.17968 10.768 3.68082 10.2608 4.29687 10.2608ZM4.29687 13.3913H7.4903C7.42512 13.7875 7.39065 14.1941 7.39065 14.6087C7.39065 14.9629 7.41596 15.3111 7.46379 15.6521H4.29687C3.68082 15.6521 3.17968 15.1451 3.17968 14.5217C3.17968 13.8984 3.68082 13.3913 4.29687 13.3913ZM4.29687 18.7826C3.68082 18.7826 3.17968 18.2755 3.17968 17.6521C3.17968 17.0288 3.68082 16.5217 4.29687 16.5217H7.63923C7.85605 17.3397 8.20826 18.102 8.67018 18.7826H4.29687ZM14.6953 21.1304C11.1414 21.1304 8.25003 18.2048 8.25003 14.6087C8.25003 11.0126 11.1414 8.08698 14.6953 8.08698C18.2493 8.08698 21.1406 11.0126 21.1406 14.6087C21.1406 18.2048 18.2493 21.1304 14.6953 21.1304Z"
                    fill={fill3}
                  />
                </svg>
              </span>
              Transactions
            </Link>
          </li>

          {/* --------------------
          
          PORTFOLIO
          
          -------------- */}
          <li onClick={this.comingSoon}>
            <Link to="#">
              <span>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3242 3.02057V2.74835C20.3242 2.02599 19.7459 1.4383 19.0352 1.4383C18.3244 1.4383 17.7461 2.02599 17.7461 2.74835V2.96669H16.3729V1.01253C16.3729 0.454237 15.9259 0 15.3765 0H9.28752C8.73817 0 8.29116 0.454237 8.29116 1.01253V2.96669H6.91797V2.74835C6.91797 2.02599 6.3397 1.4383 5.62891 1.4383C4.91812 1.4383 4.33984 2.02599 4.33984 2.74835V3.02057C3.3819 3.24009 2.66406 4.11123 2.66406 5.1501V5.21075V9.09155V11.4487C1.09923 12.1292 0 13.7095 0 15.5458C0 18.0019 1.96612 20 4.38281 20C6.7995 20 8.76562 18.0019 8.76562 15.5458C8.76562 13.0898 6.7995 11.0917 4.38281 11.0917C4.08873 11.0917 3.80145 11.1215 3.52344 11.1779V9.52788L10.4857 9.5233C10.5137 10.5187 11.3185 11.3198 12.3046 11.3198H12.3594C13.3439 11.3198 14.1478 10.5212 14.1782 9.52814H21.1406V15.4585C21.1406 16.1809 20.5624 16.7686 19.8516 16.7686H11.7734C11.5362 16.7686 11.3438 16.9641 11.3438 17.2052C11.3438 17.4464 11.5362 17.6419 11.7734 17.6419H19.8516C21.0362 17.6419 22 16.6624 22 15.4585V9.09151V5.21071V5.15005C22 4.11123 21.2822 3.24005 20.3242 3.02057ZM7.90625 15.5458C7.90625 17.5203 6.32564 19.1266 4.38281 19.1266C2.43998 19.1266 0.859375 17.5203 0.859375 15.5458C0.859375 13.5714 2.43998 11.965 4.38281 11.965C6.32564 11.965 7.90625 13.5714 7.90625 15.5458ZM18.6055 2.74835C18.6055 2.50756 18.7982 2.31166 19.0352 2.31166C19.2721 2.31166 19.4648 2.50756 19.4648 2.74835V2.96669H18.6055V2.74835ZM9.15058 1.01249C9.15058 0.935766 9.21203 0.873321 9.28757 0.873321H15.3765C15.4521 0.873321 15.5135 0.935766 15.5135 1.01249V2.96664H9.15058V1.01249ZM5.19922 2.74835C5.19922 2.50756 5.39198 2.31166 5.62891 2.31166C5.86584 2.31166 6.05859 2.50756 6.05859 2.74835V2.96669H5.19922V2.74835ZM13.3203 9.46993C13.3203 10.0084 12.8893 10.4464 12.3594 10.4464H12.3046C11.7748 10.4464 11.3438 10.0084 11.3438 9.46993V8.08617H13.3204V9.46993H13.3203ZM14.1797 8.65482V7.64949C14.1797 7.40831 13.9873 7.21281 13.75 7.21281H10.9141C10.6768 7.21281 10.4844 7.40831 10.4844 7.64949V8.64993L3.52344 8.65452V5.21071V5.15005C3.52344 4.4277 4.10171 3.84001 4.8125 3.84001H19.8516C20.5624 3.84001 21.1406 4.4277 21.1406 5.15005V5.21071V8.65482H14.1797Z"
                    fill="#52616B"
                  />
                </svg>
              </span>
              Portfolio
            </Link>
          </li>
          {/* --------------------------

MARKET CAP

------------------ */}

          <li
            onClick={
              this.props.headReducer.headAccess
                ? this.onMarketCap
                : this.comingSoon
            }
          >
            <Link
              to={this.props.headReducer.headAccess ? "/MarketCap" : "#"}
              // to="/MarketCap"
              style={{ color: fill4 }}
            >
              <span>
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.75">
                    <path
                      d="M19.11 15.1191H17.098H2.89C1.29643 15.1191 0 16.4348 0 18.052C0 19.6692 1.29648 20.9848 2.89 20.9848H4.58395L4.36532 21.1651C4.11357 21.3727 4.00028 21.7014 4.06964 22.0229C4.13899 22.3444 4.37723 22.5951 4.69143 22.6769L4.80497 22.7065L4.24463 24.922C4.17592 25.1937 4.33725 25.4704 4.60491 25.5401L6.30672 25.9834C6.3477 25.9941 6.38948 25.9993 6.43112 25.9993C6.51999 25.9993 6.60811 25.9753 6.68587 25.9286C6.80011 25.86 6.88282 25.7482 6.9158 25.6178L7.4762 23.4021L7.58974 23.4317C7.90394 23.5136 8.23165 23.4104 8.44502 23.1624C8.65839 22.9145 8.71503 22.5711 8.59293 22.2662L8.07968 20.9848H17.098H19.11V20.9848C20.7036 20.9848 22 19.6692 22 18.052C22 16.4348 20.7035 15.1191 19.11 15.1191ZM4.91336 22.2777L4.91316 22.2785C4.91326 22.2782 4.91331 22.2778 4.91341 22.2775C4.91336 22.2776 4.91336 22.2777 4.91336 22.2777ZM7.30286 22.3085C7.15669 22.2703 7.00467 22.2923 6.87472 22.3703C6.74481 22.4482 6.65264 22.5728 6.61521 22.721L6.07083 24.8735L5.33835 24.6826L5.88268 22.5304C5.92026 22.382 5.89864 22.2277 5.82173 22.0958C5.74482 21.964 5.62197 21.8705 5.47616 21.8327L5.22275 21.7666L6.17116 20.9848L6.7937 20.4716L6.99927 20.9848L7.55586 22.3744L7.30286 22.3085ZM16.5976 19.9692H7.67285L7.46639 19.4538C7.40664 19.3047 7.28084 19.1931 7.12722 19.1532C6.9735 19.113 6.81037 19.1494 6.68727 19.2509L5.81588 19.9692H2.89C1.84827 19.9692 1.0008 19.1091 1.0008 18.052C1.0008 16.9949 1.84832 16.1348 2.89 16.1348H16.5976V19.9692H16.5976ZM19.11 19.9692H17.5984V16.1348H19.11C20.1517 16.1348 20.9992 16.9949 20.9992 18.052C20.9992 19.1091 20.1516 19.9692 19.11 19.9692Z"
                      fill={fill4}
                    />
                    <path
                      d="M19.4 16.8902C19.2286 16.6702 18.9139 16.6328 18.6971 16.8068C18.4803 16.9807 18.4436 17.3001 18.615 17.5201L18.952 17.9527L18.615 18.3853C18.4436 18.6053 18.4804 18.9246 18.6971 19.0986C18.789 19.1723 18.8985 19.208 19.0071 19.208C19.1549 19.208 19.3012 19.1419 19.4 19.0152L19.9825 18.2676C20.1263 18.083 20.1263 17.8223 19.9825 17.6377L19.4 16.8902Z"
                      fill={fill4}
                    />
                    <path
                      d="M3.04267 18.2466C3.05518 18.2776 3.07069 18.3071 3.08871 18.3345C3.10722 18.3624 3.12824 18.3883 3.15126 18.4117C3.17427 18.4351 3.19979 18.4564 3.22732 18.4746C3.25434 18.4929 3.28336 18.5087 3.31338 18.5213C3.34391 18.534 3.37493 18.5437 3.40696 18.5503C3.43948 18.5569 3.47201 18.5605 3.50504 18.5605C3.53756 18.5605 3.57009 18.5569 3.60261 18.5503C3.63464 18.5437 3.66616 18.534 3.69619 18.5213C3.72621 18.5087 3.75574 18.4929 3.78276 18.4746C3.80978 18.4564 3.8358 18.4351 3.85882 18.4117C3.88184 18.3883 3.90285 18.3624 3.92087 18.3345C3.93888 18.3071 3.95439 18.2776 3.9669 18.2466C3.97941 18.2162 3.98892 18.1842 3.99543 18.1517C4.00193 18.1192 4.00543 18.0856 4.00543 18.0527C4.00543 18.0197 4.00193 17.9861 3.99543 17.9532C3.98892 17.9212 3.97941 17.8892 3.9669 17.8582C3.95439 17.8277 3.93888 17.7983 3.92087 17.7709C3.90285 17.7429 3.88184 17.717 3.85882 17.6936C3.8358 17.6703 3.80978 17.6489 3.78276 17.6301C3.75574 17.6119 3.72621 17.5961 3.69619 17.5834C3.66616 17.5707 3.63464 17.5611 3.60261 17.5545C3.43998 17.5215 3.26735 17.5753 3.15126 17.6936C3.12824 17.717 3.10722 17.7429 3.08871 17.7709C3.07069 17.7983 3.05518 17.8277 3.04267 17.8582C3.03016 17.8892 3.02065 17.9212 3.01415 17.9532C3.00764 17.9861 3.00464 18.0197 3.00464 18.0527C3.00464 18.0856 3.00764 18.1192 3.01415 18.1517C3.02065 18.1842 3.03016 18.2162 3.04267 18.2466Z"
                      fill={fill4}
                    />
                    <path
                      d="M5.7038 18.2466C5.71631 18.2776 5.73182 18.3071 5.74984 18.3345C5.76835 18.3624 5.78937 18.3883 5.81239 18.4117C5.83541 18.4351 5.86093 18.4564 5.88845 18.4746C5.91547 18.4929 5.94449 18.5087 5.97452 18.5214C6.00504 18.5341 6.03657 18.5437 6.06809 18.5503C6.10062 18.5569 6.13364 18.5605 6.16617 18.5605C6.1987 18.5605 6.23172 18.5569 6.26375 18.5503C6.29577 18.5437 6.3273 18.5341 6.35732 18.5214C6.38785 18.5087 6.41687 18.4929 6.44389 18.4746C6.47141 18.4564 6.49693 18.4351 6.51995 18.4117C6.54297 18.3883 6.56399 18.3624 6.582 18.3345C6.60002 18.3071 6.61553 18.2776 6.62804 18.2466C6.64055 18.2162 6.65005 18.1842 6.65656 18.1517C6.66306 18.1192 6.66657 18.0857 6.66657 18.0527C6.66657 18.0197 6.66306 17.9861 6.65656 17.9532C6.65005 17.9212 6.64055 17.8892 6.62804 17.8582C6.61553 17.8277 6.60002 17.7983 6.582 17.7709C6.56399 17.7429 6.54297 17.717 6.51995 17.6936C6.40386 17.5753 6.23122 17.5215 6.06809 17.5545C6.03657 17.5611 6.00504 17.5707 5.97452 17.5834C5.94449 17.5961 5.91547 17.6119 5.88845 17.6302C5.86093 17.6489 5.83541 17.6703 5.81239 17.6936C5.78937 17.717 5.76835 17.7429 5.74984 17.7709C5.73182 17.7983 5.71631 17.8277 5.7038 17.8582C5.69129 17.8892 5.68178 17.9212 5.67528 17.9532C5.66877 17.9861 5.66577 18.0197 5.66577 18.0527C5.66577 18.0857 5.66877 18.1192 5.67528 18.1517C5.68178 18.1842 5.69129 18.2162 5.7038 18.2466Z"
                      fill={fill4}
                    />
                    <path
                      d="M8.36544 18.2466C8.37795 18.2776 8.39346 18.3071 8.41147 18.3345C8.42949 18.3624 8.4505 18.3883 8.47352 18.4117C8.49654 18.4351 8.52206 18.4564 8.54958 18.4746C8.5766 18.4929 8.60563 18.5087 8.63615 18.5214C8.66617 18.5341 8.6977 18.5437 8.72972 18.5503C8.76175 18.5569 8.79478 18.5605 8.8273 18.5605C8.85983 18.5605 8.89286 18.5569 8.92488 18.5503C8.95691 18.5437 8.98843 18.5341 9.01845 18.5214C9.04898 18.5087 9.078 18.4929 9.10502 18.4746C9.13255 18.4564 9.15807 18.4351 9.18108 18.4117C9.2041 18.3883 9.22512 18.3624 9.24313 18.3345C9.26115 18.3071 9.27666 18.2776 9.28917 18.2466C9.30168 18.2162 9.31119 18.1842 9.31769 18.1517C9.3242 18.1192 9.3277 18.0857 9.3277 18.0527C9.3277 18.0197 9.3242 17.9861 9.31769 17.9532C9.31169 17.9212 9.30168 17.8892 9.28917 17.8582C9.27666 17.8277 9.26115 17.7983 9.24313 17.7709C9.22512 17.7429 9.2041 17.717 9.18108 17.6936C9.06499 17.5753 8.89185 17.5215 8.72972 17.5545C8.6977 17.5611 8.66617 17.5707 8.63565 17.5834C8.60563 17.5961 8.5766 17.6119 8.54958 17.6302C8.52206 17.6489 8.49654 17.6703 8.47352 17.6936C8.4505 17.717 8.42949 17.7429 8.41147 17.7709C8.39346 17.7983 8.37795 17.8277 8.36544 17.8582C8.35293 17.8892 8.34292 17.9212 8.33691 17.9532C8.33041 17.9861 8.3269 18.0197 8.3269 18.0527C8.3269 18.0857 8.33041 18.1192 8.33691 18.1517C8.34292 18.1842 8.35293 18.2162 8.36544 18.2466Z"
                      fill={fill4}
                    />
                    <path
                      d="M11.0266 18.2466C11.0391 18.2776 11.0546 18.3071 11.0726 18.3345C11.0906 18.3624 11.1116 18.3883 11.1347 18.4117C11.1577 18.4351 11.1832 18.4564 11.2107 18.4746C11.2377 18.4929 11.2668 18.5087 11.2973 18.5214C11.3273 18.5341 11.3588 18.5437 11.3909 18.5503C11.4229 18.5569 11.4559 18.5605 11.4884 18.5605C11.521 18.5605 11.554 18.5569 11.586 18.5503C11.618 18.5437 11.6496 18.5341 11.6796 18.5214C11.7101 18.5087 11.7391 18.4929 11.7662 18.4746C11.7937 18.4564 11.8192 18.4351 11.8422 18.4117C11.8652 18.3883 11.8863 18.3624 11.9043 18.3345C11.9223 18.3071 11.9378 18.2776 11.9503 18.2466C11.9628 18.2162 11.9728 18.1842 11.9788 18.1517C11.9853 18.1192 11.9888 18.0857 11.9888 18.0527C11.9888 18.0197 11.9853 17.9861 11.9788 17.9532C11.9728 17.9212 11.9628 17.8892 11.9503 17.8582C11.9378 17.8277 11.9223 17.7983 11.9043 17.7709C11.8863 17.7429 11.8652 17.717 11.8422 17.6936C11.7261 17.5753 11.553 17.5215 11.3909 17.5545C11.3588 17.5611 11.3273 17.5707 11.2973 17.5834C11.2668 17.5961 11.2377 17.6119 11.2107 17.6302C11.1832 17.6489 11.1577 17.6703 11.1347 17.6936C11.1116 17.717 11.0906 17.7429 11.0726 17.7709C11.0546 17.7983 11.0391 17.8277 11.0266 17.8582C11.0141 17.8892 11.0046 17.9212 10.998 17.9532C10.9915 17.9861 10.988 18.0197 10.988 18.0527C10.988 18.0857 10.9915 18.1192 10.998 18.1517C11.0046 18.1842 11.0141 18.2162 11.0266 18.2466Z"
                      fill={fill4}
                    />
                    <path
                      d="M13.6877 18.247C13.7002 18.278 13.7157 18.3074 13.7337 18.3348C13.7518 18.3628 13.7728 18.3887 13.7958 18.412C13.8188 18.4354 13.8443 18.4568 13.8718 18.475C13.8989 18.4933 13.9279 18.509 13.9584 18.5217C13.9884 18.5344 14.02 18.544 14.052 18.5506C14.084 18.5572 14.117 18.5608 14.1496 18.5608C14.1821 18.5608 14.2151 18.5572 14.2476 18.5506C14.2792 18.544 14.3107 18.5344 14.3412 18.5217C14.3712 18.509 14.4003 18.4933 14.4273 18.475C14.4548 18.4568 14.4803 18.4354 14.5033 18.412C14.5264 18.3887 14.5474 18.3628 14.5659 18.3348C14.5839 18.3074 14.5994 18.278 14.6119 18.247C14.6244 18.2165 14.634 18.1846 14.6405 18.1521C14.647 18.1195 14.65 18.086 14.65 18.053C14.65 18.02 14.647 17.9865 14.6405 17.9535C14.634 17.9215 14.6244 17.8895 14.6119 17.8585C14.5994 17.828 14.5839 17.7986 14.5659 17.7712C14.5474 17.7432 14.5264 17.7173 14.5033 17.694C14.4803 17.6706 14.4548 17.6493 14.4273 17.6305C14.4003 17.6122 14.3712 17.5965 14.3412 17.5838C14.3107 17.5711 14.2792 17.5614 14.2476 17.5548C14.1831 17.5416 14.1165 17.5416 14.052 17.5548C14.02 17.5614 13.9884 17.5711 13.9584 17.5838C13.9279 17.5965 13.8989 17.6122 13.8718 17.6305C13.8443 17.6493 13.8188 17.6706 13.7958 17.694C13.7728 17.7173 13.7518 17.7432 13.7337 17.7712C13.7157 17.7986 13.7002 17.828 13.6877 17.8585C13.6752 17.8895 13.6657 17.9215 13.6592 17.9535C13.6527 17.9865 13.6492 18.02 13.6492 18.053C13.6492 18.086 13.6527 18.1196 13.6592 18.1521C13.6657 18.1846 13.6752 18.2166 13.6877 18.247Z"
                      fill={fill4}
                    />
                    <path
                      d="M6.60941 12.8356C6.62167 12.8475 6.63433 12.859 6.64784 12.8696C7.79691 13.7717 9.15539 14.2824 10.5972 14.3585C10.6075 14.3591 10.6178 14.3596 10.6281 14.3601C10.6738 14.3623 10.7197 14.3641 10.7656 14.3654C10.7791 14.3658 10.7926 14.3663 10.8061 14.3667C10.8627 14.368 10.9193 14.3689 10.9762 14.3689C11.0333 14.3689 11.0903 14.368 11.1473 14.3667C11.1603 14.3664 11.1732 14.3659 11.1862 14.3655C11.2332 14.3641 11.2801 14.3623 11.3269 14.3601C11.3359 14.3596 11.3449 14.3591 11.3538 14.3586C12.8193 14.2817 14.196 13.7572 15.3556 12.8295C15.3715 12.8168 15.3865 12.803 15.4006 12.7886C17.0181 11.4707 18.0556 9.44843 18.0556 7.18449C18.0556 3.22294 14.8798 0 10.9762 0C7.07258 0 3.89661 3.22294 3.89661 7.18444C3.89661 9.47534 4.95865 11.5192 6.60941 12.8356ZM11.6262 13.3179C11.5952 13.3212 11.5641 13.3242 11.533 13.3271C11.4986 13.3303 11.4642 13.3335 11.4296 13.336C11.3696 13.3405 11.3095 13.344 11.2491 13.3467C11.2284 13.3476 11.2078 13.3483 11.1871 13.349C11.117 13.3514 11.0467 13.3532 10.9761 13.3532C10.9065 13.3532 10.8371 13.3515 10.7679 13.3491C10.7475 13.3484 10.7271 13.3477 10.7068 13.3468C10.6492 13.3443 10.5918 13.3409 10.5345 13.3368C10.5012 13.3344 10.4679 13.3314 10.4348 13.3284C10.3988 13.3252 10.3629 13.3218 10.3271 13.318C10.2871 13.3137 10.2472 13.3092 10.2074 13.3041C10.2004 13.3031 10.1934 13.3021 10.1863 13.3012C9.17756 13.1678 8.24577 12.7825 7.45434 12.2097V11.2903C7.45434 10.0804 8.04651 9.00881 8.95153 8.35622C9.51718 8.80482 10.228 9.0732 10.9999 9.0732C11.7717 9.0732 12.4826 8.80488 13.0482 8.35622C13.9532 9.00881 14.5454 10.0804 14.5454 11.2903V12.1745H14.5454C13.7078 12.7933 12.7092 13.2005 11.6262 13.3179ZM10.9762 1.01563C14.328 1.01563 17.0549 3.78291 17.0549 7.18444C17.0549 8.73947 16.4848 10.1618 15.5458 11.2479C15.5325 9.7651 14.8267 8.44727 13.7411 7.61207C14.1141 7.06587 14.3334 6.40383 14.3334 5.69046C14.3334 5.52262 14.3211 5.35383 14.2969 5.18874C14.2562 4.91137 14.0018 4.71997 13.7283 4.76121C13.4549 4.80249 13.2663 5.06077 13.307 5.33819C13.324 5.45392 13.3326 5.57244 13.3326 5.69046C13.3326 6.21366 13.1641 6.69755 12.8798 7.08984C12.6491 7.40814 12.342 7.66575 11.9861 7.83495C11.6864 7.9775 11.3523 8.05763 11 8.05763C10.6477 8.05763 10.3136 7.9775 10.0139 7.83495C9.65799 7.66575 9.3509 7.40814 9.12021 7.08984C8.83589 6.69755 8.66745 6.21371 8.66745 5.69046C8.66745 4.38522 9.71383 3.32333 11 3.32333C11.177 3.32333 11.3533 3.34344 11.5241 3.38321C11.7937 3.44612 12.062 3.27509 12.1237 3.00169C12.1854 2.72833 12.0171 2.45594 11.7478 2.39327C11.5038 2.3365 11.2522 2.30771 11.0001 2.30771C9.16205 2.30771 7.66671 3.82521 7.66671 5.69046C7.66671 6.40383 7.88598 7.06587 8.25893 7.61207C7.16301 8.45525 6.45374 9.79024 6.45374 11.2903V11.3016C5.48667 10.2089 4.89745 8.76527 4.89745 7.18444C4.8974 3.78291 7.62432 1.01563 10.9762 1.01563Z"
                      fill={fill4}
                    />
                    <path
                      d="M12.6142 3.9286C12.6267 3.95907 12.6422 3.98852 12.6602 4.01595C12.6783 4.04388 12.6993 4.06977 12.7223 4.09313C12.7453 4.11705 12.7708 4.13787 12.7984 4.15661C12.8254 4.17489 12.8544 4.19068 12.8849 4.20338C12.915 4.21607 12.9465 4.22567 12.9785 4.23227C13.0105 4.23888 13.0436 4.24192 13.0761 4.24192C13.1086 4.24192 13.1416 4.23882 13.1737 4.23227C13.2057 4.22567 13.2372 4.21607 13.2677 4.20338C13.2978 4.19068 13.3268 4.17489 13.3538 4.15661C13.3813 4.13787 13.4068 4.11705 13.4299 4.09313C13.4529 4.06977 13.4739 4.04388 13.4919 4.01595C13.5099 3.98852 13.5254 3.95907 13.5379 3.9286C13.5505 3.89763 13.5605 3.86614 13.5665 3.83364C13.573 3.80063 13.5765 3.76763 13.5765 3.73411C13.5765 3.7011 13.573 3.66753 13.5665 3.63509C13.5605 3.60259 13.5505 3.57054 13.5379 3.54012C13.5254 3.50971 13.5099 3.47975 13.4919 3.45232C13.4739 3.42434 13.4529 3.39844 13.4299 3.37509C13.4068 3.35173 13.3813 3.3304 13.3538 3.31212C13.3268 3.29389 13.2978 3.27809 13.2677 3.2654C13.2372 3.2527 13.2057 3.2431 13.1737 3.2365C13.1091 3.22325 13.0431 3.22325 12.9785 3.2365C12.9465 3.2431 12.915 3.2527 12.8849 3.2654C12.8544 3.27809 12.8254 3.29389 12.7984 3.31212C12.7708 3.3304 12.7453 3.35173 12.7223 3.37509C12.6993 3.39844 12.6783 3.42434 12.6602 3.45232C12.6422 3.47975 12.6267 3.50971 12.6142 3.54012C12.6017 3.57054 12.5922 3.60259 12.5857 3.63509C12.5792 3.66759 12.5757 3.7011 12.5757 3.73411C12.5757 3.76763 12.5792 3.80063 12.5857 3.83364C12.5922 3.86614 12.6017 3.89763 12.6142 3.9286Z"
                      fill="#52616B"
                    />
                  </g>
                </svg>
              </span>
              Market cap
            </Link>
          </li>
          {/* <li onClick={this.props.headReducer.headAccess?this.onBankMenu:this.comingSoon}>
          
            <Link href="#" >
              <span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7297 6.8296L14.4574 2.11995C14.3122 2.02592 14.1188 2.06822 14.0254 2.21428C13.9321 2.36038 13.974 2.555 14.1191 2.64903L21.2852 7.28983H19.6146L11.4572 2.00698C11.1795 1.82714 10.8206 1.82719 10.5428 2.00698L2.38536 7.28983H0.714814L10.9996 0.628762L12.4562 1.57205C12.6014 1.66603 12.7947 1.62382 12.8881 1.47772C12.9815 1.33162 12.9396 1.137 12.7944 1.04297L11.3378 0.0996812C11.1326 -0.0332271 10.8674 -0.0332271 10.6622 0.0996812L0.270302 6.8296C0.0490129 6.97294 -0.0498154 7.23996 0.0243917 7.4941C0.0985989 7.74824 0.325259 7.91899 0.5884 7.91899H2.16467V9.00328V9.95288C2.16467 10.2033 2.3411 10.4129 2.57536 10.4625V11.0162C2.57536 11.3034 2.80748 11.537 3.09279 11.537H3.13576V15.3911C3.13576 15.5649 3.27567 15.7057 3.44828 15.7057C3.62088 15.7057 3.76079 15.5649 3.76079 15.3911V11.2225C3.76079 11.0487 3.62088 10.9079 3.44828 10.9079H3.20043V10.4737H5.41388V10.9078H5.16604C4.99343 10.9078 4.85353 11.0486 4.85353 11.2224V18.1725C4.85353 18.3463 4.99343 18.4871 5.16604 18.4871H5.41388V18.9592H3.20043V18.4871H3.44828C3.62088 18.4871 3.76079 18.3463 3.76079 18.1725V17.3685C3.76079 17.1948 3.62088 17.0539 3.44828 17.0539C3.27567 17.0539 3.13576 17.1948 3.13576 17.3685V17.858H3.09279C2.80748 17.858 2.57536 18.0916 2.57536 18.3787V18.9324C2.34105 18.982 2.16467 19.1917 2.16467 19.442V20.077H1.05762C0.71215 20.077 0.431091 20.3599 0.431091 20.7077V21.3694C0.431091 21.7171 0.71215 22 1.05762 22H20.9424C21.2878 22 21.5689 21.7171 21.5689 21.3694V20.7077C21.5689 20.3599 21.2878 20.077 20.9424 20.077H19.8353V19.442C19.8353 19.1917 19.6589 18.982 19.4246 18.9324V18.3787C19.4246 18.0916 19.1925 17.858 18.9072 17.858H18.8642V11.5369H18.9072C19.1925 11.5369 19.4246 11.3033 19.4246 11.0161V10.4625C19.6589 10.4129 19.8353 10.2032 19.8353 9.9528V9.00319V7.91891H21.4116C21.6747 7.91891 21.9014 7.74815 21.9756 7.49402C22.0498 7.23996 21.951 6.97289 21.7297 6.8296ZM10.881 2.53606C10.9533 2.48922 11.0467 2.48926 11.119 2.53606L18.4595 7.28987H3.54053L10.881 2.53606ZM2.78969 7.91895H19.2103V8.68868H15.8629H12.83H9.17004H6.13709H2.78969V7.91895ZM12.7318 18.9325V18.3788C12.7318 18.0916 12.4997 17.858 12.2144 17.858H12.1714V11.537H12.2144C12.4997 11.537 12.7318 11.3034 12.7318 11.0162V10.4625C12.9661 10.4129 13.1425 10.2033 13.1425 9.95288V9.31784H15.5504V9.95288C15.5504 10.2033 15.7268 10.4129 15.9611 10.4625V11.0162C15.9611 11.3034 16.1932 11.537 16.4785 11.537H16.5215V17.858H16.4785C16.1932 17.858 15.9611 18.0916 15.9611 18.3788V18.9325C15.7268 18.9821 15.5504 19.1918 15.5504 19.4421V20.0771H13.1425V19.4421C13.1425 19.1918 12.9661 18.9821 12.7318 18.9325ZM6.03891 18.9325V18.3788C6.03891 18.0916 5.80679 17.858 5.52148 17.858H5.47851V11.537H5.52148C5.80679 11.537 6.03891 11.3034 6.03891 11.0162V10.4625C6.27317 10.4129 6.4496 10.2033 6.4496 9.95288V9.31784H8.85753V9.95288C8.85753 10.2033 9.03396 10.4129 9.26823 10.4625V11.0162C9.26823 11.3034 9.50035 11.537 9.78566 11.537H9.82863V17.858H9.78566C9.50035 17.858 9.26823 18.0916 9.26823 18.3788V18.9325C9.03396 18.9821 8.85753 19.1918 8.85753 19.4421V20.0771H6.4496V19.4421C6.4496 19.1918 6.27317 18.9821 6.03891 18.9325ZM11.8589 18.4871H12.1067V18.9592H9.8933V18.4871H10.1411C10.3137 18.4871 10.4537 18.3463 10.4537 18.1725V11.2224C10.4537 11.0487 10.3137 10.9078 10.1411 10.9078H9.8933V10.4737H12.1067V10.9078H11.8589C11.6863 10.9078 11.5464 11.0486 11.5464 11.2224V18.1725C11.5464 18.3463 11.6863 18.4871 11.8589 18.4871ZM9.58074 9.84454H9.57937H9.48256V9.31784H12.5174V9.84454H12.4193C12.419 9.84454 12.4188 9.84458 12.4186 9.84458C12.4184 9.84458 12.4181 9.84454 12.4179 9.84454H9.58074ZM9.48256 19.5728C9.51306 19.5828 9.54555 19.5884 9.57937 19.5884H12.4178C12.4527 19.5884 12.4861 19.5823 12.5174 19.5718V20.0771H9.48256V19.5728ZM2.88792 9.84454H2.78974V9.31784H5.82462V9.84454H5.82458H5.7264H2.88792ZM2.78969 19.5723C2.82059 19.5826 2.85354 19.5884 2.88788 19.5884H5.7264C5.76073 19.5884 5.79368 19.5826 5.82458 19.5723V20.0771H2.78969V19.5723ZM20.9439 20.7077L20.943 21.3709C20.943 21.3709 20.9429 21.3709 20.9424 21.3709L1.05612 21.3695L1.05762 20.7063L20.9439 20.7077ZM19.1112 19.5883C19.1459 19.5883 19.1791 19.5824 19.2103 19.5719V20.0771H16.1754V19.5726C16.2061 19.5827 16.2387 19.5883 16.2727 19.5883H19.1112ZM16.834 10.9079H16.5861V10.4737H18.7996V10.9078H18.5517C18.3791 10.9078 18.2392 11.0486 18.2392 11.2224V18.1725C18.2392 18.3463 18.3791 18.4871 18.5517 18.4871H18.7996V18.9592H16.5861V18.4871H16.834C17.0066 18.4871 17.1465 18.3463 17.1465 18.1726V11.2224C17.1465 11.0487 17.0066 10.9079 16.834 10.9079ZM19.2104 9.84454H19.1121C19.112 9.84454 19.1118 9.84458 19.1117 9.84458C19.1116 9.84458 19.1114 9.84454 19.1113 9.84454H16.2736H16.2728H16.1755V9.31784H19.2104V9.84454Z"
                    fill="#52616B"
                  />
                </svg>
              </span>
              <div className="side-arrow mr-2">
                <div>Bank</div>
                <div>
                <span className={this.state.BankMenu?"menu-arrow ml-4 menu-arrow-rotated":"menu-arrow ml-4 "}>
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="#52616B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  </span>
                </div>
              </div>
            </Link>
          </li > */}
          <li className="nav-item ">
            <div className="nav-link menu " style={{ color: fill1 }}>
              <div
                onClick={
                  this.props.headReducer.headAccess
                    ? () => this.subOption("bank")
                    : this.comingSoon
                }
              >
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.7297 6.8296L14.4574 2.11995C14.3122 2.02592 14.1188 2.06822 14.0254 2.21428C13.9321 2.36038 13.974 2.555 14.1191 2.64903L21.2852 7.28983H19.6146L11.4572 2.00698C11.1795 1.82714 10.8206 1.82719 10.5428 2.00698L2.38536 7.28983H0.714814L10.9996 0.628762L12.4562 1.57205C12.6014 1.66603 12.7947 1.62382 12.8881 1.47772C12.9815 1.33162 12.9396 1.137 12.7944 1.04297L11.3378 0.0996812C11.1326 -0.0332271 10.8674 -0.0332271 10.6622 0.0996812L0.270302 6.8296C0.0490129 6.97294 -0.0498154 7.23996 0.0243917 7.4941C0.0985989 7.74824 0.325259 7.91899 0.5884 7.91899H2.16467V9.00328V9.95288C2.16467 10.2033 2.3411 10.4129 2.57536 10.4625V11.0162C2.57536 11.3034 2.80748 11.537 3.09279 11.537H3.13576V15.3911C3.13576 15.5649 3.27567 15.7057 3.44828 15.7057C3.62088 15.7057 3.76079 15.5649 3.76079 15.3911V11.2225C3.76079 11.0487 3.62088 10.9079 3.44828 10.9079H3.20043V10.4737H5.41388V10.9078H5.16604C4.99343 10.9078 4.85353 11.0486 4.85353 11.2224V18.1725C4.85353 18.3463 4.99343 18.4871 5.16604 18.4871H5.41388V18.9592H3.20043V18.4871H3.44828C3.62088 18.4871 3.76079 18.3463 3.76079 18.1725V17.3685C3.76079 17.1948 3.62088 17.0539 3.44828 17.0539C3.27567 17.0539 3.13576 17.1948 3.13576 17.3685V17.858H3.09279C2.80748 17.858 2.57536 18.0916 2.57536 18.3787V18.9324C2.34105 18.982 2.16467 19.1917 2.16467 19.442V20.077H1.05762C0.71215 20.077 0.431091 20.3599 0.431091 20.7077V21.3694C0.431091 21.7171 0.71215 22 1.05762 22H20.9424C21.2878 22 21.5689 21.7171 21.5689 21.3694V20.7077C21.5689 20.3599 21.2878 20.077 20.9424 20.077H19.8353V19.442C19.8353 19.1917 19.6589 18.982 19.4246 18.9324V18.3787C19.4246 18.0916 19.1925 17.858 18.9072 17.858H18.8642V11.5369H18.9072C19.1925 11.5369 19.4246 11.3033 19.4246 11.0161V10.4625C19.6589 10.4129 19.8353 10.2032 19.8353 9.9528V9.00319V7.91891H21.4116C21.6747 7.91891 21.9014 7.74815 21.9756 7.49402C22.0498 7.23996 21.951 6.97289 21.7297 6.8296ZM10.881 2.53606C10.9533 2.48922 11.0467 2.48926 11.119 2.53606L18.4595 7.28987H3.54053L10.881 2.53606ZM2.78969 7.91895H19.2103V8.68868H15.8629H12.83H9.17004H6.13709H2.78969V7.91895ZM12.7318 18.9325V18.3788C12.7318 18.0916 12.4997 17.858 12.2144 17.858H12.1714V11.537H12.2144C12.4997 11.537 12.7318 11.3034 12.7318 11.0162V10.4625C12.9661 10.4129 13.1425 10.2033 13.1425 9.95288V9.31784H15.5504V9.95288C15.5504 10.2033 15.7268 10.4129 15.9611 10.4625V11.0162C15.9611 11.3034 16.1932 11.537 16.4785 11.537H16.5215V17.858H16.4785C16.1932 17.858 15.9611 18.0916 15.9611 18.3788V18.9325C15.7268 18.9821 15.5504 19.1918 15.5504 19.4421V20.0771H13.1425V19.4421C13.1425 19.1918 12.9661 18.9821 12.7318 18.9325ZM6.03891 18.9325V18.3788C6.03891 18.0916 5.80679 17.858 5.52148 17.858H5.47851V11.537H5.52148C5.80679 11.537 6.03891 11.3034 6.03891 11.0162V10.4625C6.27317 10.4129 6.4496 10.2033 6.4496 9.95288V9.31784H8.85753V9.95288C8.85753 10.2033 9.03396 10.4129 9.26823 10.4625V11.0162C9.26823 11.3034 9.50035 11.537 9.78566 11.537H9.82863V17.858H9.78566C9.50035 17.858 9.26823 18.0916 9.26823 18.3788V18.9325C9.03396 18.9821 8.85753 19.1918 8.85753 19.4421V20.0771H6.4496V19.4421C6.4496 19.1918 6.27317 18.9821 6.03891 18.9325ZM11.8589 18.4871H12.1067V18.9592H9.8933V18.4871H10.1411C10.3137 18.4871 10.4537 18.3463 10.4537 18.1725V11.2224C10.4537 11.0487 10.3137 10.9078 10.1411 10.9078H9.8933V10.4737H12.1067V10.9078H11.8589C11.6863 10.9078 11.5464 11.0486 11.5464 11.2224V18.1725C11.5464 18.3463 11.6863 18.4871 11.8589 18.4871ZM9.58074 9.84454H9.57937H9.48256V9.31784H12.5174V9.84454H12.4193C12.419 9.84454 12.4188 9.84458 12.4186 9.84458C12.4184 9.84458 12.4181 9.84454 12.4179 9.84454H9.58074ZM9.48256 19.5728C9.51306 19.5828 9.54555 19.5884 9.57937 19.5884H12.4178C12.4527 19.5884 12.4861 19.5823 12.5174 19.5718V20.0771H9.48256V19.5728ZM2.88792 9.84454H2.78974V9.31784H5.82462V9.84454H5.82458H5.7264H2.88792ZM2.78969 19.5723C2.82059 19.5826 2.85354 19.5884 2.88788 19.5884H5.7264C5.76073 19.5884 5.79368 19.5826 5.82458 19.5723V20.0771H2.78969V19.5723ZM20.9439 20.7077L20.943 21.3709C20.943 21.3709 20.9429 21.3709 20.9424 21.3709L1.05612 21.3695L1.05762 20.7063L20.9439 20.7077ZM19.1112 19.5883C19.1459 19.5883 19.1791 19.5824 19.2103 19.5719V20.0771H16.1754V19.5726C16.2061 19.5827 16.2387 19.5883 16.2727 19.5883H19.1112ZM16.834 10.9079H16.5861V10.4737H18.7996V10.9078H18.5517C18.3791 10.9078 18.2392 11.0486 18.2392 11.2224V18.1725C18.2392 18.3463 18.3791 18.4871 18.5517 18.4871H18.7996V18.9592H16.5861V18.4871H16.834C17.0066 18.4871 17.1465 18.3463 17.1465 18.1726V11.2224C17.1465 11.0487 17.0066 10.9079 16.834 10.9079ZM19.2104 9.84454H19.1121C19.112 9.84454 19.1118 9.84458 19.1117 9.84458C19.1116 9.84458 19.1114 9.84454 19.1113 9.84454H16.2736H16.2728H16.1755V9.31784H19.2104V9.84454Z"
                      fill="#52616B"
                    />
                  </svg>
                </span>
                Bank
                <span
                  className={
                    this.state.BankMenu
                      ? "menu-arrow ml-4 menu-arrow-rotated"
                      : "menu-arrow ml-4 "
                  }
                >
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="#52616B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={
                  this.state.BankMenu
                    ? "submenu-container submenu-display"
                    : "submenu-container"
                }
              >
                <Link
                  to="/BankDetailbank"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Bank Details
                </Link>
              </div>
            </div>
          </li>
          {/* --------------------
          
          

          BILLLING
          
          
          ----------------------- */}
          <li className="nav-item ">
            <div className="nav-link menu " style={{ color: fill1 }}>
              <div
                onClick={
                  this.props.headReducer.headAccess
                    ? () => this.subOption("billing")
                    : this.comingSoon
                }
              >
                <span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.75">
                      <path
                        d="M16.5 2.29102C14.475 2.29102 12.8334 3.93264 12.8334 5.95767C12.8334 7.9827 14.475 9.62436 16.5 9.62436C18.5241 9.62209 20.1644 7.9818 20.1667 5.95771C20.1667 3.93264 18.5251 2.29102 16.5 2.29102ZM16.5 8.70771C14.9813 8.70771 13.75 7.47648 13.75 5.95771C13.75 4.43894 14.9813 3.20771 16.5 3.20771C18.0182 3.20921 19.2485 4.43954 19.25 5.95771C19.25 7.47648 18.0188 8.70771 16.5 8.70771Z"
                        fill="#52616B"
                      />
                      <path
                        d="M17.551 4.7168L16.0417 6.22607L15.4491 5.63345L14.801 6.28155L15.7177 7.1982C15.8036 7.28418 15.9202 7.33248 16.0417 7.33248C16.1633 7.33243 16.2798 7.28414 16.3657 7.1982L18.1991 5.36485L17.551 4.7168Z"
                        fill="#52616B"
                      />
                      <path
                        d="M15.5833 11.916H9.16663V12.8327H15.5833V11.916Z"
                        fill="#52616B"
                      />
                      <path
                        d="M10.0834 5.5H5.04172C3.27064 5.50202 1.83539 6.93726 1.83337 8.70835H2.75007C2.75157 7.44331 3.77672 6.4182 5.04172 6.4167H10.0834C10.5896 6.4167 11 6.82709 11 7.33335C11 7.83961 10.5896 8.25 10.0834 8.25H5.04172V9.16665H10.0834C11.0959 9.16665 11.9167 8.34586 11.9167 7.3333C11.9167 6.32075 11.0959 5.5 10.0834 5.5Z"
                        fill="#52616B"
                      />
                      <path
                        d="M0.458348 7.33398C0.205219 7.33398 0 7.53916 0 7.79229V8.25064H2.29165V7.33398H0.458348Z"
                        fill="#52616B"
                      />
                      <path
                        d="M21.0834 13.2923V19.709C21.0834 20.4684 20.4678 21.084 19.7084 21.084H8.7084C7.94901 21.084 7.3334 20.4684 7.3334 19.709V8.70898H6.41675V19.709C6.41825 20.974 7.4434 21.9991 8.7084 22.0006H19.7084C20.9734 21.9991 21.9985 20.974 22.0001 19.709V13.2923H21.0834Z"
                        fill="#52616B"
                      />
                      <path
                        d="M19.7084 0H10.5417C10.4201 4.29688e-05 10.3036 0.0483398 10.2177 0.134277L6.55103 3.80093L7.19912 4.44903L10.7315 0.916652H19.7084C20.4678 0.916652 21.0834 1.53227 21.0834 2.29165V8.7083H22.0001V2.29165C21.9985 1.02665 20.9734 0.00150391 19.7084 0Z"
                        fill="#52616B"
                      />
                      <path
                        d="M10.8659 0.134283C10.6869 -0.0447251 10.3967 -0.0447681 10.2177 0.134197L6.55103 3.80085C6.46504 3.88679 6.41675 4.00336 6.41675 4.12488V5.95822H7.3334V4.31463L10.0834 1.56463V3.20822C10.0834 3.46135 9.87818 3.66657 9.62505 3.66657H8.7084V4.58322H9.62505C10.3844 4.58322 11.0001 3.96761 11.0001 3.20822V0.458224C11 0.336708 10.9518 0.220177 10.8659 0.134283Z"
                        fill="#52616B"
                      />
                      <path
                        d="M2.75003 12.375H1.83337C1.83539 14.1461 3.27064 15.5813 5.04172 15.5833V14.6667C3.77668 14.6651 2.75153 13.64 2.75003 12.375Z"
                        fill="#52616B"
                      />
                      <path
                        d="M6.87497 14.666H5.04163V15.5827H6.87497V14.666Z"
                        fill="#52616B"
                      />
                      <path
                        d="M0 12.834V13.2923C0 13.5454 0.205219 13.7506 0.458348 13.7506H2.2917V12.834H0Z"
                        fill="#52616B"
                      />
                      <path
                        d="M21.6021 10.0232C21.0648 9.5105 20.2195 9.5105 19.6822 10.0232L13.3228 16.3826C13.1439 16.5615 13.1439 16.8517 13.3228 17.0307L14.5947 18.3025C14.6806 18.3885 14.7972 18.4368 14.9187 18.4368C15.0403 18.4368 15.1568 18.3885 15.2427 18.3025L21.6021 11.9432C21.6023 11.943 21.6026 11.9427 21.6028 11.9425C22.1326 11.4122 22.1323 10.553 21.6021 10.0232ZM20.9541 11.2951L14.9187 17.3304L14.295 16.7066L20.3303 10.6713C20.5048 10.5045 20.7796 10.5045 20.9541 10.6713C20.9542 10.6713 20.9543 10.6714 20.9543 10.6715C21.1264 10.8438 21.1263 11.1229 20.9541 11.2951Z"
                        fill="#52616B"
                      />
                      <path
                        d="M14.7124 17.5684L13.3998 18.2242L14.057 16.9102L13.2371 16.5L11.9647 19.0451C11.9329 19.1088 11.9163 19.179 11.9164 19.2502C11.9165 19.5033 12.1218 19.7084 12.3749 19.7083C12.4458 19.7089 12.5159 19.6933 12.5798 19.6625L15.1249 18.3883L14.7124 17.5684Z"
                        fill="#52616B"
                      />
                      <path
                        d="M18.741 11.6136L18.0928 12.2617L19.3643 13.5336L20.0126 12.8855L18.741 11.6136Z"
                        fill="#52616B"
                      />
                      <path
                        d="M12.375 18.791H9.16663V19.7077H12.375V18.791Z"
                        fill="#52616B"
                      />
                      <path
                        d="M11.9166 16.5H9.16663V17.4167H11.9166V16.5Z"
                        fill="#52616B"
                      />
                      <path
                        d="M13.2916 14.209H9.16663V15.1256H13.2916V14.209Z"
                        fill="#52616B"
                      />
                      <path
                        d="M19.25 18.791H15.125V19.7077H19.25V18.791Z"
                        fill="#52616B"
                      />
                      <path
                        d="M19.25 16.5H17.4166V17.4167H19.25V16.5Z"
                        fill="#52616B"
                      />
                    </g>
                  </svg>
                </span>
                Billing
                <span
                  className={
                    this.state.Abilling
                      ? "menu-arrow ml-4 menu-arrow-rotated"
                      : "menu-arrow ml-4 "
                  }
                >
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="#52616B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={
                  this.state.Abilling
                    ? "submenu-container submenu-display"
                    : "submenu-container"
                }
              >
                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Overview
                </Link>

                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Reports
                </Link>
                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Budgets & <br />
                  Alerts
                </Link>
                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Billing Export
                </Link>
                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Transactions
                </Link>
                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Payment <br />
                  Settings
                </Link>
                <Link
                  to="/GetStarted"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Payment <br />
                  Method
                </Link>
              </div>
            </div>
          </li>

          {/* -----
          
          EXTRAS
          
          
          ------- */}
          <li className="nav-item " style={{ display: "none" }}>
            <div className="nav-link menu " style={{ color: fill1 }}>
              <div
                onClick={
                  this.props.headReducer.headAccess
                    ? () => this.subOption("Aextras")
                    : this.comingSoon
                }
              >
                EXTRAS
                <span
                  className={
                    this.state.Aextras
                      ? "menu-arrow ml-4 menu-arrow-rotated"
                      : "menu-arrow ml-4 "
                  }
                >
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="#52616B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={
                  this.state.Aextras
                    ? "submenu-container submenu-display"
                    : "submenu-container"
                }
              >
                {/* <Link to="/kyc-overview" exact  className="nav-link submenu menu activeClass w-100">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                          </div>KYC OVERVIEW</Link> */}
                {/* <Link to="/GetStarted" exact  className="nav-link submenu menu activeClass w-100">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                          </div>Get Started</Link> */}
                {/* <Link to="/BusinessInformation" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                          </div>Business Information</Link> */}
                {/* <Link to="/AccountHolder" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                            width="7"
                            height="10"
                            viewBox="0 0 7 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>Account Holder</Link> */}
                {/* <Link to="/Bank_AddCard" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                          </div>Bank_AddCard</Link> */}
                {/* <Link to="/BankAccPersl" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>BankAccPersl</Link> */}
                {/* <Link to="/BankDetailbank" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>BankDetailbank</Link> */}
                {/* <Link to="/Bank_ConfSucc" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </svg>
                        </div>Bank_ConfSucc</Link> */}
                {/* <Link to="/Bank_ConfBnk" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>Bank_ConfBnk</Link> */}
                {/* <Link to="/Bank_ConfBrclys" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>Bank_ConfBrclys</Link> */}
                {/* <Link to="/RemBankAcc" exact className="nav-link submenu menu activeClass">
                          <div>  
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                          </div>RemBankAcc</Link> */}
                {/* <Link to="/Business-Documentation" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>Business Documentation</Link> */}
                {/* <Link to="/Business-profile" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>Business Profile</Link> */}
                {/* <Link to="/Solution" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>Solution</Link> */}
                {/* <Link to="/AccountSetup" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>AccountSetup</Link> */}

                {/* <Link to="/BussinessName" exact className="nav-link submenu menu activeClass">
                          <div>  
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>BussinessName</Link> */}
                {/* <Link to="/CustomerIdentification" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>CustomerIdentification</Link> */}
                {/* <Link to="/IncomeAsset" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>IncomeAsset</Link> */}
                <Link
                  to="/PersonalDetail"
                  exact
                  className="nav-link submenu menu activeClass"
                >
                  <div>
                    <svg
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="#52616B"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  PersonalDetail
                </Link>
                {/* <Link to="/LetterofAuthorization" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>LetterofAuthorization</Link> */}
                {/* <Link to="/IdentityInterruption" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                        </div>IdentityInterruption</Link> */}
                {/* <Link to="/TemporaryLimitation" exact className="nav-link submenu menu activeClass">
                          <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                          </div>TemporaryLimitation</Link> */}
                <Link
                  to="/LifRecLim"
                  exact
                  className="nav-link submenu menu activeClass"
                >
                  <div>
                    <svg
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="#52616B"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  LifRecLim
                </Link>
                <Link
                  to="/PopUp"
                  exact
                  className="nav-link submenu menu activeClass"
                >
                  <div>
                    <svg
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="#52616B"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  PopUp
                </Link>
                <Link
                  to="/PlutoPost"
                  exact
                  className="nav-link submenu menu activeClass"
                >
                  <div>
                    <svg
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="#52616B"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  PlutoPost
                </Link>
                {/* <Link to="/SP_PopUp_Head" exact className="nav-link submenu menu activeClass">
                        <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </svg>
                        </div>SP_PopUp_Head</Link> */}
                <Link
                  to="/RequestReview"
                  exact
                  className="nav-link submenu menu activeClass"
                >
                  <div>
                    <svg
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L5 5L1 1"
                        stroke="#52616B"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  RequestReview
                </Link>
                {/* <Link to="/SendReceiveTokenSuccess" exact className="nav-link submenu menu activeClass">
                       <div>
                            <svg
                              width="7"
                              height="10"
                              viewBox="0 0 7 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                              d="M1 9L5 5L1 1"
                              stroke="#52616B"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            </svg>
                       </div>SendReceiveTokenSuccess</Link> */}
              </div>{" "}
            </div>
          </li>
          {/* ------------
                          
                          
                       SETTINGS   
                          
                          
                          ----------------- */}

           <li
            className="nav-item "
            onClick={
              this.props.headReducer.headAccess ? this.onsettingpr : this.comingSoon
            }
          >
            <div className="nav-link menu ">
              <div
                onClick={
                  this.props.headReducer.headAccess
                    ? () => this.subOption("setting")
                    : null
                }
                style={{ color: fill1 }}
              >
                <span>
                   <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.867 8.5554H20.0449C19.8351 7.77645 19.5267 7.03091 19.1242 6.33222L19.7051 5.75126C19.919 5.53738 20.0367 5.25261 20.0367 4.95032C20.0367 4.64762 19.919 4.36325 19.7051 4.14896L17.8502 2.29407C17.4225 1.86671 16.6765 1.86589 16.2479 2.29407L15.667 2.87502C14.9679 2.47292 14.2227 2.16452 13.4442 1.9547V1.13257C13.4442 0.508028 12.9362 0 12.3116 0H9.68797C9.06343 0 8.5554 0.508028 8.5554 1.13257V1.9547C7.77686 2.16452 7.03172 2.47292 6.33222 2.87543L5.75126 2.29448C5.32309 1.86589 4.57673 1.86671 4.14896 2.29448L2.29407 4.14937C2.08018 4.36325 1.96245 4.64803 1.96245 4.95072C1.96245 5.25301 2.08018 5.53738 2.29407 5.75167L2.87502 6.33262C2.47292 7.03091 2.16411 7.77645 1.9547 8.5554H1.13257C0.508028 8.5554 0 9.06343 0 9.68797V12.3112C0 12.9362 0.508028 13.4442 1.13257 13.4442H1.9547C2.16452 14.2227 2.47292 14.9679 2.87543 15.6674L2.29448 16.2483C2.08059 16.4622 1.96285 16.747 1.96285 17.0493C1.96285 17.352 2.08059 17.6363 2.29448 17.8506L4.14937 19.7055C4.57714 20.1337 5.32349 20.1341 5.75167 19.7055L6.33262 19.1246C7.03213 19.5267 7.77726 19.8355 8.5558 20.0453V20.8674C8.5558 21.492 9.06383 22 9.68838 22H12.3116C12.9362 22 13.4442 21.492 13.4442 20.8674V20.0453C14.2227 19.8355 14.9679 19.5271 15.6674 19.1246L16.2483 19.7055C16.6769 20.1341 17.4225 20.1333 17.8506 19.7055L19.7055 17.8506C19.9194 17.6367 20.0371 17.352 20.0371 17.0493C20.0371 16.747 19.9194 16.4626 19.7055 16.2483L19.1246 15.6674C19.5267 14.9679 19.8355 14.2227 20.0453 13.4442H20.8674C21.492 13.4442 22 12.9362 22 12.3116V9.68797C21.9996 9.06343 21.4916 8.5554 20.867 8.5554ZM21.1848 12.3116C21.1848 12.4868 21.0422 12.6294 20.867 12.6294H19.4036L19.3303 12.9443C19.1181 13.8557 18.7604 14.7206 18.2658 15.5154L18.0947 15.79L19.1291 16.8244C19.2533 16.9487 19.2533 17.1503 19.1291 17.2742L17.2742 19.1291C17.1503 19.2529 16.9487 19.2537 16.8244 19.1291L15.79 18.0947L15.5154 18.2658C14.721 18.7604 13.8561 19.1185 12.9443 19.3303L12.6294 19.4036V20.867C12.6294 21.0422 12.4868 21.1848 12.3116 21.1848H9.68797C9.51279 21.1848 9.3702 21.0422 9.3702 20.867V19.4036L9.05528 19.3303C8.14392 19.1181 7.27901 18.7604 6.48418 18.2658L6.20959 18.0947L5.1752 19.1291C5.05054 19.2537 4.84887 19.2529 4.72543 19.1291L2.87054 17.2742C2.74628 17.1499 2.74628 16.9482 2.87054 16.8244L3.90493 15.79L3.73382 15.5154C3.23924 14.721 2.88113 13.8561 2.66928 12.9443L2.59595 12.6294H1.13257C0.95739 12.6294 0.8148 12.4868 0.8148 12.3116V9.68797C0.8148 9.51279 0.95739 9.3702 1.13257 9.3702H2.59595L2.66928 9.05528C2.88154 8.14352 3.23924 7.27861 3.73382 6.48418L3.90493 6.20959L2.87054 5.1752C2.74628 5.05094 2.74628 4.84928 2.87054 4.72543L4.72543 2.87054C4.84928 2.74669 5.05094 2.74588 5.1752 2.87054L6.20959 3.90493L6.48418 3.73382C7.27861 3.23924 8.14352 2.88113 9.05528 2.66928L9.3702 2.59595V1.13257C9.3702 0.95739 9.51279 0.8148 9.68797 0.8148H12.3112C12.4868 0.8148 12.6294 0.95739 12.6294 1.13257V2.59595L12.9443 2.66928C13.8557 2.88154 14.7206 3.23924 15.5154 3.73382L15.79 3.90493L16.8244 2.87054C16.9491 2.74588 17.1507 2.74669 17.2742 2.87054L19.1291 4.72543C19.2533 4.84969 19.2533 5.05135 19.1291 5.1752L18.0947 6.20959L18.2658 6.48418C18.7604 7.2782 19.1185 8.14311 19.3303 9.05528L19.4036 9.3702H20.867C21.0422 9.3702 21.1848 9.51279 21.1848 9.68797V12.3116Z"
                      fill={fill1}
                    />
                  </svg>
                </span>
                {/* <span style={{color:fill1}}></span> */}
                SETTING
                <span
                  className={
                    this.state.settingpr
                      ? "menu-arrow ml-4 menu-arrow-rotated"
                      : "menu-arrow ml-4 "
                  }
                >
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="#52616B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div
                className={
                  this.state.settingpr
                    ? "submenu-container submenu-display"
                    : "submenu-container"
                }
              >
                <Link
                  to="/kyc-individual-profile"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Your Profile
                </Link>
                <Link
                  to="#"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Company Profile
                </Link>
                <Link
                  to="#"
                  exact
                  className="nav-link submenu menu active-menu activeClass w-100"
                >
                  Account
                </Link>
                </div>
                </div>
</li>



          {/* -------------------


SUPPORT

----------------- */}

          <li onClick={this.comingSoon}>
            <a href="#">
              <span>
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4384 17.0467L15.1653 16.3042L14.3492 14.7045C15.0844 13.9711 15.5948 13.0007 15.767 11.9885L15.8687 11.3906H16.7391C17.5303 11.3906 18.1739 10.7598 18.1739 9.98438V7.03125C18.1739 3.15422 14.9557 0 11 0C7.03416 0 3.82609 3.14517 3.82609 7.03125V9.98438C3.82609 10.5954 4.22596 11.1165 4.78261 11.31V11.8594C4.78261 12.6348 5.42625 13.2656 6.21739 13.2656H6.6374C6.84473 13.707 7.11308 14.1159 7.43963 14.4832C7.50736 14.5595 7.578 14.6334 7.65036 14.7054L6.83473 16.3042L4.56151 17.0467C1.9184 17.9106 0 20.6377 0 23.5312C0 23.7901 0.214117 24 0.478261 24H21.5217C21.7858 24 22 23.7901 22 23.5312C22 20.6377 20.0816 17.9106 17.4384 17.0467ZM17.2174 9.98438C17.2174 10.2428 17.0028 10.4531 16.7391 10.4531H16.0092C16.1308 9.53016 16.2118 8.54798 16.2444 7.58063C16.2453 7.55334 16.2461 7.52681 16.247 7.5H17.2174V9.98438ZM5.26087 10.4531C4.99716 10.4531 4.78261 10.2428 4.78261 9.98438V7.5H5.75338C5.75496 7.54889 5.75663 7.59802 5.7585 7.64747C5.75855 7.64916 5.75864 7.6508 5.75869 7.65248C5.75869 7.65263 5.75869 7.65277 5.75869 7.65291C5.79217 8.59378 5.87213 9.55045 5.99093 10.4531H5.26087V10.4531ZM6.21739 12.3281C5.95368 12.3281 5.73913 12.1178 5.73913 11.8594V11.3906H6.13121L6.23298 11.9887C6.2524 12.1024 6.27627 12.2156 6.30386 12.3281H6.21739ZM5.73994 6.5625H4.80078C5.04302 3.42089 7.71803 0.9375 11 0.9375C14.2674 0.9375 16.9542 3.42056 17.1992 6.5625H16.2601C16.2257 3.97373 14.0748 1.875 11.4281 1.875H10.572C7.92536 1.875 5.77433 3.97373 5.73994 6.5625ZM10.572 2.8125H11.428C13.5711 2.8125 15.3056 4.53052 15.3043 6.62859C15.3043 6.77611 15.3032 6.90455 15.3006 7.02141C15.3006 7.02291 15.3006 7.02445 15.3006 7.026L14.7024 6.94223C13.0772 6.7148 11.5428 5.96283 10.3817 4.8248C10.2919 4.73691 10.1703 4.6875 10.0435 4.6875C8.75906 4.6875 7.52955 5.26106 6.71679 6.23006C6.91709 4.32136 8.5634 2.8125 10.572 2.8125ZM7.29539 12.3281C7.05597 11.5475 6.78203 9.25064 6.72148 7.77877L7.36517 6.93755C7.95635 6.16523 8.87609 5.68537 9.85447 5.6303C11.1418 6.83105 12.8072 7.62398 14.5671 7.87027L15.2712 7.96889C15.2241 8.94788 15.128 9.93028 14.9902 10.8338C14.9901 10.8341 14.9901 10.8344 14.99 10.8347C14.9462 11.1252 14.9117 11.3122 14.8235 11.8343C14.5702 13.3233 13.4366 14.6698 11.9402 15.0365C11.3244 15.1872 10.6755 15.1871 10.06 15.0365C9.12565 14.8075 8.26889 14.1739 7.71597 13.2656H8.69096C8.88838 13.8112 9.41997 14.2031 10.0435 14.2031H11C11.7927 14.2031 12.4348 13.5739 12.4348 12.7969C12.4348 12.0215 11.7911 11.3906 11 11.3906H10.0435C9.4061 11.3906 8.88236 11.7941 8.69014 12.3281H7.29539ZM10.0033 15.9851C10.3313 16.0529 10.6657 16.0875 11 16.0875C11.2617 16.0875 11.5234 16.066 11.7821 16.0244L10.937 16.9004L10.0033 15.9851ZM10.2795 17.5818L8.76255 19.1541C8.34493 18.3706 7.9861 17.5553 7.69177 16.7205L8.26143 15.6038L10.2795 17.5818ZM13.6575 15.445L14.3081 16.7205C14.0133 17.5566 13.6544 18.3723 13.2372 19.1548L11.6136 17.5635L13.6575 15.445ZM9.56522 12.7969C9.56522 12.5381 9.77938 12.3281 10.0435 12.3281H11C11.2637 12.3281 11.4783 12.5384 11.4783 12.7969C11.4783 13.0557 11.264 13.2656 11 13.2656H10.0435C9.77977 13.2656 9.56522 13.0553 9.56522 12.7969ZM0.975652 23.0625C1.16519 20.7404 2.74197 18.6297 4.86401 17.9361L6.8772 17.2785C7.24603 18.2782 7.70297 19.2497 8.23847 20.1726C8.23938 20.1742 8.24024 20.1758 8.24115 20.1773C8.24115 20.1774 8.2412 20.1774 8.2412 20.1774C8.63246 20.8519 9.07285 21.511 9.5503 22.1368L10.1387 23.0625H0.975652ZM11 22.6447L10.3514 21.624C10.3441 21.6126 10.3364 21.6015 10.3281 21.5907C9.94084 21.0844 9.57957 20.5548 9.25052 20.0128L10.9561 18.245L12.7534 20.0064C12.4221 20.5524 12.0596 21.0841 11.672 21.5906C11.6485 21.6212 11.6818 21.573 11 22.6447ZM11.8613 23.0625L12.4497 22.1368C12.9292 21.5087 13.3727 20.8443 13.7679 20.1619C13.7703 20.1577 13.7726 20.1535 13.775 20.1494C13.7753 20.1489 13.7755 20.1484 13.7758 20.1479C14.3045 19.2338 14.7567 18.2707 15.1228 17.2785L17.1359 17.9361C19.258 18.6297 20.8348 20.7404 21.0243 23.0625H11.8613Z"
                    fill="#52616B"
                  />
                </svg>
              </span>
              Support
            </a>
          </li>
        </ul>
      </div>
    );
    return (
      <div className="sideMenu">
        <div className="my-sidebar" role="button" onClick={this.handleChange}>
          {menu}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  popUp: (payload) => dispatch(popUp(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));

import React from "react";

import ProfPic from "./images/profile-photo.png";
import Pencil from "./images/pencil.png";
import Tick from "./images/approved-tick.png";
import classnames from "classnames";

import Disable from "./images/disabled.png";
import Alert from "./images/alert-d.png";
import Cancel from "./images/red-cross.png";
import Warning from "./warning";
import "./individual.css";
import "./responsive.css";
class IndividualProfile extends React.Component {
  state = {
    image: "",
    warn: true,
    imgbool: false,
    hoverColor: "white",
    accountInfoedit: false,
    addressInfoEdit: false,
    account: {
      dob: "1996/10/23",
      phno: "+446333556333",
      country: "UK",
      email: "ted@yopmail.com",
    },
    personal: {
      firstname: "Robert",
      surname: "Rose",
    },
    addressValues: {
      address1: "Down Town Station",
      address2: "15 Neutwache Frankfurt",
      country: "UK",
      postalcode: "123",
      city: "London",
    },
    walletEmail: "",
    emailmatch: false,
    personalInfoEdit: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        warn: false,
      });
    }, 8000);
  }
  changeAccountEdit = (e) => {
    e.preventDefault();
    this.setState({
      accountInfoedit: !this.state.accountInfoedit,
    });
  };
  handleChange = (e) => {
    this.setState({
      imgbool: true,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };
  personalInfoChange = (e) => {
    var obj = { ...this.state.personal };
    obj[e.target.name] = e.target.value;
    this.setState({
      personal: obj,
    });
  };
  accountInfoChange = (e) => {
    var obj = { ...this.state.account };
    obj[e.target.name] = e.target.value;
    this.setState({
      account: obj,
    });
  };
  onChangeWalletMail = (e) => {
    if (this.state.account.email === e.target.value) {
      this.setState({
        emailmatch: true,
      });
    } else {
      this.setState({
        emailmatch: false,
      });
    }
  };
  EditandSavePersonalInfo = (e) => {
    e.preventDefault();
    this.setState({
      personalInfoEdit: !this.state.personalInfoEdit,
    });
  };
  EditandSaveAddressInfo = (e) => {
    e.preventDefault();
    this.setState({
      addressInfoEdit: !this.state.addressInfoEdit,
    });
  };
  ChangeAddressValue = (e) => {
    var obj = { ...this.state.addressValues };
    obj[e.target.name] = e.target.value;
    this.setState({
      addressValues: obj,
    });
  };

  render() {
    return (
      <div className="container-fluid dashboard-content">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="content-head pt-3 pb-0 col-12">
                <div class="left-content">
                  <div class="row">
                    <h4 class="mb-0">
                      <a href="#">Individual KYC &nbsp;</a>{" "}
                      <span style={{ color: "orange", fontSize: 14 }}>
                        {" "}
                        >&nbsp;&nbsp;{" "}
                      </span>
                      <span style={{ color: "orange", fontSize: 14 }}>
                        Get Started
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pl-4 pr-4">
          <div class="row">
            <div class="col-lg-6 mt-4 p-0">
              <div class="row">
                <div class="col-lg-12">
                  <h2 class="kyc-started-head-title">Individual profile</h2>
                  <div class="kyc-started-profile-section">
                    <div class="clearfix">
                      <div class="float-left">
                        <h3 class="prof-pic">Profile Picture</h3>
                      </div>
                    </div>
                    <div class="clearfix d-flex align-items-center mb-4">
                      <div class="float-left position-relative">
                        <img
                          src={this.state.imgbool ? this.state.image : ProfPic}
                          id="blah"
                          alt="your image"
                          class="img-fluid kyc-started-upload-pic"
                        />
                        <div class="kyc-started-upload-btn-wrapper">
                          <button class="kyc-started-upload-btn">
                            <img src={Pencil} alt="icon" />
                          </button>
                          <input
                            type="file"
                            onChange={(e) => this.handleChange(e)}
                          />{" "}
                        </div>
                      </div>
                      <div class="float-left pl-4">
                        <h3 class="kyc-started-fs-16 m-0">Upload your photo</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12 mt-4">
                  <h2 class="kyc-started-head-title">Account Information</h2>
                  <div class="kyc-started-profile-section">
                    <div class="clearfix mb-4">
                      <div class="kyc-started-businss-txt float-left">
                        I am an <span>Individual </span>
                      </div>
                      <div class="kyc-started-edit-details float-right">
                        <a href="#" onClick={(e) => this.changeAccountEdit(e)}>
                          {this.state.accountInfoedit ? "SAVE" : "EDIT"}
                        </a>
                      </div>
                    </div>
                    {this.state.accountInfoedit ? (
                      <div class="kyc-started-user-details-editing">
                        <ul class="mb-0">
                          <li>
                            <div class="kyc-started-details-edit-left">
                              Date of Birth{" "}
                            </div>
                            <div class="kyc-started-user-details-edit">
                              <div class="dob-date-pick">
                                <input
                                  type="date"
                                  value={this.state.account.dob}
                                  name="dob"
                                  onChange={(e) => this.accountInfoChange(e)}
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="kyc-started-details-edit-left">
                              Country
                            </div>
                            <div class="kyc-started-user-details-edit">
                              <select
                                id="sel1"
                                name="country"
                                onChange={(e) => this.accountInfoChange(e)}
                              >
                                <option>Country</option>
                                <option>Russia</option>
                                <option>Germany</option>
                                <option>U.K.</option>
                                <option>France</option>
                                <option>Italy</option>
                                <option>Spain</option>
                                <option>Ukraine </option>
                                <option>Poland </option>
                                <option>Romania </option>
                                <option>Netherlands </option>
                                <option>Belgium </option>
                                <option>Greece </option>
                                <option>Czech Republic </option>
                                <option>Portugal</option>
                                <option>Sweden </option>
                                <option>Hungary </option>
                                <option>Belarus </option>
                                <option>Austria </option>
                                <option>Serbia </option>
                                <option>Switzerland </option>
                                <option>Bulgaria</option>
                                <option>Denmark </option>
                                <option>Finland </option>
                                <option>Slovakia</option>
                                <option>Norway </option>
                                <option>Ireland </option>
                                <option>Croatia </option>
                                <option>Moldova </option>
                                <option>Bosnia &amp; Herzegovina</option>
                                <option>Albania </option>
                                <option>Lithuania</option>
                                <option>TFYR Macedonia</option>
                                <option>Slovenia</option>
                                <option>Latvia </option>
                                <option>Estonia </option>
                                <option>Montenegro </option>
                                <option>Luxembourg </option>
                                <option>Malta</option>
                                <option>Iceland </option>
                                <option>Andorra </option>
                                <option>Monaco </option>
                                <option>Liechtenstein/option&gt;</option>
                                <option>San Marino</option>
                                <option>Holy See</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div class="kyc-started-details-edit-left">
                              Email
                            </div>
                            <div class="kyc-started-user-details-edit">
                              <input
                                type="email"
                                name="email"
                                onChange={(e) => this.accountInfoChange(e)}
                              />
                            </div>
                          </li>
                          <li>
                            <div class="kyc-started-details-edit-left">
                              Phone Number{" "}
                            </div>
                            <div class="kyc-started-user-details-edit">
                              <div class="mr-3 user-no-edit">
                                <input
                                  type="tel"
                                  placeholder="+49 0755******678"
                                  name="phno"
                                  onChange={(e) => this.accountInfoChange(e)}
                                />
                              </div>
                              <div class="number-edit-txt">
                                Update New Phone Number{" "}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div class="kyc-started-user-details">
                        <ul class="mb-0">
                          <li>
                            <div class="kyc-started-details-left">
                              Date of Birth{" "}
                            </div>
                            <div>{this.state.account.dob}</div>
                          </li>
                          <li>
                            <div class="kyc-started-details-left">Country</div>
                            <div>{this.state.account.country}</div>
                          </li>
                          <li>
                            <div class="kyc-started-details-left">Email</div>
                            <div class="d-flex">
                              {this.state.account.email}{" "}
                            </div>
                          </li>
                          <li>
                            <div class="kyc-started-details-left">
                              Phone Number{" "}
                            </div>
                            <div class="d-flex flex-wrap justify-content-end">
                              <div class="mr-md-5">
                                {this.state.account.phno}
                              </div>
                              <div class="cyan-color">
                                <img src={Tick} alt="verified" />{" "}
                                &nbsp;&nbsp;Verified{" "}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div class="kyc-started-btnLightBlack mt-5">
                    <div class="kyc-started-go-sub-cls">
                      <a href="/kyc-req-doc">
                        <button type="submit" class="b-kycapply-new mr-3">
                          CONTINUE
                        </button>
                      </a>
                      <span>
                        <a href="#">Save Profile</a>
                      </span>
                      {this.state.accountInfoedit ||
                      this.state.addressInfoEdit ||
                      this.state.personalInfoEdit ? (
                        <span>
                          <img src={Disable} alt="alert" />
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-4 p-0">
              <div class="row">
                <div class="col-lg-12">
                  <h2 class="kyc-started-head-title">PLUTOCLEAR Wallet</h2>
                  <div class="kyc-started-profile-section pb-5">
                    <div class="clearfix">
                      <p class="wallet-txt">
                        Enter email here to link it to wallets
                      </p>
                    </div>
                    <div class="clearfix dblock">
                      {this.state.emailmatch ? (
                        <div class="position-relative float-left correctinput w-100">
                          <input
                            type="email"
                            name=""
                            id="textEmail"
                            placeholder="r.rose@gmail.com"
                            onChange={(e) => this.onChangeWalletMail(e)}
                          />
                          <div class="kyc-started-correct-sign">
                            <img src={Tick} alt="icon" />
                          </div>
                        </div>
                      ) : (
                        <div class="position-relative float-left mailinput">
                          <input
                            type="email"
                            name=""
                            id="textEmail"
                            placeholder="r.rose@gmail.com"
                            onChange={(e) => this.onChangeWalletMail(e)}
                          />
                          <div class="kyc-started-correct-sign">
                            <img src={Cancel} alt="icon" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div class="col-lg-12 mt-4">
                  <h2 class="kyc-started-head-title">Personal Information </h2>
                  <div class="kyc-started-profile-section">
                    <div class="kyc-started-ac-info position-relative">
                      {this.state.personalInfoEdit ? (
                        <ul class="mb-0">
                          <li>
                            <div>First name</div>
                            <div class="kyc-started-user-details-edit">
                              <input
                                type="text"
                                name="firstname"
                                onChange={(e) => this.personalInfoChange(e)}
                              />
                            </div>
                          </li>
                          <li>
                            <div>Surname</div>
                            <div class="kyc-started-user-details-edit">
                              <input
                                type="text"
                                name="surname"
                                onChange={(e) => this.personalInfoChange(e)}
                              />
                            </div>
                          </li>
                        </ul>
                      ) : (
                        <ul class="mb-0">
                          <li>
                            <div>First name</div>
                            <div>{this.state.personal.firstname} </div>
                          </li>
                          <li>
                            <div>Surname</div>
                            <div>{this.state.personal.surname}</div>
                          </li>
                        </ul>
                      )}

                      <div class="kyc-started-ac-edit-details float-right">
                        <a
                          href="#"
                          onClick={(e) => this.EditandSavePersonalInfo(e)}
                        >
                          {this.state.personalInfoEdit ? "SAVE" : "EDIT"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 mt-4">
                  <h2 class="kyc-started-head-title">Address information</h2>
                  <div class="kyc-started-profile-section pl-2">
                    <div class="clearfix">
                      <div class="kyc-started-edit-details float-right">
                        <a
                          href="#"
                          onClick={(e) => this.EditandSaveAddressInfo(e)}
                        >
                          {this.state.addressInfoEdit ? "SAVE" : "EDIT"}
                        </a>
                      </div>
                    </div>
                    <div class="kyc-started-ac-info position-relative">
                      {this.state.addressInfoEdit ? (
                        <div class="row">
                          <div class="col-md-12">
                            <div class="kyc-started-form-input">
                              <input
                                type="text"
                                name="address1"
                                id="textE"
                                placeholder="Address 1"
                                onChange={(e) => this.ChangeAddressValue(e)}
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="kyc-started-form-input">
                              <input
                                type="text"
                                name="address2"
                                id="textE"
                                placeholder="Address 2"
                                onChange={(e) => this.ChangeAddressValue(e)}
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="kyc-started-form-input">
                              <select
                                id="sel1"
                                name="country"
                                onChange={(e) => this.ChangeAddressValue(e)}
                              >
                                <option>Country</option>
                                <option>Russia</option>
                                <option>Germany</option>
                                <option>U.K.</option>
                                <option>France</option>
                                <option>Italy</option>
                                <option>Spain</option>
                                <option>Ukraine </option>
                                <option>Poland </option>
                                <option>Romania </option>
                                <option>Netherlands </option>
                                <option>Belgium </option>
                                <option>Greece </option>
                                <option>Czech Republic </option>
                                <option>Portugal</option>
                                <option>Sweden </option>
                                <option>Hungary </option>
                                <option>Belarus </option>
                                <option>Austria </option>
                                <option>Serbia </option>
                                <option>Switzerland </option>
                                <option>Bulgaria</option>
                                <option>Denmark </option>
                                <option>Finland </option>
                                <option>Slovakia</option>
                                <option>Norway </option>
                                <option>Ireland </option>
                                <option>Croatia </option>
                                <option>Moldova </option>
                                <option>Bosnia &amp; Herzegovina</option>
                                <option>Albania </option>
                                <option>Lithuania</option>
                                <option>TFYR Macedonia</option>
                                <option>Slovenia</option>
                                <option>Latvia </option>
                                <option>Estonia </option>
                                <option>Montenegro </option>
                                <option>Luxembourg </option>
                                <option>Malta</option>
                                <option>Iceland </option>
                                <option>Andorra </option>
                                <option>Monaco </option>
                                <option>Liechtenstein/option&gt;</option>
                                <option>San Marino</option>
                                <option>Holy See</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="kyc-started-form-input">
                              <input
                                type="text"
                                name=""
                                id="textE"
                                placeholder="City/Town"
                                name="city"
                                onChange={(e) => this.ChangeAddressValue(e)}
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="kyc-started-form-input">
                              <input
                                type="text"
                                name=""
                                id="textE"
                                placeholder="Postal code"
                                name="postalcode"
                                onChange={(e) => this.ChangeAddressValue(e)}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <ul class="mb-0">
                          <li>
                            <div>Address 1</div>
                            <div> {this.state.addressValues.address1} </div>
                          </li>
                          <li>
                            <div>Address 2</div>
                            <div>{this.state.addressValues.address2}</div>
                          </li>
                          <li>
                            <div>City/Town</div>
                            <div>{this.state.addressValues.city}</div>
                          </li>
                          <li>
                            <div>Country</div>
                            <div>{this.state.addressValues.country}</div>
                          </li>
                          <li>
                            <div>Postal code</div>
                            <div>{this.state.addressValues.postalcode}</div>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pl-4 pr-4 mt-5">
            {this.state.warn ? (
              <Warning message="Your account is disabled" />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualProfile;

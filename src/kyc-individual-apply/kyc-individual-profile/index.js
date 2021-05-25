import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import $ from "jquery";
import "./css/responsive.css";
import "./css/setting.css";
import AlertBox from "../../utils/AlertBox.js";

class IndividualProfile extends React.Component {
  state = {
    KYCStatus: "approved",
    toggleEmailBtn: false,
    toggleEmailAddress: false,
    toggleSecondaryEmail: false,
    phoneVerify: true,
    accountID: "approved",
    togglePhoneNoBtn: false,
    togglePhoneNo: false,
    toggleOTPBtn: false,
    uploadProfileModel: false,
    saveDocModal: false,
    image: "",
    attachment: null,
    fileName: "",
  };

  handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    this.setState({
      [e.target.name]: e.target.files[0],
      fileName: e.target.files[0].name,
    });
  };

  deleteFile = () => {
    this.setState({
      image: "",
      attachment: null,
      fileName: "",
    });
  };

  upLoadProfileModal = () => {
    return (
      <div
        id="uploaddoc"
        className={
          this.state.uploadProfileModel
            ? "modal fade upload-flies open"
            : "d-none"
        }
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="text-center modal-content">
            <span className="close-btn text-right">
              <img
                src="./images/close-btn.png"
                alt="close"
                className="close"
                data-dismiss="modal"
              />
            </span>
            <h3 className="m-0 pb-3 upld-hd">Upload Documents</h3>
            <p className="modal-desc">
              Select the documents from your local drive
            </p>
            <div className="doc-input">
              <input type="text" placeholder="Profile Picture" />
            </div>
            <div className="drag-file mb-2">
              <label>
                Drag your file to upload or Browse
                <input
                  type="file"
                  size="60"
                  name="attachment"
                  onChange={this.handleFileChange}
                />
                <span>
                  <img src="./images/upload-icon.png" alt="upload" />
                </span>
              </label>
            </div>
            {this.state.attachment != null ? (
              <div className="uploaded-file">
                <div>
                  <img src="./images/file-icon.png" alt="file" />
                  <span className="ml-1">{this.state.fileName}</span>
                </div>
                <div>
                  <div className="doc-process">
                    <div className="doc-progress-bar">
                      <div className="inner-bar"></div>
                      <span className="progress-status">5MB done</span>
                    </div>
                    <span onClick={() => this.deleteFile()}>
                      <img src="./images/doc-up-cross.png" alt="cancel" />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="my-upld-cancl-btn mt-3">
              <button
                type="submit"
                className="b-profile-new"
                onClick={() => this.setState({ uploadProfileModel: false })}
              >
                Upload
              </button>
              <button
                type="button"
                className="b-profile-new"
                data-dismiss="modal"
                onClick={() => this.setState({ uploadProfileModel: false })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  SaveDocModal = () => {
    return (
      <div
        id="savedoc"
        className={
          this.state.saveDocModal ? "modal fade save-flies open" : "d-none"
        }
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="text-center modal-content">
            <span className="close-btn text-right">
              <img
                src="images/close-btn.png"
                alt="close"
                className="close"
                data-dismiss="modal"
              />
            </span>
            <h3 className="m-0 pb-3 save-hd">Save Documents</h3>
            <p className="save-desc">
              Are you sure you want to leave this page?
            </p>
            <p className="save-line">
              Save the changes you have made, otherwise data lost{" "}
            </p>

            <div className="save-doc-btn mt-3">
              <button type="submit" className="b-profile-new">
                Save
              </button>
              <button
                type="button"
                className="b-profile-new"
                data-dismiss="modal"
                onClick={() => this.setState({ saveDocModal: false })}
              >
                Leave the page
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log("state******", this.state);
    return (
      <>
        <div className="container-fluid dashboard-content">
          <div className="row pl-4 pr-4">
            <div className=" col-12">
              <div className="content-head pt-3 pb-4">
                <div className="left-content">
                  <div className="row">
                    <h4 className="mb-0">
                      <a href="#">Setting &nbsp;</a>{" "}
                      <span style={{ color: "orange", fontSize: 14 }}>
                        {">"}&nbsp;&nbsp;{" "}
                      </span>
                      <span style={{ color: "orange", fontSize: 14 }}>
                        Individual Profile
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-4 pr-4">
            <div className="row">
              <div className="col-lg-6 mt-4">
                <div className="indivudual-profile-section">
                  <h3 className="indivudual-head-main">Individual Profile </h3>
                  <div className="indivudual-user-blck">
                    <div className="position-relative">
                      <img
                        src={
                          this.state.attachment == null
                            ? "./images/profile-photo.png"
                            : this.state.image == ""
                            ? this.state.attachment
                            : this.state.image
                        }
                        id="blah"
                        alt="your image"
                        className="img-fluid upload-pic"
                      />
                      <div
                        className="upload-btn-wrapper"
                        onClick={() =>
                          this.setState({ uploadProfileModel: true })
                        }
                      >
                        <button className="upload-btn">
                          <img
                            src="images/pencil.png"
                            alt="icon"
                            data-toggle="modal"
                            data-target="uploaddoc"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="pl-4 individual-user-dt">
                      <div className="pb-3 border1-btm">
                        <h3 className="fs-20 m-0">Robert Rose</h3>
                        <p className="fs-14 m-0">Joined in 2020</p>
                      </div>
                      {this.state.KYCStatus == "approved" && (
                        <div className="kyc-aml-app">
                          <span>
                            <img
                              src="images/approved-tick.png"
                              alt="approver"
                            />
                          </span>
                          &nbsp; KYC/AML Approved
                        </div>
                      )}
                      {this.state.KYCStatus == "incomplete" && (
                        <div class="kyc-aml-app">
                          <span>
                            <img src="images/red-cross.png" alt="approver" />
                          </span>
                          &nbsp;{" "}
                          <span class="red-color">KYC/AML Incomplete</span>
                        </div>
                      )}

                      {this.state.KYCStatus == "pending" && (
                        <div class="kyc-aml-app">
                          <span>
                            <img src="images/pending.png" alt="approver" />
                          </span>
                          &nbsp;{" "}
                          <span class="orange-color">KYC/AML Pending</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="indivudual-profile-section mt-4">
                  <div className="clearfix">
                    <div className="edit-details ">
                      <h3 className="mb-0">INDIVIDUAL Account </h3>
                      <div className="edit-dots">
                        <a href="javascript:void(0);" onclick="editFunction()">
                          <img
                            src="images/sub-menu-point.png"
                            alt="sub-menu-point"
                          />
                        </a>
                        <div className="edt-bttn" id="ind-account">
                          Edit
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="individual-acc-dt">
                    <ul>
                      <li>
                        <span>Time Zone</span>
                        <span>(GMT-08:00) Pacific Time</span>
                      </li>
                      <li>
                        <span>Country </span>
                        <span>Germany</span>
                      </li>
                      <li>
                        <span>Date of Biirth</span>
                        <span>4 June 1983</span>
                      </li>
                      <li>
                        <span>Account ID</span>
                        {this.state.accountID == "approved" ? (
                          <span>HU798784HGSNB</span>
                        ) : (
                          ""
                        )}
                        {this.state.accountID == "incomplete" ? (
                          <span class="red-color">Incomplete</span>
                        ) : (
                          ""
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="indivudual-profile-section mt-4">
                  <div className="individual-account">
                    <h3 className="indivudual-head-main">Account </h3>
                    <ul>
                      <li>
                        <a href="/kyc-business-profile">
                          Change to business account
                        </a>
                      </li>
                      <li>
                        <a href="#">Close your account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="indivudual-profile-section">
                  <div className="clearfix">
                    <div className="edit-details ">
                      <h3 className="mb-0">Personal Address</h3>
                      <div className="edit-dots">
                        <a
                          href="javascript:void(0);"
                          onclick="addressFunction()"
                        >
                          <img
                            src="images/sub-menu-point.png"
                            alt="sub-menu-point"
                          />
                        </a>
                        <div className="edt-bttn" id="ind-address">
                          Edit
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="individual-acc-dt">
                    <ul>
                      <li>
                        <span>Address 1</span>
                        <span>Down Town Station</span>
                      </li>
                      <li>
                        <span>Address 2</span>
                        <span>15 Neutwache Frankfurt</span>
                      </li>
                      <li>
                        <span>City/Town</span>
                        <span>Berlin</span>
                      </li>
                      <li>
                        <span>Country</span>
                        <span>Germany</span>
                      </li>
                      <li>
                        <span>Postal code</span>
                        <span>21149</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="indivudual-profile-section mt-4">
                  <div className="edit-details ">
                    <h3 className="mb-0">Phone Number</h3>

                    <div className="edit-dots">
                      <Link
                        onClick={() =>
                          this.setState({
                            togglePhoneNoBtn: !this.state.togglePhoneNoBtn,
                          })
                        }
                      >
                        <img
                          src="images/sub-menu-point.png"
                          alt="sub-menu-point"
                        />
                      </Link>
                      <Link>
                        <div
                          className={classnames("edt-bttn", {
                            show: this.state.togglePhoneNoBtn,
                          })}
                          id="ind-email"
                          onClick={() =>
                            this.setState({
                              togglePhoneNo: !this.state.togglePhoneNo,
                            })
                          }
                        >
                          Edit
                        </div>
                      </Link>
                    </div>
                  </div>
                  {this.state.togglePhoneNo ? (
                    <div className="usr-phone-update">
                      <form>
                        <div className="edit-form-input">
                          <div class="edit-left">Phone Number</div>
                          <div className="edit-right">
                            <input type="text" value="+49 0755******678" />

                            {this.state.toggleOTPBtn ? (
                              <>
                                <p className="send-otp">Send OTP</p>
                                <div className="otp-val">
                                  <input
                                    type="text"
                                    value="982543"
                                    placeholder="Enter OTP"
                                  />{" "}
                                  <span>
                                    <a href="#" className="otp-submit">
                                      Submit
                                    </a>
                                  </span>
                                </div>
                              </>
                            ) : (
                              <Link
                                onClick={() =>
                                  this.setState({
                                    toggleOTPBtn: !this.state.toggleOTPBtn,
                                  })
                                }
                              >
                                <p className="update-no pl-3 mb-0">
                                  Update New Phone Number
                                </p>
                              </Link>
                            )}
                          </div>
                        </div>
                        <div class="sav-btn">
                          <button type="submit">SAVE</button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="usr-phone-no">
                      <span>Phone Number </span>
                      <span>+49 ******* 78</span>
                      {this.state.phoneVerify == true ? (
                        <span className="cyan-color">
                          <img src="images/approved-tick1.png" alt="verified" />{" "}
                          &nbsp;&nbsp;Verified{" "}
                        </span>
                      ) : (
                        <span className="cyan-color">
                          <a href="#" class="verify-cls">
                            Verify
                          </a>
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div className="indivudual-profile-section mt-4">
                  <div className="edit-details">
                    <h3 className="mb-0">EMAIL ADDRESS </h3>
                    <div className="edit-dots">
                      <Link
                        onClick={() =>
                          this.setState({
                            toggleEmailBtn: !this.state.toggleEmailBtn,
                          })
                        }
                      >
                        <img
                          src="images/sub-menu-point.png"
                          alt="sub-menu-point"
                        />
                      </Link>
                      <Link>
                        <div
                          className={classnames("edt-bttn", {
                            show: this.state.toggleEmailBtn,
                          })}
                          id="ind-email"
                          onClick={() =>
                            this.setState({
                              toggleEmailAddress: !this.state
                                .toggleEmailAddress,
                            })
                          }
                        >
                          Edit
                        </div>
                      </Link>
                    </div>
                  </div>
                  {this.state.toggleEmailAddress ? (
                    <div className="usr-email-edit">
                      <form>
                        <div className="edit-form-input">
                          <span>Primary</span>
                          <span>
                            <input type="email" value="r.rose@gmail.com" />
                          </span>
                        </div>
                        {this.state.toggleSecondaryEmail ? (
                          <>
                            <div id="add-input" className="new-email-input">
                              <label>Secondary</label>
                              <input type="email" id="secondary-email" />
                            </div>
                            <div
                              id="d-bttn"
                              className={classnames("data-sv-btn", {
                                "d-block": this.state.toggleSecondaryEmail,
                              })}
                            >
                              <button
                                type="submit"
                                onClick={() =>
                                  this.setState({
                                    toggleEmailAddress: false,
                                    toggleEmailBtn: false,
                                    toggleSecondaryEmail: false,
                                  })
                                }
                              >
                                SAVE
                              </button>
                            </div>
                          </>
                        ) : (
                          <Link
                            onClick={() =>
                              this.setState({
                                toggleSecondaryEmail: true,
                              })
                            }
                          >
                            <p className="second-mail" id="add-second-mail">
                              +Add Secondary Email
                            </p>
                          </Link>
                        )}
                      </form>
                    </div>
                  ) : (
                    <div className="usr-email">
                      <span>Primary</span>
                      <span>r.rose@gmail.com</span>
                    </div>
                  )}
                  <p className="user-email-txt mt-5">
                    To update an email address, you must have at least 2 email
                    address on the file
                  </p>
                </div>
              </div>
              {/* individual-kyc-individualprofile - incomplete */}
              {/* <AlertBox
                  imageIcon="./images/alert.png"
                  message="OTP code sent to your phone number."
                /> */}

              {/* individual-kyc-individualprofile-phoneno-update */}
              {/* <AlertBox
              imageIcon="./images/alert.png"
              message="Update New Phone Number Proceed with two factor OTP authentication"
            /> */}

              {/* individual-kyc-individualprofile-phoneno-update-send-otp */}
              {/* update phone no message */}
              {/* <AlertBox
              imageIcon="./images/alert.png"
              message="OTP code sent to your phone number"
            /> */}

              {/* individual-kyc-individual profile-phoneno-update-otp-verfied */}
              {/* <AlertBox
              imageIcon="./images/enable.png"
              message="Code accepted"           
            /> */}

              {/* individual-kyc- profile-phoneno-update-sendotp-second       */}
              <AlertBox
                imageIcon="./images/enable.png"
                message="Enter your new phone number and update"
              />
            </div>
          </div>
        </div>
        {this.upLoadProfileModal()}
        {this.SaveDocModal()}
      </>
    );
  }
}

export default IndividualProfile;

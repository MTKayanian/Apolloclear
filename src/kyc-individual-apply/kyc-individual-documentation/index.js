import React from "react";
import Thick from "./images/thick-check.png";
import Calendar from "./images/calendar.png";
import UploadImage from "./images/uploaded-file.png";
import Delete from "./images/red-cross.png";
import Disable from "./images/disabled.png";
import UploadIcon from "./images/upload-icon.png";
import { Modal, Button } from "react-bootstrap";
import "./documentation.css";
import "./responsive.css";

class IndividualDocumentation extends React.Component {
  state = {
    hoverColor: "white",
    fileName: "",
    number: "",
    showModal: false,
    modalNumberplaceHolder: "ID Card No.",
    passport: false,
    idCard: true,
    license: false,
    expireDate: "",
    image1: [],
    image2: [],
  };
  changeTab = (e, val) => {
    e.preventDefault();
    if (val === "idCard") {
      this.setState({
        idCard: true,
        passport: false,
        license: false,
        modalNumberplaceHolder: "ID Card No.",
      });
    } else if (val === "passport") {
      this.setState({
        idCard: false,
        passport: true,
        license: false,
        modalNumberplaceHolder: "Passport No.",
      });
    } else {
      this.setState({
        idCard: false,
        passport: false,
        license: true,
        modalNumberplaceHolder: "License No.",
      });
    }
  };
  showModal = () => {
    this.setState({
      showModal: true,
    });
  };
  onHandleImageArray = (e) => {
    var arr = this.state.image1;
    var obj = {
      fileName: e.target.files[0].name,
      imageLink: URL.createObjectURL(e.target.files[0]),
      extension: ".jpg",
    };
    arr.push(obj);
    this.setState({
      image1: arr,
    });
  };
  deleteImage = (ind) => {
    var arr = this.state.image1;
    arr.splice(ind, 1);
    this.setState({
      image1: arr,
    });
  };
  render() {
    return (
      <div className="container-fluid dashboard-content">
        <div className="row pl-4 pr-4">
          <div className=" col-12  pl-md-0 pr-md-0">
            <div className="content-head pt-3 pb-4">
              <div className="left-content">
                <div className="row">
                  <h4 className="mb-0">
                    <a href="#">Individual KYC/AML &nbsp;</a>{" "}
                    <span> >&nbsp;&nbsp; </span>
                    <span>Documentation</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 pl-4 pr-4">
          <div className="col-lg-2  pl-md-0 pr-md-0">
            <div className="left-source-list">
              <ul>
                <li>
                  <span className="green-circle">
                    <img src={Thick} alt="check" />
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
            <div className="kyc-documentation-business-profile">
              <div className="kyc-documentation-profile-form">
                <div className="row">
                  <div className="col-12 clearfix pb-3">
                    <div className="float-left">
                      <h3 className="kyc-documentation-head-main">
                        1. Required Documents
                      </h3>
                    </div>
                    <div className="edit-details float-right">
                      <a href="#">EDIT</a>
                    </div>
                  </div>
                </div>
                <div className="row pt-3">
                  <div className="col-lg-12">
                    <div className="kyc-documentation-tab">
                      <ul className="nav kyc-documentation-document-tab w-100">
                        <li className="nav-item">
                          <a
                            className={
                              this.state.idCard
                                ? "nav-link tablinks active"
                                : "nav-link tablinks"
                            }
                            href="#"
                            onClick={(e) => this.changeTab(e, "idCard")}
                          >
                            ID CARDS
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={
                              this.state.passport
                                ? "nav-link tablinks active"
                                : "nav-link tablinks"
                            }
                            href="#"
                            onClick={(e) => this.changeTab(e, "passport")}
                          >
                            PASSPORT
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className={
                              this.state.license
                                ? "nav-link tablinks active"
                                : "nav-link tablinks"
                            }
                            href="#"
                            onClick={(e) => this.changeTab(e, "license")}
                          >
                            DRIVING LICENSE
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tabcontent pt-4" id="idcards">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="kyc-documentation-input-txt-d">
                          <div className="kyc-documentation-fancyInput mr-md-4">
                            <input
                              type="text"
                              name=""
                              placeholder={this.state.modalNumberplaceHolder}
                            />
                          </div>
                          <div className="kyc-documentation-fancyInput position-relative">
                            <input
                              placeholder="Expiration Date"
                              className="kyc-documentation-textbox-n"
                              type="date"
                              id="date"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="pt-2 pb-3">
                          <h4 className="kyc-documentation-sub-head">
                            Upload Documents
                          </h4>
                        </div>
                        <div>
                          <p className="kyc-documentation-fs-14 m-0">
                            We require both sides of your documents
                          </p>
                        </div>
                        <div
                          className="kyc-documentation-kyc-documentation-drag-file-btn mt-3 mb-2"
                          data-toggle="modal"
                          data-target="uploadModal"
                          onClick={() => this.showModal()}
                        >
                          Drag your file to upload or Browse
                        </div>
                        <p className="m-0 kyc-documentation-fs-12 text-right mr-md-4">
                          Maximum size of image 8MB. PDF, JPG, PNG
                        </p>
                        <div className="kyc-documentation-uploaded-files">
                          <ul>
                            {this.state.image1.length > 0 &&
                              this.state.image1.map((item, index) => {
                                return (
                                  <li>
                                    <div className="kyc-documentation-flies-left">
                                      <div className="mr-3">
                                        <img
                                          src={item.imageLink}
                                          alt="files"
                                          style={{ width: 50, height: 50 }}
                                        />
                                      </div>
                                      <div>
                                        <span className="orange-clr">
                                          {"xyz"}.jpg
                                        </span>
                                        <span>Uploaded 1 sec ago</span>
                                      </div>
                                    </div>
                                    <div
                                      className="kyc-documentation-files-right"
                                      onClick={() => this.deleteImage(index)}
                                    >
                                      <img src={Delete} alt="delete" />
                                    </div>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <h3 className="m-0 kyc-documentation-head-main">
                          2. Proof of Address{" "}
                        </h3>
                        <p className="m-0 kyc-documentation-fs-14 pt-3">
                          Proof of address document can be one of the following:
                          Bank/credit card statment or a utility bill . More{" "}
                        </p>
                        <div
                          className="kyc-documentation-kyc-documentation-drag-file-btn mt-3 mb-2"
                          data-toggle="modal"
                          data-target="uploadModal"
                          onClick={() => this.showModal()}
                        >
                          Drag your file to upload or Browse
                        </div>
                        <p className="m-0 kyc-documentation-fs-12 text-right mr-md-4">
                          Maximum size of image 8MB. PDF, JPG, PNG
                        </p>
                        <div className="kyc-documentation-uploaded-files">
                          <ul>
                            <li>
                              <div className="kyc-documentation-flies-left">
                                <div className="mr-3">
                                  <img src={UploadImage} alt="files" />
                                </div>
                                <div>
                                  <span className="orange-clr">
                                    Front Passport .jpg
                                  </span>
                                  <span>Uploaded 1 hour ago</span>
                                </div>
                              </div>
                              <div className="kyc-documentation-files-right">
                                <img src={Delete} alt="delete" />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="kyc-documentation-agree-checkbox mb-3">
                          <label>
                            <input type="checkbox" />
                            <span className="kyc-documentation-checkmark"></span>
                          </label>
                          <div className="kyc-documentation-agree-txt">
                            I have read and I agree to the{" "}
                            <a href="#"> Terms and Conditions</a> and{" "}
                            <a href="#"> Privacy Policy.</a>
                          </div>
                        </div>
                        <div className="kyc-documentation-btm-btn-cls pt-4">
                          <div className="kyc-documentation-btnLight">
                            <div className="kyc-documentation-go-back-cls">
                              <span>
                                <a href="/kyc-req-doc">Go Back</a>
                              </span>
                              <button type="submit" className="b-document-new">
                                <a href="/kyc-check">CONTINUE</a>
                              </button>
                            </div>
                          </div>
                          <div className="kyc-documentation-save-doc">
                            Save documentation{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pl-4 pr-4 mt-4">
          <div className="kyc-documentation-doc-enable-popup">
            <div className="doc-enable-left doc-pink-bg">
              <img src={Disable} alt="disabled" className="img-fluid" />
            </div>
            <div className="doc-enable-right">
              <p>
                You have to check Terms and Conditions Or otherwise not able to
                continue and save document
              </p>
              <div>
                <a href="#" className="doc-enable-learn-more">
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="doc-cross-btn">
              <img src="images/cross-btn.png" alt="cross" />
            </div>
          </div>
        </div>
        <Modal
          show={this.state.showModal}
          centered={true}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div
              className="text-center modal-content"
              style={{ borderColor: "white" }}
            >
              <span className="kyc-documentation-close-btn text-right">
                <img
                  src="images/close-btn.png"
                  alt="close"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => this.setState({ showModal: false })}
                />
              </span>
              <h3 className="m-0 pb-3 kyc-documentation-upld-hd">
                Upload Documents
              </h3>
              <p className="modal-desc">
                Select the documents from your local drive
              </p>
              <div className="kyc-documentation-doc-input">
                <input type="text" value="File Name" />
              </div>
              <div className="kyc-documentation-doc-input">
                <input
                  type="text"
                  placeholder={this.state.modalNumberplaceHolder}
                />
              </div>
              <div className="kyc-documentation-drag-file mb-2">
                <label>
                  Drag your file to upload or Browse
                  <input
                    type="file"
                    size="60"
                    onChange={this.onHandleImageArray}
                  />
                  <span>
                    <img src={UploadIcon} alt="upload" />
                  </span>
                </label>
              </div>
              <div className="uploaded-file">
                <ul>
                  {this.state.image1.length > 0 &&
                    this.state.image1.map((item, index) => {
                      return (
                        <li>
                          {" "}
                          <div>
                            <img src="images/file-icon.png" alt="file" />
                            <span className="ml-1" style={{ color: "orange" }}>
                              {item.fileName}
                            </span>
                          </div>
                          <div>
                            <div className="kyc-documentation-doc-process">
                              <div className="doc-progress-bar">
                                <div className="kyc-documentation-inner-bar"></div>
                                <span className="kyc-documentation-progress-status">
                                  5MB done
                                </span>
                              </div>
                              <span onClick={() => this.deleteImage(index)}>
                                <img
                                  src="images/doc-up-cross.png"
                                  alt="cancel"
                                />
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="kyc-documentation-upld-cancl-btn mt-3">
                <button
                  type="submit"
                  className="kyc-documentation-upld-btn btn"
                  onClick={() => this.setState({ showModal: false })}
                >
                  Upload
                </button>
                <button
                  type="button"
                  className="btn close cancl-btn cancelbtn"
                  data-dismiss="modal"
                  onClick={() => this.setState({ showModal: false })}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          {/* <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Modal>
        <div id="uploadModal" className="modal kyc-documentation-upload-flies">
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
          ></div>
        </div>
      </div>
    );
  }
}

export default IndividualDocumentation;

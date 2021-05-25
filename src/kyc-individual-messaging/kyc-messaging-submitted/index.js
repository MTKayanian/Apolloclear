import React from "react";
import _ from "lodash";
import { Accordion, Button } from "react-bootstrap";
import Autocomplete from "react-autocomplete";
import "./submitted.css";
import Delete from "./images/delete.png";
import sharemail from "./images/sharemail.png";
import Robert from "./images/robert.png";
import Refresh from "./images/msg-refresh.png";
import Add from "./images/add.png";
import ImageOf from "./images/imageof.png";
import CopyOf from "./images/copyof.png";
import Forward from "./images/forward.png";
import AddUser from "./images/add-user.png";
import UserImg from "./images/user-img1.png";
import Icon1 from "./images/edit-icon1.png";
import Icon2 from "./images/edit-icon2.png";
import Icon3 from "./images/edit-icon3.png";
import Icon4 from "./images/edit-icon4.png";
import Icon5 from "./images/edit-icon5.png";
import userpic1 from "./images/userpic1.png";
import userpic2 from "./images/userpic2.png";
import userpic3 from "./images/userpic3.png";
import userpic4 from "./images/userpic4.png";
const members = [
  {
    imagePath: userpic2,
    name: "Steve Williams",
    role: "Senior Manager/Business Team",
  },
  {
    imagePath: userpic3,
    name: "Stefan Myors",
    role: "Junior Assitant KYC/AML Business Team",
  },
  {
    imagePath: userpic4,
    name: "Stella Washington",
    role: "Head of KYC/AML Business Team",
  },
  {
    imagePath: userpic2,
    name: "Steve Robinson",
    role: "Head of KYC/AML Business Team",
  },
  {
    imagePath: userpic1,
    name: "Steve Robinson",
    role: "Head of KYC/AML Business Team",
  },
];

export default class KycIndMsgSub extends React.Component {
  state = {
    lead_popup: false,
    leade_popup: false,
    leades_popup: false,
    dropDown: false,
    dropDownValue: "None",
    chats: [
      {
        message:
          "Hi Robert I appreciate that you have attached your Driving licence ,  but at the moment given the required KYC/AML documentation, I would still need to see all before I can approve your KYC/AML. So, with that in mind I thought it would be good to send you something more informative! Thanks.",
        user: "William Steve",
      },
      {
        message:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam on ullamcorper suscipit lobortis nisl ut Lorem ipsum dolor.",
        user: "Robert Rose",
      },
    ],
    shareForward: false,
    message: "",
    openShare: "",
    openForward: "",
    openDeleteModal: "",
    userComment: "",
    kycComment: "",
    searchMember: "",
    memberList: members,
    selectedMembers: [],
    showDropDown: false,
  };
  changeDropdownValue = (e, val) => {
    e.preventDefault();
    this.setState({
      dropDownValue: val,
      dropDown: false,
    });
  };

  sendMessage = (e) => {
    e.preventDefault();
    if (this.state.message === "") {
      alert("Insert message");
    } else {
      var arr = this.state.chats;
      var obj = {
        message: this.state.message,
        name: "Robert Rose",
      };
      arr.push(obj);
      this.setState({
        chats: arr,
      });
    }
  };
  onTextChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  handleuserCommentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 150) {
      this.setState({
        userComment: e.target.value,
      });
    }
  };
  handlekycCommentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 150) {
      this.setState({
        kycComment: e.target.value,
      });
    }
  };
  handleSearchMember = (e) => {
    const value = e.target.value;
    const newList = members.filter((f) =>
      f.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      searchMember: value,
      memberList: newList,
    });
  };
  handleSelectMember = (member) => {
    console.log(member);
    const oldSelectedMembers = this.state.selectedMembers;
    const existingMember = _.find(oldSelectedMembers, ["name", member.name]);
    if (!existingMember) {
      oldSelectedMembers.push(member);
      this.setState({
        selectedMembers: oldSelectedMembers,
      });
    }
    this.handleshowDropDown(false);
  };
  handleCloseBtn = (member) => {
    const oldSelectedMembers = this.state.selectedMembers;
    const existingMember = oldSelectedMembers.filter(
      (f) => member.name !== f.name
    );
    this.setState({
      selectedMembers: existingMember,
    });
  };
  handleshowDropDown = (show) => {
    this.setState({
      showDropDown: show,
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="content-head pt-3 pb-0 col-12">
                <div className="left-content">
                  <div className="row">
                    <h4 className="mb-0">
                      <a href="#">KYC/AML &nbsp;</a>{" "}
                      <span style={{ color: "orange", fontSize: 14 }}>
                        {" "}
                        &nbsp;>&nbsp;{" "}
                      </span>
                      <span style={{ color: "orange", fontSize: 14 }}>
                        {" "}
                        Submitted{" "}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive ml-4 mr-4 mt-2 submitted-deatails-tbl">
            <div id="submitted-optn">
              {/* <div className="msg-popup-optn">
          <span><img src={Delete} alt="delete" data-toggle="modal" data-target="ticketmodal" /></span>
          <span>
            <img src="images/star.png" className="ratingstart" alt="star" />
            <img src="images/star-s.png" className="ratingstart-sel" alt="star" 
                        />
          </span>
        </div> */}
            </div>
            <Accordion>
              <div className="submitted-table">
                <div className="tableHeading">
                  <div className="tableCell">
                    <div className="dropdown">
                      <a
                        className="submitted-dropbtn"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            dropDown: !this.state.dropDown,
                          });
                        }}
                      >
                        {this.state.dropDownValue}
                      </a>
                      {this.state.dropDown ? (
                        <div
                          id="submittedDropdownList"
                          className="submitted-dropdown-content"
                        >
                          <ul>
                            <li>
                              <a
                                href="#"
                                onClick={(e) =>
                                  this.changeDropdownValue(e, "All")
                                }
                              >
                                All
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) =>
                                  this.changeDropdownValue(e, "None")
                                }
                              >
                                None
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) =>
                                  this.changeDropdownValue(e, "Read")
                                }
                              >
                                Read
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) =>
                                  this.changeDropdownValue(e, "Unread")
                                }
                              >
                                Unread
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) =>
                                  this.changeDropdownValue(e, "Starred")
                                }
                              >
                                Starred
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                onClick={(e) =>
                                  this.changeDropdownValue(e, "Unstarred")
                                }
                              >
                                Unstarred
                              </a>
                            </li>
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="tableCell">Date & Time</div>
                  <div className="tableCell">Ticket ID</div>
                  <div className="tableCell">Lead </div>
                  <div className="tableCell">Subject</div>
                  <div className="tableCell">Status</div>
                  <div className="tableCell text-right">
                    <img src={Refresh} alt="refresh" />
                  </div>
                </div>
                <div className="tableBody">
                  <div className="tableRow">
                    <div className="tableRowHeader">
                      <div className="tableCell">
                        <div className="submitted-select">
                          <div className="submitted-fancycheckbox">
                            <label className="submitted-check_container">
                              <input
                                type="checkbox"
                                name="foo"
                                className="cbox"
                                onClick="checkedTrue()"
                                id="submitted-checkbox"
                              />
                              <span className="submitted-checkmark"></span>
                            </label>
                          </div>
                          <div className="submitted-star">
                            <i
                              className="fa fa-star-o ratingstart"
                              aria-hidden="true"
                              data-toggleclassName="className"
                              data-className="start-color"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">16/07/2018 10:30 AM </div>
                      <div className="tableCell">
                        123456<span>/B576</span>
                      </div>
                      <div className="tableCell">
                        <div className="submitted-lead">
                          <div
                            className="submitted-lead-name"
                            onClick={() =>
                              this.setState({
                                leade_popup: !this.state.leade_popup,
                              })
                            }
                          >
                            <span>JR</span> <span>John Russel</span>
                          </div>
                          {this.state.leade_popup ? (
                            <div className="box-lead-popup">
                              <div className="box-lead-top">
                                <h3>John Russel (PlutoClear)</h3>
                                <p>John Russel (PlutoClear)</p>
                              </div>
                              <div className="box-lead-bottom">
                                <a
                                  href="/kyc-individual-profile"
                                  className="btn submitted-view-pro-btn"
                                >
                                  View profile
                                </a>
                              </div>
                              <div className="submitted-name-tag">jr</div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="tableCell">KYC/AML Enabled </div>
                      <div className="tableCell close-color">Closed</div>
                      <div className="tableCell">
                        <div className="submitted-rf">
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <span className="collapsible">
                              <img src={Add} alt="icon" />
                            </span>
                          </Accordion.Toggle>
                          <span>
                            <img
                              src={Delete}
                              alt="icon"
                              data-toggle="modal"
                              data-target="ticketmodal"
                              onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                  openDeleteModal: "open",
                                });
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableRow">
                    <div className="tableRowHeader">
                      <div className="tableCell">
                        <div className="submitted-select">
                          <div className="submitted-fancycheckbox">
                            <label className="submitted-check_container">
                              <input
                                type="checkbox"
                                name="foo"
                                className="cbox"
                                onClick="checkedTrue()"
                                id="submitted-checkbox"
                              />
                              <span className="submitted-checkmark"></span>
                            </label>
                          </div>
                          <div className="submitted-star">
                            <i
                              className="fa fa-star-o ratingstart"
                              aria-hidden="true"
                              data-toggleclassName="className"
                              data-className="start-color"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">15/07/2018 11:45 AM </div>
                      <div className="tableCell">
                        123456<span>/B576</span>
                      </div>
                      <div className="tableCell">
                        <div className="submitted-lead">
                          <div
                            className="submitted-lead-name"
                            onClick={() =>
                              this.setState({
                                lead_popup: !this.state.lead_popup,
                              })
                            }
                          >
                            <span>SS</span> <span>Steve Stevenson</span>
                          </div>
                          {this.state.lead_popup ? (
                            <div className="box-lead-popup">
                              <div className="box-lead-top">
                                <h3>Steve Stevenson (PlutoClear)</h3>
                                <p>Steve Stevenson (PlutoClear)</p>
                              </div>
                              <div className="box-lead-bottom">
                                <a
                                  href="/kyc-individual-profile"
                                  className="btn submitted-view-pro-btn"
                                >
                                  View profile
                                </a>
                              </div>
                              <div className="submitted-name-tag">SS</div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="tableCell">Provide Passport Copy</div>
                      <div className="tableCell solved-color">Solved</div>
                      <div className="tableCell">
                        <div className="submitted-rf">
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <span className="collapsible">
                              <img src={Add} alt="icon" />
                            </span>
                          </Accordion.Toggle>
                          <span>
                            <img
                              src={Delete}
                              alt="icon"
                              data-toggle="modal"
                              data-target="ticketmodal"
                              onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                  openDeleteModal: "open",
                                });
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tableRow">
                    <div className="tableRowHeader submitted-expnd">
                      <div className="tableCell">
                        <div className="submitted-select">
                          <div className="submitted-fancycheckbox">
                            <label className="submitted-check_container">
                              <input
                                type="checkbox"
                                name="foo"
                                className="cbox"
                                onClick="checkedTrue()"
                                id="submitted-checkbox"
                              />
                              <span className="submitted-checkmark"></span>
                            </label>
                          </div>
                          <div className="submitted-star">
                            <i
                              className="fa fa-star-o ratingstart"
                              aria-hidden="true"
                              data-toggleclassName="className"
                              data-className="start-color"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">15/07/2018 09:18 AM </div>
                      <div className="tableCell">
                        123456<span>/B576</span>
                      </div>
                      <div className="tableCell">
                        <div className="submitted-lead">
                          <div
                            className="submitted-lead-name"
                            onClick={() =>
                              this.setState({
                                leades_popup: !this.state.leades_popup,
                              })
                            }
                          >
                            <span>SW</span> <span>Steve Williams</span>
                          </div>
                          {this.state.leades_popup ? (
                            <div className="box-lead-popup">
                              <div className="box-lead-top">
                                <h3> Steve Williams (PlutoClear)</h3>
                                <p>Steve Williams (PlutoClear)</p>
                              </div>
                              <div className="box-lead-bottom">
                                <a
                                  href="#"
                                  className="btn submitted-view-pro-btn"
                                >
                                  View profile
                                </a>
                              </div>
                              <div className="submitted-name-tag">SW</div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="tableCell">
                        <div>Provide ID Card</div>
                        <div className="submitted-btn-bottoom">
                          <div className="submitted-bttm-cls">
                            <span>
                              <a href="#">
                                <img src={ImageOf} alt="icon" /> Image...
                              </a>
                            </span>
                            <span>
                              <a href="#">
                                <img src={CopyOf} alt="icon" /> Copy...{" "}
                              </a>
                            </span>
                            <span className="submitted-copyof">
                              <a href="#"> +2 </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell open-color">Open</div>
                      <div className="tableCell">
                        <div className="submitted-rf">
                          <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                          >
                            <span className="collapsible">
                              <img src={Add} alt="icon" />
                            </span>
                          </Accordion.Toggle>
                          <span>
                            <img
                              src={Delete}
                              alt="icon"
                              data-toggle="modal"
                              data-target="ticketmodal"
                              onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                  openDeleteModal: "open",
                                });
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="submitted-collapse">
                      <Accordion.Collapse eventKey="0">
                        <div className="submitted-chat">
                          <div className="submitted-collapse-block">
                            <div className="submitted-c-head">
                              <div className="msg-user-pic">
                                <img src={UserImg} alt="user" />
                                <span className="msg-active-dot"></span>
                              </div>
                              <div className="submitted-head-right">
                                <p className="submitted-to">
                                  <span>To: Robert Rose </span>
                                  <span className="submitted-mail-dropdwn">
                                    <button
                                      onClick={() =>
                                        this.setState({
                                          shareForward: !this.state
                                            .shareForward,
                                        })
                                      }
                                    >
                                      <i className="fa fa-ellipsis-h"></i>
                                    </button>
                                  </span>
                                </p>
                                {this.state.shareForward ? (
                                  <div
                                    id="submittedMailop"
                                    className="submitted-mail-list"
                                  >
                                    <ul>
                                      <li>
                                        <div className="msg-forwrd">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="forwadrodal"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              this.setState({
                                                openForward: "open",
                                              });
                                            }}
                                          >
                                            forward
                                          </a>
                                        </div>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0)"
                                          data-toggle="modal"
                                          data-target="sharemodal"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            this.setState({
                                              openShare: "open",
                                            });
                                          }}
                                        >
                                          share via mail
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                ) : null}

                                <p></p>
                                <p className="submitted-subjct">
                                  <span>Subject: Provide ID Card</span>
                                  <span>Ticket ID: 876829/K024</span>
                                </p>
                              </div>
                            </div>
                            <div className="submitted-thread">
                              <div className="msg-thread-dropdwn">
                                <div className="dropdown">
                                  <a
                                    onClick="meaasgeFilter()"
                                    className="submitted-filter"
                                  >
                                    OLDER MESSAGES
                                  </a>
                                  <div
                                    id="submittedFilterList"
                                    className="submitted-filter-content"
                                  >
                                    <ul>
                                      <li>
                                        <a href="#"></a>
                                      </li>
                                      <li>
                                        <a href="#"></a>
                                      </li>
                                      <li>
                                        <a href="#"></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="scrollable">
                                {this.state.chats.length > 0 &&
                                  this.state.chats.map((item, index) => {
                                    if (index % 2 === 0) {
                                      return (
                                        <div className="submitted-user-thrd">
                                          <div className="submitted-threadtext d-flex">
                                            <div className="submitted-user-lead">
                                              <p>{item.message}</p>
                                              <div className="submitted-user-cls">
                                                <span>
                                                  <a href="#">
                                                    <img
                                                      src={ImageOf}
                                                      alt="icon"
                                                    />{" "}
                                                    Image...
                                                  </a>
                                                </span>
                                                <span>
                                                  <a href="#">
                                                    <img
                                                      src={CopyOf}
                                                      alt="icon"
                                                    />{" "}
                                                    Copy...{" "}
                                                  </a>
                                                </span>
                                                <span className="submitted-copyof">
                                                  <a href="#"> +2 </a>
                                                </span>
                                              </div>
                                              <div className="submitted-thread-fancycheckbox">
                                                <label className="submitted-thread-check_container">
                                                  <input
                                                    type="checkbox"
                                                    name="foo"
                                                    className="cbox"
                                                  />
                                                  <span className="submitted-thread-checkmark"></span>
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="msg-user-dp">
                                            <span className="msg-time">
                                              13:30
                                            </span>
                                            <div className="msg-user-pic mt-2">
                                              <img src={UserImg} alt="user" />
                                              <span className="msg-active-dotd"></span>
                                              <div className="msg-user-name">
                                                {item.user}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    } else {
                                      return (
                                        <div className="submitted-user-thrd2">
                                          <div className="msg-user-dp2">
                                            <span className="msg-time2">
                                              13:30
                                            </span>
                                            <div className="msg-user-pic mt-2">
                                              <img src={UserImg} alt="user" />
                                              <span className="msg-active-dotd"></span>
                                              <div className="msg-user-name">
                                                {item.user}
                                              </div>
                                            </div>
                                          </div>
                                          <div className="submitted-user-tread2">
                                            <div className="submitted-user-lead2">
                                              <p>{item.message}</p>
                                              <div className="submitted-user-cls">
                                                <span>
                                                  <a href="#">
                                                    <img
                                                      src={ImageOf}
                                                      alt="icon"
                                                    />{" "}
                                                    Image...
                                                  </a>
                                                </span>
                                                <span>
                                                  <a href="#">
                                                    <img
                                                      src={CopyOf}
                                                      alt="icon"
                                                    />{" "}
                                                    Copy...{" "}
                                                  </a>
                                                </span>
                                                <span className="submitted-copyof">
                                                  <a href="#"> +2 </a>
                                                </span>
                                              </div>
                                              <div className="submitted-thread-fancycheckbox">
                                                <label className="submitted-thread-check_container">
                                                  <input
                                                    type="checkbox"
                                                    name="foo"
                                                    className="cbox"
                                                    onClick="checkedtrue()"
                                                    id="submitted-thread-checkbox"
                                                  />
                                                  <span className="submitted-thread-checkmark"></span>
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  })}
                              </div>
                            </div>
                          </div>
                          <div className="submitted-write-box">
                            <div className="submitted-user-txt">
                              <textarea
                                placeholder="Write a submitted"
                                className="msg-user-textarea"
                                onChange={(e) => this.onTextChange(e)}
                              ></textarea>
                              <div className="msg-limit">
                                <span>{this.state.message.length}/500</span>
                                <span>
                                  <a href="#">
                                    <img src={Delete} alt="delete" />
                                  </a>
                                </span>
                              </div>
                            </div>
                            <div className="submitted-edit">
                              <div className="msg-edit-left">
                                <span>
                                  <img src={Icon1} alt="edit" />
                                </span>
                                <span>
                                  <img src={Icon2} alt="edit" />
                                </span>
                                <span>
                                  <img src={Icon3} alt="edit" />
                                </span>
                                <span>
                                  <img src={Icon4} alt="edit" />
                                </span>
                                <span>
                                  <img src={Icon5} alt="edit" />
                                </span>
                              </div>
                              <div className="msg-edit-right">
                                <a
                                  href="#"
                                  className="b-submit-new"
                                  onClick={(e) => this.sendMessage(e)}
                                >
                                  SEND
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
            <div className="tablepagination clearfix text-center">
              <div className="float-right fnone">
                <ul className="submittedpagination">
                  <li>
                    <a
                      href="submitted-page-link"
                      className="submitted-page-link"
                    >
                      <i className="fa fa-angle-left"></i>{" "}
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" className="submitted-page-link">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="submitted-page-link">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="submitted-page-link">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="submitted-page-link">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sharemodal"
          className={`modal fade sharemodal-mail ${this.state.openShare}`}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="text-center modal-content">
              <div className="text-center">
                <img src={sharemail} alt="sharemail" />
              </div>
              <h3 className="m-0 sharemodal-head">Share via email</h3>
              <div className="sharemodal-input">
                <input
                  type="email"
                  value=""
                  placeholder="example@plutoclear.com"
                />
              </div>
              <div className="sharemodal-input">
                <input type="text" placeholder="Type Subject" />
              </div>
              <div className="sharemodal-input mb-1">
                <textarea
                  placeholder="Write commment here"
                  value={this.state.kycComment}
                  onChange={this.handlekycCommentChange}
                ></textarea>
                <div className="share-limit">
                  <span>{this.state.kycComment.length}/150</span>
                  <span>
                    <a href="#">
                      <img src={Delete} alt="delete" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="sharemodal-upld-cancl-btn">
                <button type="submit" className="b-submit-new">
                  send
                </button>
                <button
                  type="button"
                  className="b-submit-new "
                  data-dismiss="modal"
                  style={{ marginLeft: 10 }}
                  onClick={(e) => {
                    this.setState({
                      openShare: "",
                    });
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="ticketmodal"
          className={`modal fade ticket-delete ${this.state.openDeleteModal}`}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="text-center modal-content">
              <div className="text-center">
                <img src="images/ticket-del.png" alt="ticket delete" />
              </div>
              <h3 className="m-0 ticketmodal-head">Deleting the Ticket </h3>
              <p className="ticket-txt">
                Are you sure you want to delete Ticket ID-123456/B576?{" "}
              </p>
              <div className="ticketmodal-del-cancl-btn">
                <button type="submit" className="b-submit-new">
                  DELETE
                </button>
                <button
                  type="button"
                  className="b-submit-new "
                  style={{ marginLeft: "20px" }}
                  data-dismiss="modal"
                  onClick={(e) => {
                    this.setState({
                      openDeleteModal: "",
                    });
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="forwadrodal"
          className={`modal fade forward-submitted ${this.state.openForward}`}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="text-center">
                <img src={Forward} alt="Forward the submitted" />
              </div>
              <h3 className="m-0 forwadrodal-head">Forward the message</h3>
              <div className="search-container">
                <div className="submitted-dropbtn">
                  {this.state.selectedMembers.map((item) => (
                    <div className="chip">
                      {item.name}
                      <span
                        className="closebtn"
                        onClick={() => this.handleCloseBtn(item)}
                      >
                        &times;
                      </span>
                    </div>
                  ))}

                  <span className="adduser">
                    <img
                      src={AddUser}
                      alt="add user"
                      className="submitted-dropbtn"
                      onClick={() => this.handleshowDropDown(true)}
                    />
                  </span>
                </div>

                <Autocomplete
                  items={this.state.memberList}
                  renderItem={(item, isHighlighted) => (
                    <li>
                      <div className="drop-user-nm">
                        <div className="drop-user-pic">
                          <img src={item.imagePath} alt="user" />
                          <span className="userd-active-dot"></span>
                        </div>
                        <div className="drop-user-nm-right">
                          <h3>{item.name}</h3>
                          <p>{item.role} </p>
                        </div>
                      </div>
                    </li>
                  )}
                  renderMenu={(items) => (
                    <div
                      id="userDropdownList"
                      className="submitted-dropdown-content user-dropdown-details.show"
                    >
                      <ul className="userlistscrollable " children={items}></ul>
                    </div>
                  )}
                  onChange={(e) => this.handleSelectMember(e.target.value)}
                  getItemValue={(item) => item}
                  inputProps={{
                    onFocus: () => this.handleshowDropDown(true),
                    onblur: () => {
                      this.handleshowDropDown(false);
                    },
                  }}
                  onSelect={(val) => this.handleSelectMember(val)}
                  onMenuVisibilityChange={(isOpen) =>
                    this.setState({ showDropDown: isOpen })
                  }
                  open={this.state.showDropDown}
                />
              </div>
              <div className="forwadrodal-input">
                <input type="text" placeholder="Enter Group" />
              </div>
              <div className="forwadrodal-input">
                <input type="text" placeholder="Type Subject" />
              </div>
              <div className="forwadrodal-input mb-2 forward-textarea">
                <div className="position-relative">
                  <textarea
                    placeholder="Write commment here"
                    value={this.state.userComment}
                    onChange={this.handleuserCommentChange}
                  ></textarea>
                  <div className="share-limit">
                    <span>{this.state.userComment.length}/150</span>
                  </div>
                </div>
                <div className="forward-write-msg">
                  <div className="forward-user-details">
                    <img src={UserImg} alt="user" />
                    <span>Conor Russo</span>
                  </div>
                  <p>
                    Hi Robert,
                    <br />I appreciate that you have attached your Driving
                    license , but at the moment given the required KYC/AML
                    documentation, I would still need to see all before I can
                    approve your KYC/AML. So, with that in mind I thought it it
                    would be good to send you something more informative!
                  </p>
                </div>
                <div className="submitted-forward-cls">
                  <span>
                    <a href="#">
                      <img src={ImageOf} alt="icon" /> Image...
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <img src={CopyOf} alt="icon" /> Copy...{" "}
                    </a>
                  </span>
                  <span className="submitted-copyof">
                    <a href="#"> +2 </a>
                  </span>
                </div>
              </div>

              <div className="forwadrodal-del-cancl-btn">
                <button type="submit" className="b-submit-new">
                  send
                </button>
                <button
                  type="button"
                  className="b-submit-new "
                  style={{ marginLeft: "20px" }}
                  data-dismiss="modal"
                  onClick={(e) => {
                    this.setState({
                      openForward: "",
                    });
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

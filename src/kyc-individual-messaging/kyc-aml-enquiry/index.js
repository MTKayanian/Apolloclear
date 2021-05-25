import React from "react";
import "./enquiry.css";
import _ from "lodash";
import { Accordion, Button } from "react-bootstrap";
import Picker from "emoji-picker-react";
import classnames from "classnames";
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
import TicketDel from "./images/ticket-del.png";
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
class kycAMLENQ extends React.Component {
  state = {
    lead_popup: false,
    dropDown: false,
    dropDownValue: "None",
    inbox: true,
    sent: false,
    draft: false,
    showEmoji: false,
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
    colorEnq: "black",
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
  onChangeTab = (e, val) => {
    e.preventDefault();
    if (val === "inbox") {
      this.setState({
        inbox: true,
        sent: false,
        draft: false,
      });
    } else if (val === "sent") {
      this.setState({
        inbox: false,
        sent: true,
        draft: false,
      });
    } else {
      this.setState({
        inbox: false,
        sent: false,
        draft: true,
      });
    }
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
  onColorChange = (e) => {
    this.setState({
      colorEnq: e.target.value,
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

  shareModal = () => {
    return (
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
              <textarea placeholder="Write commment here"></textarea>
              <div className="share-limit">
                <span>{this.state.message.length}/150</span>
                <span>
                  <a href="#">
                    <img src={Delete} alt="delete" />
                  </a>
                </span>
              </div>
            </div>
            <div className="sharemodal-upld-cancl-btn">
              <button type="submit" className="b-enquiry-new">
                send
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="b-enquiry-new "
                data-dismiss="modal"
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
    );
  };

  enquiryModal = () => {
    return (
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
            <div className="forwadrodal-input">
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
              <input
                type="text"
                value=""
                placeholder="Search member of PlutoClear's Business Team"
                onFocus={() => this.handleshowDropDown(true)}
                // onBlur={() => this.handleshowDropDown(false)}
                className="submitted-dropbtn"
                name="searchMeamber"
                value={this.state.searchMember}
                onChange={this.handleSearchMember}
              />
              <span className="adduser">
                <img
                  src={AddUser}
                  alt="add user"
                  className="submitted-dropbtn"
                  onClick={() => this.handleshowDropDown(true)}
                />
              </span>

              <div
                id="userDropdownList"
                className="submitted-dropdown-content user-dropdown-details.show"
              >
                {this.state.showDropDown ? (
                  <ul className="userlistscrollable ">
                    {this.state.memberList.map((member) => (
                      <li onClick={() => this.handleSelectMember(member)}>
                        <div className="drop-user-nm">
                          <div className="drop-user-pic">
                            <img src={member.imagePath} alt="user" />
                            <span className="userd-active-dot"></span>
                          </div>
                          <div className="drop-user-nm-right">
                            <h3>{member.name}</h3>
                            <p>{member.role} </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="forwadrodal-input">
              <input type="text" placeholder="Type Subject" />
            </div>
            <div className="forwadrodal-input mb-2 forward-textarea">
              <div className="position-relative">
                <textarea
                  placeholder="Write commment here"
                  value={this.state.kycComment}
                  onChange={this.handlekycCommentChange}
                ></textarea>
                <div className="share-limit">
                  <span>{this.state.message.length}/150</span>
                </div>
              </div>
              <div className="forward-write-msg">
                <div className="forward-user-details">
                  <img src={Robert} alt="user" />
                  <span>Conor Russo</span>
                </div>
                <p>
                  Hi Robert,
                  <br />I appreciate that you have attached your Driving license
                  , but at the moment given the required KYC/AML documentation,
                  I would still need to see all before I can approve your
                  KYC/AML. So, with that in mind I thought it it would be good
                  to send you something more informative!
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
                  <a href="#"> 2 </a>
                </span>
              </div>
            </div>

            <div className="forwadrodal-del-cancl-btn">
              <button type="submit" className="b-enquiry-new">
                send
              </button>

              <button
                type="button"
                className="b-enquiry-new"
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
    );
  };

  deleteModel = () => {
    return (
      <div
        id="ticketmodal"
        className={`modal fade ticket-delete ${this.state.openDeleteModal}`}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="text-center modal-content">
            <div className="text-center">
              <img src={TicketDel} alt="ticket delete" />
            </div>
            <h3 className="m-0 ticketmodal-head">Deleting the Ticket </h3>
            <p className="ticket-txt">
              Are you sure you want to delete Ticket ID-123456/B576?{" "}
            </p>
            <div className="ticketmodal-del-cancl-btn">
              <button type="submit" className="b-enquiry-new ">
                DELETE
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                type="button"
                className="b-enquiry-new"
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
    );
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
                      <a href="#">KYC/AML &nbsp;</a> <span> &nbsp;&nbsp; </span>
                      <span>Enquiry</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="enquiry-head-buttns ml-4 mr-4">
            <div className="enquiry-tab-btns">
              <ul>
                <li className={this.state.inbox ? "active" : ""}>
                  <a
                    href="#"
                    className="btn"
                    onClick={(e) => this.onChangeTab(e, "inbox")}
                  >
                    INBOX
                  </a>
                  <span className="enquiry-msg-no">5</span>
                </li>
                <li
                  className={this.state.sent ? "active" : ""}
                  onClick={(e) => this.onChangeTab(e, "sent")}
                >
                  <a href="#" className="btn">
                    SENT
                  </a>
                </li>
                <li
                  className={this.state.draft ? "active" : ""}
                  onClick={(e) => this.onChangeTab(e)}
                >
                  <a href="#" className="btn">
                    DRAFT
                  </a>
                </li>
                <li className="create-bttn">
                  <a href="/kyc-messaging-group-create" className="btn">
                    <img
                      src="images/create-msg.png"
                      alt="create enquiry"
                      className="mr-2"
                    />{" "}
                    Create New Message
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-4 mr-4 mt-2 enquiry-deatails-tbl">
            <div id="enquiry-optn" className="msg-popup-optn">
              <div className="enquiry-msg-details">
                <span className="msg-border-right">
                  <img
                    src="images/archieve.png"
                    alt="mail"
                    className="enquiry-mail-d"
                  />
                  <img
                    src="images/archieve-hv.png"
                    alt="mail"
                    className="enquiry-mail-hov"
                  />
                  <p>Archive</p>
                </span>
                <span className="msg-border-right">
                  <img src={Delete} alt="mail" className="enquiry-mail-d" />
                  <img
                    src="images/delete-hv.png"
                    alt="mail"
                    className="enquiry-mail-hov"
                  />
                  <p>Delete</p>
                </span>
                <span>
                  <img
                    src="images/read.png"
                    alt="mail"
                    className="enquiry-mail-d"
                  />
                  <img
                    src="images/read-hv.png"
                    alt="mail"
                    className="enquiry-mail-hov"
                  />
                  <img
                    src="images/unread.png"
                    alt="mail"
                    className="enquiry-mail-hov"
                    style={{ display: "none" }}
                  />
                  <p className="mark-read">Mark as read</p>
                </span>
              </div>
            </div>
            <Accordion>
              <div className="enquiry-table">
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
                        <div className="enquiry-select">
                          <div className="enquiry-fancycheckbox">
                            <label className="enquiry-check_container">
                              <input
                                type="checkbox"
                                name="foo"
                                className="cbox"
                                onclick="checkedTrue()"
                                id="enquiry-checkbox"
                                checked=""
                              />
                              <span className="enquiry-checkmark"></span>
                            </label>
                          </div>
                          <div className="enquiry-star">
                            <i
                              className="fa fa-star-o ratingstart"
                              aria-hidden="true"
                              data-toggleclass="class"
                              data-class="start-color"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">16/07/2018 10:30 AM</div>
                      <div className="tableCell">
                        123456<span>/B576</span>
                      </div>
                      <div className="tableCell">
                        <div className="enquiry-lead">
                          <div
                            className="enquiry-lead-name"
                            onclick="enquiryUserbox()"
                          >
                            <span>JR</span> <span>John Russel</span>
                          </div>
                          <div className="meaasge-lead-popup" id="enquiryUser">
                            <div className="meaasge-lead-top">
                              <h3>John Russel (PlutoClear)</h3>
                              <p>John Russel (PlutoClear)</p>
                            </div>
                            <div className="meaasge-lead-bottom">
                              <a href="#" className="btn enquiry-view-pro-btn">
                                View profile
                              </a>
                            </div>
                            <div className="enquiry-name-tag">jr</div>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">KYC/AML Enabled</div>
                      <div className="tableCell await-color">Awaiting</div>
                      <div className="tableCell">
                        <div className="enquiry-rf">
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
                    <div className="tableRowHeader enquiry-expnd">
                      <div className="tableCell">
                        <div className="enquiry-select">
                          <div className="enquiry-fancycheckbox">
                            <label className="enquiry-check_container">
                              <input
                                type="checkbox"
                                name="foo"
                                className="cbox"
                                onclick="checkedTrue()"
                                id="enquiry-checkbox"
                              />
                              <span className="enquiry-checkmark"></span>
                            </label>
                          </div>
                          <div className="enquiry-star">
                            <i
                              className="fa fa-star-o ratingstart"
                              aria-hidden="true"
                              data-toggleclass="class"
                              data-class="start-color"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">16/07/2018 10:30 AM </div>
                      <div className="tableCell">
                        123456<span>/B576</span>
                      </div>
                      <div className="tableCell">
                        <div className="enquiry-lead">
                          <div className="enquiry-lead-name">
                            <span>DW</span> <span>David Washington </span>
                          </div>
                          {/* individual-kyc-messaging-enquiry-message-forward */}
                          {/* <div className="enquiry-group-name">
                            <span>DW</span> <span>cr</span>
                            <span>kg</span>
                          </div> */}
                        </div>
                      </div>
                      <div className="tableCell">
                        <div>Provide ID Card</div>
                        <div className="enquiry-btn-bottoom">
                          <div className="enquiry-bttm-cls">
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
                            <span className="enquiry-copyof">
                              <a href="#"> +2 </a>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell solved-color">Solved</div>
                      <div className="tableCell">
                        <div className="enquiry-rf">
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
                        <div className="enquiry-chat">
                          <div className="enquiry-collapse-block">
                            <div className="enquiry-c-head">
                              <div className="msg-user-pic">
                                <img src={UserImg} alt="user" />
                                <span className="msg-active-dot"></span>
                              </div>
                              <div className="enquiry-head-right">
                                <p className="enquiry-to">
                                  <span>To: Robert Rose </span>
                                  {/* individual-kyc-messaging-enquiry-message-forward */}
                                  {/* <div className="enquiry-usr-to">
                                    To:
                                    <span>
                                      Steve Williams{' '}
                                      <img
                                        src="images/user-del.png"
                                        alt="delete"
                                        className="ml-1"
                                      />
                                    </span>
                                    <span>
                                      Conor Russo{' '}
                                      <img
                                        src="images/user-del.png"
                                        alt="delete"
                                        className="ml-1"
                                      />
                                    </span>
                                    <span>
                                      Kaitlyn Gonzalez{' '}
                                      <img
                                        src="images/user-del.png"
                                        alt="delete"
                                        className="ml-1"
                                      />
                                    </span>
                                  </div> */}
                                  <span className="enquiry-mail-dropdwn">
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
                                    id="enquiryMailop"
                                    className={classnames("enquiry-mail-list", {
                                      show: this.state.shareForward,
                                    })}
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
                                <p className="enquiry-subjct">
                                  <span>Subject: Provide ID Card</span>
                                  <span>Ticket ID: 876829/K024</span>
                                </p>
                              </div>
                            </div>
                            <div className="enquiry-thread">
                              <div className="msg-thread-dropdwn">
                                <div className="dropdown">
                                  <a
                                    onclick="meaasgeFilter()"
                                    className="enquiry-filter"
                                  >
                                    OLDER MESSAGES
                                  </a>
                                  <div
                                    id="enquiryFilterList"
                                    className="enquiry-filter-content"
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
                                        <div className="enquiry-user-thrd">
                                          <div className="enquiry-threadtext d-flex">
                                            <div className="enquiry-user-lead">
                                              <p>{item.message}</p>
                                              <div className="enquiry-user-cls">
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
                                                <span className="enquiry-copyof">
                                                  <a href="#"> +2 </a>
                                                </span>
                                              </div>
                                              <div className="enquiry-thread-fancycheckbox">
                                                <label className="enquiry-thread-check_container">
                                                  <input
                                                    type="checkbox"
                                                    name="foo"
                                                    className="cbox"
                                                  />
                                                  <span className="enquiry-thread-checkmark"></span>
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
                                        <div className="enquiry-user-thrd2">
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
                                          <div className="enquiry-user-tread2">
                                            <div className="enquiry-user-lead2">
                                              <p>{item.message}</p>
                                              <div className="enquiry-user-cls">
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
                                                <span className="enquiry-copyof">
                                                  <a href="#"> +2 </a>
                                                </span>
                                              </div>
                                              <div className="enquiry-thread-fancycheckbox">
                                                <label className="enquiry-thread-check_container">
                                                  <input
                                                    type="checkbox"
                                                    name="foo"
                                                    className="cbox"
                                                    onclick="checkedtrue()"
                                                    id="enquiry-thread-checkbox"
                                                  />
                                                  <span className="enquiry-thread-checkmark"></span>
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
                          <div className="enquiry-write-box">
                            <div className="enquiry-user-txt">
                              <textarea
                                placeholder="Write a enquiry"
                                className="msg-user-textarea"
                                onChange={(e) => this.onTextChange(e)}
                                style={{ color: this.state.colorEnq }}
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
                            <div className="enquiry-edit">
                              <div className="msg-edit-left">
                                <span>
                                  <img src={Icon1} alt="edit" />
                                  <input
                                    type="color"
                                    onChange={(e) => this.onColorChange(e)}
                                  />
                                </span>
                                <span>
                                  <img src={Icon2} alt="edit" />
                                </span>
                                <span>
                                  <img src={Icon3} alt="edit" />
                                </span>
                                <span>
                                  {this.state.showEmoji ? <Picker /> : null}

                                  <img
                                    src={Icon4}
                                    alt="edit"
                                    onClick={(e) => {
                                      this.setState({
                                        showEmoji: !this.state.showEmoji,
                                      });
                                    }}
                                  />
                                </span>
                                <span>
                                  <img src={Icon5} alt="edit" />
                                </span>
                              </div>
                              <div className="msg-edit-right">
                                <a
                                  href="#"
                                  className="b-enquiry-new"
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
                  <div className="tableRow">
                    <div className="tableRowHeader">
                      <div className="tableCell">
                        <div className="enquiry-select">
                          <div className="enquiry-fancycheckbox">
                            <label className="enquiry-check_container">
                              <input
                                type="checkbox"
                                name="msgcheck"
                                className="cbox"
                                onclick="checkedtrue()"
                                id="enquiry-checkbox"
                              />
                              <span className="enquiry-checkmark"></span>
                            </label>
                          </div>
                          <div className="enquiry-star">
                            <i
                              className="fa fa-star-o ratingstart"
                              aria-hidden="true"
                              data-toggleclass="class"
                              data-class="start-color"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">16/07/2018 10:30 AM </div>
                      <div className="tableCell">
                        123456<span>/B576</span>
                      </div>
                      <div className="tableCell">
                        <div className="enquiry-lead">
                          <div className="enquiry-lead-name">
                            <span>kg</span> <span>Kaitlyn Gonzalez </span>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">Provide Passport Copy</div>
                      <div className="tableCell await-color">Awaiting</div>
                      <div className="tableCell">
                        <div className="enquiry-rf">
                          <span>
                            <img src={Add} alt="icon" />
                          </span>
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
                        <div className="enquiry-select">
                          <div className="enquiry-fancycheckbox">
                            <label className="enquiry-check_container">
                              <input
                                type="checkbox"
                                name="msgcheck"
                                className="cbox"
                                onclick="checkedtrue()"
                                id="enquiry-checkbox"
                              />
                              <span className="enquiry-checkmark"></span>
                            </label>
                          </div>
                          <div className="enquiry-star">
                            <i
                              className="fa fa-star-o ratingstart"
                              aria-hidden="true"
                              data-toggleclass="class"
                              data-class="start-color"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">16/07/2018 10:30 AM </div>
                      <div className="tableCell">
                        123456<span>/B576</span>
                      </div>
                      <div className="tableCell">
                        <div className="enquiry-lead">
                          <div className="enquiry-lead-name">
                            <span>cr</span> <span>Connor Russo</span>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">Provide Driving License</div>
                      <div className="tableCell await-color">Awaiting</div>
                      <div className="tableCell">
                        <div className="enquiry-rf">
                          <span>
                            <img src={Add} alt="icon" />
                          </span>
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
                        <div className="enquiry-select">
                          <div className="enquiry-fancycheckbox">
                            <label className="enquiry-check_container">
                              <input
                                type="checkbox"
                                name="msgcheck"
                                className="cbox"
                                onclick="checkedtrue()"
                                id="enquiry-checkbox"
                              />
                              <span className="enquiry-checkmark"></span>
                            </label>
                          </div>
                          <div className="enquiry-star">
                            <i
                              className="fa fa-star-o ratingstart"
                              aria-hidden="true"
                              data-toggleclass="class"
                              data-class="start-color"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">16/07/2018 10:30 AM </div>
                      <div className="tableCell">
                        123456<span>/B576</span>
                      </div>
                      <div className="tableCell">
                        <div className="enquiry-lead">
                          <div className="enquiry-lead-name">
                            <span>ms</span> <span>Martha Stewart </span>
                          </div>
                        </div>
                      </div>
                      <div className="tableCell">KYC/AML Enabled</div>
                      <div className="tableCell solved-color">Sloved</div>
                      <div className="tableCell">
                        <div className="enquiry-rf">
                          <span>
                            <img src={Add} alt="icon" />
                          </span>
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
                </div>
              </div>
            </Accordion>
            <div className="tablepagination clearfix text-center">
              <div className="float-right fnone">
                <ul className="enquirypagination">
                  <li>
                    <a href="enquiry-page-link" className="enquiry-page-link">
                      <i className="fa fa-angle-left" aria-hidden="true"></i>{" "}
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" className="enquiry-page-link">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="enquiry-page-link">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="enquiry-page-link">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="enquiry-page-link">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {this.shareModal()}
        {this.enquiryModal()}
        {this.deleteModel()}
      </div>
    );
  }
}

export default kycAMLENQ;

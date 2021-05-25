import React, { Component } from "react";
import "./css/create-message.css";
import _ from "lodash";

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
class KYCSingleMsg extends Component {
  state = {
    userComment: "",
    kycComment: "",
    searchMember: "",
    memberList: members,
    selectedMembers: [],
    showDropDown: false,
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
                      <a href="#">KYC/AML &nbsp;</a> <span> &nbsp;&nbsp; </span>
                      <span>Enquiry </span>
                      <span> &nbsp;&nbsp; </span>
                      <span>New Message </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="create-message">
              <div className="create-input">
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
                  onFocus={() => this.handleshowDropDown(true)}
                  placeholder="Search member of PlutoClear's Business Team"
                  className="submitted-dropbtn"
                  value={this.state.searchMember}
                  onChange={this.handleSearchMember}
                />
                <span className="create-adduser">
                  <img
                    src="./images/add-user.png"
                    alt="add user"
                    onclick="userlistFunction()"
                    className="submitted-dropbtn"
                  />
                </span>
                <div
                  id="userDropdownList"
                  className="submitted-dropdown-content create-user-dropdown-details.show"
                >
                  {this.state.showDropDown ? (
                    <ul className="createuserlistscrollable">
                      {this.state.memberList.map((member) => (
                        <li onClick={() => this.handleSelectMember(member)}>
                          <div className="create-drop-user-nm">
                            <div className="create-drop-user-pic">
                              <img src={member.imagePath} alt="user" />
                              <span className="create-userd-active-dot"></span>
                            </div>
                            <div className="create-drop-user-nm-right">
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
              <div className="create-input">
                <input type="text" placeholder="Enter Subject" />
              </div>
              <div className="submitted-write-box">
                <div className="create-user-txt">
                  <textarea
                    placeholder="Enter New Message"
                    className="create-user-textarea"
                    value={this.state.userComment}
                    onChange={this.handleuserCommentChange}
                  ></textarea>
                  <div className="create-bottom">
                    <div className="create-msg-limit">
                      <span>{this.state.userComment.length}/500</span>
                      <span>
                        <a href="#">
                          <img src="./images/delete.png" alt="delete" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="create-submitted-edit">
                  <div className="create-edit-left d-flex">
                    <span>
                      <img
                        src="./images/formatting.png"
                        alt="edit"
                        className="rgl-img"
                      />
                      <img
                        src="images/icon-formatting-h.png"
                        alt="edit"
                        className="hover-img"
                      />
                    </span>
                    <span>
                      <img
                        src="./images/attach.png"
                        alt="edit"
                        className="rgl-img"
                      />
                      <img
                        src="./images/icon-attach-h.png"
                        alt="edit"
                        className="hover-img hover-img-bg"
                      />
                    </span>
                    <span>
                      <img
                        src="./images/link.png"
                        alt="edit"
                        className="rgl-img"
                      />
                      <img
                        src="images/icon-link-h.png"
                        alt="edit"
                        className="hover-img hover-img-bg"
                        data-toggle="modal"
                        data-target="create-link"
                      />
                    </span>
                    <span>
                      <img
                        src="./images/emoji.png"
                        alt="edit"
                        className="rgl-img"
                      />
                      <img
                        src="./images/icon-emoji-h.png"
                        alt="edit"
                        className="hover-img"
                      />
                    </span>
                    <span>
                      <img
                        src="./images/photo.png"
                        alt="edit"
                        className="rgl-img"
                      />
                      <img
                        src="images/icon-photo-h.png"
                        alt="edit"
                        className="hover-img"
                        data-toggle="modal"
                        data-target="create-image"
                      />
                    </span>
                  </div>
                  <div className="create-edit-right">
                    <a href="#" className="b-single-new mr-md-2">
                      draft
                    </a>
                    <a href="#" className="b-single-new mr-md-2">
                      cancel
                    </a>
                    <a href="#" className="b-single-new">
                      send
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KYCSingleMsg;

import React from "react";
import { render } from "react-dom";
import "./create-message.css";
import User1 from "./images/userpic1.png";
import User2 from "./images/userpic2.png";
import User3 from "./images/userpic3.png";
import User4 from "./images/userpic4.png";
import Delete from "./images/delete.png";
import Icon1 from "../kyc-messaging-submitted/images/edit-icon1.png";
import Icon2 from "../kyc-messaging-submitted/images/edit-icon2.png";
import Icon3 from "../kyc-messaging-submitted/images/edit-icon3.png";
import Icon4 from "../kyc-messaging-submitted/images/edit-icon4.png";
import Icon5 from "../kyc-messaging-submitted/images/edit-icon5.png";
import Add from "./images/add-user.png";
import userpic1 from "./images/userpic1.png";
import userpic2 from "./images/userpic2.png";
import userpic3 from "./images/userpic3.png";
import userpic4 from "./images/userpic4.png";
import _ from "lodash";
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

export default class createGroupMessage extends React.Component {
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
      <div>
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="content-head pt-3 pb-0 col-12">
                <div class="left-content">
                  <div class="row">
                    <h4 class="mb-0">
                      <a href="#"> KYC / AML & nbsp; </a>{" "}
                      <span> &nbsp;&nbsp; </span> <span> Enquiry </span>
                      <span> &nbsp;&nbsp; </span> <span> New Message </span>
                    </h4>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="create-message">
              <div class="create-input">
                {" "}
                {this.state.selectedMembers.map((item) => (
                  <div className="chip">
                    {" "}
                    {item.name}
                    <span
                      className="closebtn"
                      onClick={() => this.handleCloseBtn(item)}
                    >
                      {" x"}
                      {""}
                    </span>{" "}
                  </div>
                ))}{" "}
                <input
                  type="text"
                  placeholder="Search member of PlutoClear's Business Team"
                  onFocus={() => this.handleshowDropDown(true)}
                  class="submitted-dropbtn"
                  name="searchMeamber"
                  value={this.state.searchMember}
                  onChange={this.handleSearchMember}
                />
                <span class="create-adduser">
                  {" "}
                  <img
                    src={Add}
                    alt="add user"
                    onclick="userlistFunction()"
                    class="submitted-dropbtn"
                  />{" "}
                </span>
                <div
                  id="userDropdownList"
                  class="submitted-dropdown-content create-user-dropdown-details.show"
                >
                  {" "}
                  {this.state.showDropDown ? (
                    <ul class="createuserlistscrollable">
                      {" "}
                      {this.state.memberList.map((member) => (
                        <li onClick={() => this.handleSelectMember(member)}>
                          <div className="drop-user-nm">
                            <div className="drop-user-pic">
                              <img src={member.imagePath} alt="user" />
                              <span className="userd-active-dot"> </span>
                            </div>{" "}
                            <div className="drop-user-nm-right">
                              <h3> {member.name} </h3> <p> {member.role} </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : null}{" "}
                </div>{" "}
              </div>{" "}
              <div class="create-input">
                <input type="text" placeholder="Enter Subject" />
              </div>{" "}
              <div class="submitted-write-box">
                <div class="create-user-txt">
                  <textarea
                    placeholder="Enter New Message"
                    class="create-user-textarea"
                    value={this.state.kycComment}
                    onChange={this.handlekycCommentChange}
                  >
                    {" "}
                  </textarea>{" "}
                  <div class="create-bottom">
                    <div class="create-msg-limit">
                      {" "}
                      <span>
                        {" "}
                        {this.state.kycComment.length}
                        /500
                      </span>{" "}
                      <span>
                        {" "}
                        <a href="#">
                          {" "}
                          <img src={Delete} alt="delete" />{" "}
                        </a>
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="create-submitted-edit">
                  <div class="create-edit-left d-flex">
                    <span>
                      {" "}
                      <img src={Icon1} alt="edit" class="rgl-img" />{" "}
                      <img src={Icon1} alt="edit" class="hover-img" />{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      <img src={Icon2} alt="edit" class="rgl-img" />{" "}
                      <img
                        src={Icon2}
                        alt="edit"
                        class="hover-img hover-img-bg"
                      />{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      <img src={Icon3} alt="edit" class="rgl-img" />
                      <img
                        src={Icon3}
                        alt="edit"
                        class="hover-img hover-img-bg"
                        data-toggle="modal"
                        data-target="create-link"
                      />{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      <img src={Icon4} alt="edit" class="rgl-img" />{" "}
                      <img src={Icon4} alt="edit" class="hover-img" />{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      <img src={Icon5} alt="edit" class="rgl-img" />
                      <img
                        src={Icon5}
                        alt="edit"
                        class="hover-img"
                        data-toggle="modal"
                        data-target="create-image"
                      />{" "}
                    </span>
                  </div>{" "}
                  <div class="create-edit-right">
                    <a href="#" class="b-create-new mr-md-2">
                      {" "}
                      draft{" "}
                    </a>
                    <a href="#" class="b-create-new mr-md-2">
                      cancel
                    </a>{" "}
                    <a href="#" class="b-create-new">
                      {" "}
                      send{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

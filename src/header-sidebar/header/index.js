import React, { Component } from 'react';
import logo from './images/Logo.png';
import searchIcon from './images/searchIcon.svg';
import refresh from './images/loader.svg';
import share from './images/share.svg';
import upArrow from './images/upArrow.svg';
import inbox from './images/messageBox.svg';
import notificaion from './images/bell.svg';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  userLoginAction,
  userRoleAction,
  userDetailAction,
  userIdAction,
} from '../../auth/auth-actions/auth.actions';
import { headAccess, popUp } from '../head-actions/head.actions';
import user from './images/user.svg';
import sideIcon from './images/sideBar.png';
import sidebarIcon from './images/sidebarA.png';
import sideX from './images/sideX.png';
import dropdown from './images/downArrow.svg';

import { role } from './../../auth/auth-actions/auth.actions';
import axios from 'axios';
import { connect } from 'react-redux';

import Swal from 'sweetalert2';
import { getItem } from '../../utils/localStore';
import { BASE_URL } from '../../app.constants';

import $ from 'jquery';
import js from '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './header-sidebar.css';
class HeaderSidebar extends Component {
  state = {
    isHovered: false,
    isHovered1: false,
    isHovered2: false,
    isActive: false,
    sidebar: false,
    data: null,
    image: '',
  };
  comingSoon = () => {
    this.props.popUp(true);
    console.log('popUp is ', this.props.headReducer.popUp);
  };
  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };
  handleMouseEnter1 = () => {
    this.setState({ isHovered1: true });
  };
  handleMouseEnter2 = () => {
    this.setState({ isHovered2: true });
  };
  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };
  handleMouseLeave1 = () => {
    this.setState({ isHovered1: false });
  };
  handleMouseLeave2 = () => {
    this.setState({ isHovered2: false });
  };
  componentDidMount() {
    console.log('value at that moment is ', this.props.userReducer.role);
    //Highly Access People
    // "mikael@radicalstack.com"

    const email = [
      'vinodkumawat1990@gmail.com',
      'mikael@radicalstack.com',
      'humayunshahid7@gmail.com',
      'iamdharamd@gmail.com',
      'tbabin015@gmail.com',
      'ted@yopmail.com',
    ];

    let TOKEN = getItem('accessToken');
    axios({
      method: 'GET',
      url:
        localStorage.getItem('role') == 'B'
          ? BASE_URL + '/business/getBusinessProfile'
          : BASE_URL + '/personal/getPersonalProfile',
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data.data });
        //this.props.headAccess(email.includes(response.data.data.email));
        this.props.headAccess(true);
        this.props.userIdAction(this.state.data.userid);
        if (this.state.data.profileImage) {
          let image = this.state.data.profileImage.slice(19);
          console.log('here is another thing', image);
          this.setState({ image });
        }
      })
      .catch((error) => {
        console.log('error is here', error);
      });

    //   axios.get(`${BASE_URL}/countries`)
    // .then(response => {
    //   this.setState({ country: response.data.data });
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }

  Logout = (event) => {
    event.preventDefault();
    $('.loading-container').fadeIn();
    let TOKEN = getItem('accessToken');
    axios({
      method: 'PUT',
      url: `${BASE_URL}/user/logout`,
      headers: {
        'Content-Type': 'application/json',
        authorization: TOKEN,
      },
    })
      .then((response) => {
        this.props.userLoginAction(false);
        $('.loading-container').fadeOut();
        localStorage.removeItem('role');
        this.props.history.push('/login');
        Swal.fire({
          type: 'Success',
          text: 'Logout Successfully!',
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 406 || error.response.status === 404) {
          Swal.fire({
            type: 'error',
            text: error.response.data.message,
          });
        } else {
          Swal.fire({
            type: 'error',
            text: 'Server Error!!!, Please Try After Sometime.',
          });
        }
        $('.loading-container').fadeOut();
      });
  };
  render() {
    console.log('props value is ', this.props);
    return (
      <div className="container-fluid dashboard-content">
        <header className=" fixed-top">
          <div className="row">
            <div className="col-6  header1 col-xl-7">
              <div className="d-flex">
                <div
                  className="sideBarIcon"
                  onClick={() => {
                    this.props.onSideBar();
                    this.setState({ sidebar: !this.state.sidebar });
                  }}
                >
                  {
                    !this.state.sidebar ? (
                      <img
                        src={sideIcon}
                        alt="side icon"
                        className="mr-3 sideIcon sideIconBefore"
                      />
                    ) : (
                      <img
                        src={sidebarIcon}
                        alt="side icon"
                        className="mr-3 sideIcon"
                      />
                    )
                    //  <div>
                    //     <img src={sideX} alt="side icon" className="mr-3 sideIcon d-none " />
                    //     </div>
                  }
                </div>
                <a href="/home">
                  <img
                    src={logo}
                    alt="logo"
                    className=""
                    style={{ width: '56px', height: '43px' }}
                  />
                </a>
              </div>
              <div className="search-input d-none d-lg-flex  mr-5 ">
                <input placeholder="Fund, ISIN, Keyword" />
                <img
                  src={searchIcon}
                  alt="search icon"
                  onClick={this.comingSoon}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            <div className="col-6 col-xl-5">
              <div className="row">
                <div className="d-none d-lg-flex">
                  <div className="pl-4 pr-4 bd-left" onClick={this.comingSoon}>
                    <a href="#">
                      <img src={refresh} alt="refresh icon" />
                    </a>
                  </div>
                  <div className="pl-3 pr-4" onClick={this.comingSoon}>
                    <a href="#">
                      <img src={share} alt="share icon" />
                    </a>
                  </div>
                  <div className="pl-3 mr-4 " onClick={this.comingSoon}>
                    <a href="#">
                      <img src={upArrow} alt="up-arow icon" />
                    </a>
                  </div>
                </div>
                <div className="pl-0 d-flex bd-left ml-0 mr-0 pl-0">
                  <div className="position-relative notificaion-dropdown dropdown">
                    <a href="#" data-toggle="dropdown">
                      <img src={inbox} alt="inbox" />
                    </a>
                    <span className="inbox-spn">1</span>
                    <ul className="dropdown-menu">
                      <li>hi </li>
                      <li>hello</li>
                      <li>hi</li>
                    </ul>
                  </div>
                  <div className="position-relative  notificaion-dropdown dropdown">
                    <a href="#" data-toggle="dropdown">
                      <img src={notificaion} alt="notificaion" />
                    </a>
                    <span className="notificaion-spn ml-2">8</span>
                    <ul className="dropdown-menu">
                      <li>
                        consectetur adipiscing elit, sed do eiusmo Tempor
                        incididunt ut labore .sed do eiusmod tempor.
                      </li>
                      <li> dolor sit amet, consecta aliqua.</li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed.
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex user-img">
                    <div className="position-relative">
                      <div className="user-img">
                        {/* {this.state.data &&(typeof(this.state.data.profileImage) !== 'undefined')? */}
                        {/* <img src={ BASE_URL + `/images/${this.state.image}`} alt="user image" className="img-fluid image-header" />: */}
                        <img
                          src={user}
                          alt="user image"
                          className="img-fluid image-grey"
                        />
                        {/* } */}
                      </div>
                      <span className="active-dot"></span>
                    </div>
                    <div className="account-d dropdown">
                      <ul className="dropdown-menu">
                        {/* className="active" */}
                        <Link
                          style={{ color: 'black' }}
                          to={
                            this.props.headReducer.headAccess
                              ? '/MyProfile'
                              : '#'
                          }
                          onClick={
                            this.props.headReducer.headAccess
                              ? null
                              : this.comingSoon
                          }
                        >
                          <li
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.01894 4.53906C6.61942 4.53906 5.48466 5.67381 5.48466 7.07334C5.48466 8.47287 6.61942 9.60762 8.01894 9.60762C9.41847 9.60762 10.5532 8.47287 10.5532 7.07334C10.5532 5.67381 9.41847 4.53906 8.01894 4.53906ZM8.01894 5.29556C9.0024 5.29556 9.79672 6.08989 9.79672 7.07334C9.79672 8.05679 9.0024 8.85112 8.01894 8.85112C7.03549 8.85112 6.20334 8.05679 6.20334 7.07334C6.20334 6.08989 7.03549 5.29556 8.01894 5.29556Z"
                                fill={
                                  this.state.isHovered ? 'white' : '#52616B'
                                }
                              />
                              <path
                                d="M8.01891 0C3.59338 0 0 3.59338 0 7.98109C0 12.4066 3.59338 16 8.01891 16C12.4066 16 16 12.4066 16 7.98109C16 3.59338 12.4066 0 8.01891 0ZM8.01891 0.794326C11.9905 0.794326 15.2057 4.00946 15.2057 7.98109C15.2057 11.9527 11.9905 15.1678 8.01891 15.1678C4.04728 15.1678 0.832151 11.9527 0.832151 7.98109C0.832151 4.00946 4.04728 0.794326 8.01891 0.794326Z"
                                fill={
                                  this.state.isHovered ? 'white' : '#52616B'
                                }
                              />
                              <path
                                d="M9.9859 9.87305H6.05209C4.76604 9.87305 3.74477 10.8943 3.70694 12.1426L4.42562 12.7856V12.2182C4.42562 11.3482 5.14429 10.6295 6.05209 10.6295H9.9859C10.8559 10.6295 11.5746 11.3482 11.5746 12.2182V12.7856L12.3311 12.1426C12.2554 10.8943 11.2341 9.87305 9.9859 9.87305Z"
                                fill={
                                  this.state.isHovered ? 'white' : '#52616B'
                                }
                              />
                            </svg>
                            <span className="ml-3">My Profile</span>
                          </li>
                        </Link>
                        <li
                          style={{ cursor: 'pointer' }}
                          onClick={this.comingSoon}
                          onMouseEnter={this.handleMouseEnter1}
                          onMouseLeave={this.handleMouseLeave1}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.00012 3.85156C5.71276 3.85156 3.85205 5.71227 3.85205 7.99963C3.85205 10.287 5.71276 12.1477 8.00012 12.1477C10.2875 12.1477 12.1482 10.287 12.1482 7.99963C12.1482 5.71227 10.2875 3.85156 8.00012 3.85156ZM8.00012 11.5551C6.03957 11.5551 4.44463 9.96019 4.44463 7.99963C4.44463 6.03908 6.03957 4.44414 8.00012 4.44414C9.96068 4.44414 11.5556 6.03908 11.5556 7.99963C11.5556 9.96019 9.96068 11.5551 8.00012 11.5551Z"
                              fill={this.state.isHovered1 ? 'white' : '#52616B'}
                            />
                            <path
                              d="M15.176 6.22211H14.5781C14.4255 5.6556 14.2012 5.11339 13.9085 4.60525L14.331 4.18274C14.4865 4.02718 14.5722 3.82008 14.5722 3.60023C14.5722 3.38009 14.4865 3.17327 14.331 3.01743L12.982 1.66841C12.6709 1.3576 12.1284 1.35701 11.8167 1.66841L11.3942 2.09092C10.8857 1.79849 10.3438 1.57419 9.7776 1.4216V0.823688C9.7776 0.369475 9.40812 0 8.95391 0H7.0458C6.59158 0 6.22211 0.369475 6.22211 0.823688V1.4216C5.6559 1.57419 5.11398 1.79849 4.60525 2.09122L4.18274 1.66871C3.87134 1.35701 3.32853 1.3576 3.01743 1.66871L1.66841 3.01772C1.51286 3.17327 1.42723 3.38038 1.42723 3.60053C1.42723 3.82037 1.51286 4.02718 1.66841 4.18303L2.09092 4.60554C1.79849 5.11339 1.5739 5.6556 1.4216 6.22211H0.823688C0.369475 6.22211 0 6.59158 0 7.0458V8.95361C0 9.40812 0.369475 9.7776 0.823688 9.7776H1.4216C1.57419 10.3438 1.79849 10.8857 2.09122 11.3945L1.66871 11.817C1.51316 11.9725 1.42753 12.1796 1.42753 12.3995C1.42753 12.6196 1.51316 12.8264 1.66871 12.9823L3.01772 14.3313C3.32883 14.6427 3.87163 14.643 4.18303 14.3313L4.60554 13.9088C5.11428 14.2012 5.65619 14.4258 6.2224 14.5784V15.1763C6.2224 15.6305 6.59188 16 7.04609 16H8.95391C9.40812 16 9.7776 15.6305 9.7776 15.1763V14.5784C10.3438 14.4258 10.8857 14.2015 11.3945 13.9088L11.817 14.3313C12.1287 14.643 12.6709 14.6424 12.9823 14.3313L14.3313 12.9823C14.4868 12.8267 14.5725 12.6196 14.5725 12.3995C14.5725 12.1796 14.4868 11.9728 14.3313 11.817L13.9088 11.3945C14.2012 10.8857 14.4258 10.3438 14.5784 9.7776H15.1763C15.6305 9.7776 16 9.40812 16 8.95391V7.0458C15.9997 6.59158 15.6302 6.22211 15.176 6.22211ZM15.4071 8.95391C15.4071 9.08131 15.3034 9.18502 15.176 9.18502H14.1117L14.0584 9.41405C13.904 10.0769 13.6439 10.7059 13.2842 11.2839L13.1598 11.4836L13.912 12.2359C14.0024 12.3263 14.0024 12.473 13.912 12.563L12.563 13.912C12.473 14.0021 12.3263 14.0027 12.2359 13.912L11.4836 13.1598L11.2839 13.2842C10.7062 13.6439 10.0771 13.9043 9.41405 14.0584L9.18502 14.1117V15.176C9.18502 15.3034 9.08131 15.4071 8.95391 15.4071H7.0458C6.91839 15.4071 6.81469 15.3034 6.81469 15.176V14.1117L6.58566 14.0584C5.92285 13.904 5.29383 13.6439 4.71576 13.2842L4.51606 13.1598L3.76378 13.912C3.67312 14.0027 3.52645 14.0021 3.43668 13.912L2.08767 12.563C1.9973 12.4727 1.9973 12.326 2.08767 12.2359L2.83995 11.4836L2.71551 11.2839C2.35581 10.7062 2.09537 10.0771 1.9413 9.41405L1.88797 9.18502H0.823688C0.696283 9.18502 0.592582 9.08131 0.592582 8.95391V7.0458C0.592582 6.91839 0.696283 6.81469 0.823688 6.81469H1.88797L1.9413 6.58566C2.09566 5.92256 2.35581 5.29353 2.71551 4.71576L2.83995 4.51606L2.08767 3.76378C1.9973 3.67341 1.9973 3.52675 2.08767 3.43668L3.43668 2.08767C3.52675 1.99759 3.67341 1.997 3.76378 2.08767L4.51606 2.83995L4.71576 2.71551C5.29353 2.35581 5.92256 2.09537 6.58566 1.9413L6.81469 1.88797V0.823688C6.81469 0.696283 6.91839 0.592582 7.0458 0.592582H8.95361C9.08131 0.592582 9.18502 0.696283 9.18502 0.823688V1.88797L9.41405 1.9413C10.0769 2.09566 10.7059 2.35581 11.2839 2.71551L11.4836 2.83995L12.2359 2.08767C12.3266 1.997 12.4733 1.99759 12.563 2.08767L13.912 3.43668C14.0024 3.52705 14.0024 3.67371 13.912 3.76378L13.1598 4.51606L13.2842 4.71576C13.6439 5.29324 13.9043 5.92226 14.0584 6.58566L14.1117 6.81469H15.176C15.3034 6.81469 15.4071 6.91839 15.4071 7.0458V8.95391Z"
                              fill={this.state.isHovered1 ? 'white' : '#52616B'}
                            />
                            <path
                              d="M8.00002 5.03711C6.36627 5.03711 5.03711 6.36627 5.03711 8.00002C5.03711 9.63377 6.36627 10.9629 8.00002 10.9629C9.63377 10.9629 10.9629 9.63377 10.9629 8.00002C10.9629 6.36627 9.63377 5.03711 8.00002 5.03711ZM8.00002 10.3703C6.69308 10.3703 5.62969 9.30696 5.62969 8.00002C5.62969 6.69308 6.69308 5.62969 8.00002 5.62969C9.30696 5.62969 10.3703 6.69308 10.3703 8.00002C10.3703 9.30696 9.30696 10.3703 8.00002 10.3703Z"
                              fill={this.state.isHovered1 ? 'white' : '#52616B'}
                            />
                          </svg>
                          <span className="ml-3">Setting</span>
                        </li>
                        <li
                          onClick={this.Logout}
                          style={{ cursor: 'pointer' }}
                          onMouseEnter={this.handleMouseEnter2}
                          onMouseLeave={this.handleMouseLeave2}
                        >
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.97906 0C4.27225 0 1.13089 2.53403 0.230367 5.98953C0.230367 6.01047 0.230367 6.01047 0.230367 6.03141C0.188482 6.15707 0.167539 6.30367 0.146597 6.45026C0.146597 6.49215 0.125655 6.55497 0.125655 6.59686C0.104712 6.70157 0.0837698 6.80628 0.0837698 6.911C0.0837698 6.97382 0.0628273 7.01571 0.0628273 7.07854C0.0418849 7.18325 0.041885 7.28796 0.041885 7.41361C0.041885 7.4555 0.0418849 7.49738 0.0209425 7.56021C0.0209425 7.70681 0 7.87435 0 8.02094C0 8.18848 7.95769e-08 8.33508 0.0209425 8.48168C0.0209425 8.52356 0.0209426 8.56544 0.041885 8.62827C0.041885 8.73298 0.0628273 8.85864 0.0837698 8.96335C0.0837698 9.02618 0.104712 9.06806 0.104712 9.10995C0.125654 9.21466 0.146597 9.31937 0.146597 9.42408C0.146597 9.46597 0.167539 9.5288 0.167539 9.57068C0.188482 9.71728 0.230367 9.84293 0.251309 9.98953C0.251309 10.0105 0.251309 10.0105 0.251309 10.0314C1.15183 13.466 4.27225 16.0209 8 16.0209C12.4188 16.0209 16 12.4398 16 8.02094C16 3.60209 12.3979 0 7.97906 0ZM7.22513 9.54974H0.921466C0.921466 9.5288 0.921466 9.5288 0.900524 9.50785C0.879581 9.44503 0.879581 9.3822 0.858639 9.31937C0.837696 9.25655 0.837696 9.19372 0.816754 9.15183C0.795812 9.06806 0.795812 9.00524 0.795812 8.92147C0.795812 8.87958 0.774869 8.8377 0.774869 8.77487C0.774869 8.6911 0.753927 8.58639 0.753927 8.50262C0.753927 8.46073 0.753927 8.43979 0.753927 8.39791C0.753927 8.27225 0.753927 8.1466 0.753927 8.02094C0.753927 7.89529 0.753927 7.76963 0.753927 7.64398C0.753927 7.60209 0.753927 7.58115 0.753927 7.53927C0.753927 7.4555 0.774869 7.35079 0.774869 7.26702C0.774869 7.22513 0.795812 7.1623 0.795812 7.12042C0.795812 7.03665 0.816754 6.97382 0.816754 6.89005C0.816754 6.82723 0.837696 6.7644 0.858639 6.70157C0.879581 6.63874 0.879581 6.57592 0.900524 6.51309C0.900524 6.49215 0.900523 6.49215 0.921466 6.4712H7.22513C7.43455 6.4712 7.60209 6.30367 7.60209 6.09424V4.62827L11.0576 7.97906C11.0785 8 11.0785 8.02094 11.0995 8.02094C11.0995 8.02094 11.0995 8.04189 11.0576 8.06283L7.62304 11.3927V9.9267C7.62304 9.71728 7.43455 9.54974 7.22513 9.54974ZM7.97906 15.2461C4.79581 15.2461 2.09424 13.1728 1.13089 10.3246H6.84817V11.9791C6.84817 12 6.84817 12 6.84817 12.0209C6.89005 12.3979 7.14136 12.5236 7.32984 12.5236C7.56021 12.5236 7.70681 12.377 7.76963 12.3141L11.6021 8.60733C11.8325 8.39791 11.8743 8.16754 11.8743 8.02094C11.8743 7.70681 11.6859 7.49738 11.6021 7.41361L7.74869 3.68586C7.68586 3.64398 7.53927 3.47644 7.3089 3.47644C7.12042 3.47644 6.89005 3.60209 6.82722 3.93717C6.82722 3.95812 6.82722 3.97906 6.82722 4V5.71728H1.13089C2.09424 2.84817 4.79581 0.774869 7.97906 0.774869C11.9581 0.774869 15.2042 4.02094 15.2042 8C15.2042 11.9791 11.9581 15.2461 7.97906 15.2461Z"
                              fill={this.state.isHovered2 ? 'white' : '#52616B'}
                            />
                          </svg>
                          <span className="ml-3">Logout</span>
                        </li>
                      </ul>

                      <button
                        className="btn chart-select"
                        type="button"
                        data-toggle="dropdown"
                      >
                        {this.state.data ? (
                          <span className="userName">
                            {this.state.data.first_name}
                            {/* {this.state.data.last_name} */}
                          </span>
                        ) : (
                          <span className="userName">---- ----</span>
                        )}
                        <span className="ml-2">
                          <img src={dropdown} />
                        </span>
                      </button>
                    </div>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  popUp: (payload) => dispatch(popUp(payload)),
  headAccess: (payload) => dispatch(headAccess(payload)),
  userLoginAction: (payload) => dispatch(userLoginAction(payload)),
  userIdAction: (payload) => dispatch(userIdAction(payload)),
  userRoleAction: (payload) => dispatch(userRoleAction(payload)),
  userDetailAction: (payload) => dispatch(userDetailAction(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderSidebar));

import React from "react";
import "./css/style.css";
import WorldMap from "./images/WorldMap.png";
import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";
import Icon4 from "./images/icon4.png";
import Icon5 from "./images/icon5.png";
import Icon6 from "./images/icon6.png";

export default class IndividualKycOverView extends React.Component {
    render() {
        return (
            <div class="row pb-4">
                <div class="col-md-12">
                    <div class="row">
                        <div class="content-head pt-0 pb-0 col-12">
                            <div class="individual-overview-left-content">
                                <div class="row">
                                    <h4 class="mb-0">
                                        <span>Overview</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-12 mt-4">
                            <div class="individual-overview-balance">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="individual-overview-worlmap">
                                            <div class="individual-overview-balance-top">
                                                <div>
                                                    <h2>CURRENT Balance</h2>
                                                    <div class="individual-overview-balance-amount">
                                                        £68000
                                                    </div>
                                                </div>
                                                <div class="individual-overview-connected">
                                                    <span>Connected</span>
                                                </div>
                                            </div>
                                            <div class="individual-overview-balance-map">
                                                <img
                                                    src={WorldMap}
                                                    class="img-fluid"
                                                    alt="map"
                                                />
                                            </div>
                                            <div class="individual-overview-live-status">
                                                <div class="individual-overview-protocol">
                                                    <h3>lIVE nETWORK sTATUS</h3>
                                                    <p>Up and running!</p>
                                                    <p>Protocol version: 10</p>
                                                    <p>
                                                        Last ledger: #22903386
                                                        closed ~5s ago in 5s.
                                                    </p>
                                                    <p>
                                                        Average ledger close
                                                        time in the last 200
                                                        ledgers: 5.56s.
                                                    </p>
                                                </div>
                                                <div class="individual-overview-map-see-all">
                                                    <a href="#" class="btn">
                                                        SEE ALL
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-12 pl-0 pr-0">
                            <div class="row">
                                <div class="col-md-6 col-12 mt-4">
                                    <div class="individual-overview-asset-d">
                                        <div class="row">
                                            <div class="col-12 mt-2">
                                                <div class="individual-overview-assets-value">
                                                    <div>ASSETS VALUE</div>
                                                    <div class="individual-overview-see-all">
                                                        <a href="#">SEE ALL</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="individual-overview-assets">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <img
                                                                src={Icon1}
                                                                alt="icon"
                                                            />{" "}
                                                            KSS
                                                        </span>
                                                        <span>£16,700</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <img
                                                                src={Icon2}
                                                                alt="icon"
                                                            />{" "}
                                                            PPG
                                                        </span>
                                                        <span>£2400</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <img
                                                                src={Icon3}
                                                                alt="icon"
                                                            />{" "}
                                                            LLJ
                                                        </span>
                                                        <span>£980</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <img
                                                                src={Icon4}
                                                                alt="icon"
                                                            />{" "}
                                                            QWA
                                                        </span>
                                                        <span>£8600</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <img
                                                                src={Icon5}
                                                                alt="icon"
                                                            />{" "}
                                                            SBX
                                                        </span>
                                                        <span>£7842</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <img
                                                                src={Icon6}
                                                                alt="icon"
                                                            />{" "}
                                                            RQNT
                                                        </span>
                                                        <span>£22,890</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12 mt-4">
                                    <div class="individual-overview-halo-d">
                                        <div class="row">
                                            <div class="col-12 mt-2">
                                                <div class="individual-overview-assets-value">
                                                    <div>
                                                        HALO STABLE COINS
                                                        Balances
                                                    </div>
                                                    <div class="individual-overview-see-all">
                                                        <a href="#">SEE ALL</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="individual-overview-halo">
                                                <ul>
                                                    <li>
                                                        <span>GBP</span>
                                                        <span>3400</span>
                                                    </li>
                                                    <li>
                                                        <span>USD</span>
                                                        <span>15,789</span>
                                                    </li>
                                                    <li>
                                                        <span>EUR</span>
                                                        <span>4,589</span>
                                                    </li>
                                                    <li>
                                                        <span>AUD</span>
                                                        <span>20,678</span>
                                                    </li>
                                                    <li>
                                                        <span>HKD</span>
                                                        <span>67,890</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12 pt-4">
                                    <div class="individual-overview-asset-portfolio pt-2">
                                        <div class="row">
                                            <div class="individual-overview-assets-port">
                                                <div>Assets Portfolio</div>
                                                <div class="individual-overview-see-all">
                                                    <a href="#">SEE ALL</a>
                                                </div>
                                            </div>
                                            <div class="col-12 justify-content-start">
                                                <div class="individual-overview-asset-data">
                                                    <ul>
                                                        <li>
                                                            <div class="individual-overview-blue-eiffa">
                                                                <div class="individual-overview-prog">
                                                                    <img src="images/progress1.png" />
                                                                </div>
                                                                <div class="individual-overview-blue-persan">
                                                                    <h2>29%</h2>
                                                                </div>
                                                            </div>
                                                            <div class="asst-data-right">
                                                                EIFFA
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="individual-overview-blue-eiffa">
                                                                <div class="individual-overview-prog">
                                                                    <img src="images/progress2.png" />
                                                                </div>
                                                                <div class="individual-overview-blue-persan">
                                                                    <h2>7%</h2>
                                                                </div>
                                                            </div>
                                                            <div class="asst-data-right">
                                                                Goodman
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="individual-overview-blue-eiffa">
                                                                <div class="individual-overview-prog">
                                                                    <img src="images/progress3.png" />
                                                                </div>
                                                                <div class="individual-overview-blue-persan">
                                                                    <h2>5%</h2>
                                                                </div>
                                                            </div>
                                                            <div class="asst-data-right">
                                                                Chugai
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12 pt-4">
                                    <div class="individual-overview-send-lc-network pt-2">
                                        <div class="individual-overview-send-req">
                                            <div class="individual-overview-send-req-left">
                                                Send / Request{" "}
                                            </div>
                                            <div>
                                                <div class="individual-overview-dropdown">
                                                    <div>
                                                        <a
                                                            onclick="selectassetFunction()"
                                                            class="individual-overview-dropbtn"
                                                        >
                                                            SELECT ASSET
                                                        </a>
                                                    </div>
                                                    <div
                                                        id="individual-overviewDropdownList"
                                                        class="individual-overview-dropdown-content"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <a href="javascript:void(0)">
                                                                    TOKEN
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)">
                                                                    HALO
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="individual-overview-send-network-form">
                                            <div class="row d-flex justify-content-between">
                                                <div class="form-group individual-overview-wallet col-md-5 pl-0 pr-1">
                                                    <label for="wallet"></label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="wallet"
                                                        placeholder="Enter Type"
                                                    />
                                                </div>
                                                <div class="form-group individual-overview-amount col-md-7 pl-1 pr-0">
                                                    <label for="amount"></label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="amount"
                                                        placeholder="Enter Volume"
                                                    />
                                                </div>
                                                <div class="form-group individual-overview-send-to col-md-12 pl-0 pr-0">
                                                    <label for="send-to"></label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="send-to"
                                                        placeholder="Enter your email here"
                                                    />
                                                </div>

                                                <div class="form-group individual-overview-wallet col-md-12 pl-0 pr-0">
                                                    <div class="individual-overview-send-lc-network-btn">
                                                        <div class="individual-overview-send-but">
                                                            <button
                                                                type="button"
                                                                class="b-individual-new  mr-md-3"
                                                                onclick="Validate()"
                                                            >
                                                                SEND
                                                            </button>
                                                        </div>
                                                        <div class="individual-overview-send-but">
                                                            <button
                                                                type="button"
                                                                class="b-individual-new "
                                                                onclick="Validate()"
                                                            >
                                                                REQUEST
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5 col-12">
                            <div class="row">
                                <div class="col-md-6 pl-md-0">
                                    <div class="individual-overview-card-content">
                                        <div class="individual-overview-right-img">
                                            <img
                                                src="images/aml-img1.png"
                                                alt="icon"
                                            />
                                            <div class="individual-overview-left-txt">
                                                KYC/AML{" "}
                                            </div>
                                        </div>

                                        <div class="h-100">
                                            <a
                                                href="#"
                                                class="individual-overview-click-next"
                                            >
                                                <img src="images/Vector1.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 pr-md-0">
                                    <div class="individual-overview-card-content">
                                        <div class="individual-overview-right-img">
                                            <img
                                                src="images/aml-img2.png"
                                                alt="icon"
                                            />
                                            <div class="individual-overview-left-txt">
                                                <span>Voting System</span>
                                                General Meeting Proxy Voting{" "}
                                            </div>
                                        </div>

                                        <div class="h-100">
                                            <a
                                                href="#"
                                                class="individual-overview-click-next"
                                            >
                                                <img src="images/Vector1.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mt-2 pl-md-0">
                                    <div class="individual-overview-card-content">
                                        <div class="individual-overview-right-img">
                                            <img
                                                src="images/aml-img3.png"
                                                alt="icon"
                                            />
                                            <div class="individual-overview-left-txt">
                                                Management Tax Service
                                            </div>
                                        </div>

                                        <div class="h-100">
                                            <a
                                                href="#"
                                                class="individual-overview-click-next"
                                            >
                                                <img src="images/Vector1.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mt-2 pr-md-0">
                                    <div class="individual-overview-card-content">
                                        <div class="individual-overview-right-img">
                                            <img
                                                src="images/aml-img4.png"
                                                alt="icon"
                                            />
                                            <div class="individual-overview-left-txt">
                                                Entitlement & Dividend{" "}
                                            </div>
                                        </div>

                                        <div class="h-100">
                                            <a
                                                href="#"
                                                class="individual-overview-click-next"
                                            >
                                                <img src="images/Vector1.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-12 pl-0 pr-0">
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <div class="individual-overview-decentralize">
                                        <div class="row">
                                            <div class="individual-overview-assets-port pt-2">
                                                <div>Atlas Marketplace </div>
                                                <div class="individual-overview-see-all">
                                                    <a href="#">SEE ALL</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row pt-1">
                                            <div class="individual-overview-marketplace">
                                                <div class="individual-overview-decentralize-box">
                                                    <h1>5</h1>
                                                    <p>TODAY</p>
                                                </div>
                                                <div class="individual-overview-decentralize-txt">
                                                    <div>
                                                        New Asset Issued &
                                                        Issuer Information
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="individual-overview-manage-service">
                                        <div class="individual-overview-active-polls">
                                            <div class="row">
                                                <div class="individual-overview-assets-port pt-2">
                                                    <div>
                                                        Collateral Management
                                                        services{" "}
                                                    </div>
                                                    <div class="individual-overview-see-all">
                                                        <a href="#">SEE ALL</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li>
                                                    Nexus2-Securities Auto
                                                    Collateralization{" "}
                                                </li>
                                                <li>
                                                    Auto Lending & Borrowing
                                                    services{" "}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="individual-overview-manage-service">
                                        <div class="individual-overview-active-polls">
                                            <div class="row">
                                                <div class="individual-overview-assets-port pt-2">
                                                    <div>Marketcap </div>
                                                    <div class="individual-overview-see-all">
                                                        <a href="#">SEE ALL</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li>
                                                    Total value of a company's
                                                    financial assets within the
                                                    digital asset market
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="individual-overview-manage-service">
                                        <div class="individual-overview-mngmt-service">
                                            <div class="row">
                                                <div class="individual-overview-assets-port pt-2">
                                                    <div>
                                                        FINANCIAL services
                                                        REGISTER{" "}
                                                    </div>
                                                    <div class="individual-overview-see-all">
                                                        <a href="#">SEE ALL</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li>
                                                    {" "}
                                                    Search the Register to find
                                                    out whether a firm you are
                                                    using, or plan to do
                                                    business with, is authorised
                                                    by PlutoClear and/or
                                                    approved by financial
                                                    regulators.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8 individual-overview-margi-t-32">
                                <div class="individual-overview-white-bg individual-overview-r-custom-padd pt-2 pb-4">
                                    <div class="individual-overview-transaction-details">
                                        <div class="individual-overview-transaction pt-2">
                                            <div>
                                                Securities Settlement
                                                Transactions{" "}
                                            </div>
                                            <div class="individual-overview-see-all">
                                                <a href="#">SEE ALL</a>
                                            </div>
                                        </div>
                                        <div class="individual-overview-transaction-head">
                                            <ul class="individual-overview-nav-links">
                                                <li
                                                    class="overviewtablinks active blue-top"
                                                    onclick="tabfunction(event, 'all')"
                                                >
                                                    <a href="javascript:void(0)">
                                                        All
                                                    </a>
                                                </li>
                                                <li
                                                    class="overviewtablinks red-top"
                                                    onclick="tabfunction(event, 'send')"
                                                >
                                                    <a href="javascript:void(0)">
                                                        SEND
                                                    </a>
                                                </li>
                                                <li
                                                    class="overviewtablinks green-top"
                                                    onclick="tabfunction(event, 'recent')"
                                                >
                                                    <a href="javascript:void()">
                                                        RECENT
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div
                                            id="all"
                                            class="individual-overview-tab-content"
                                        >
                                            <div class="individual-overview-tab-p">
                                                <div class="row">
                                                    <div class="col-md-6 pl-md-0 ">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        JJK
                                                                        75000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $8,950
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/red-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 pr-md-0">
                                                        <div class="individual-overview-transaction-bg individual-overview-transact">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        QAW
                                                                        150,000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $88,678
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/green-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-4 pl-md-0">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        <span>
                                                                            HALO-USD
                                                                        </span>{" "}
                                                                        43,000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $678,000
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/red-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-4 pr-md-0">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        <span>
                                                                            HALO-EUR
                                                                        </span>{" "}
                                                                        36,000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $57,000
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/green-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="send"
                                            class="individual-overview-tab-content"
                                            style="display: none;"
                                        >
                                            <div class="individual-overview-tab-p">
                                                <div class="row">
                                                    <div class="col-md-6 pl-md-0 ">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        JJK
                                                                        75000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $8,950
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/red-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 pr-md-0">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        QAW
                                                                        150,000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $88,678
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/red-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-4 pl-md-0">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        <span>
                                                                            HALO-USD
                                                                        </span>{" "}
                                                                        43,000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $678,000
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/red-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-4 pr-md-0">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        <span>
                                                                            HALO-EUR
                                                                        </span>{" "}
                                                                        36,000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $57,000
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/red-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="recent"
                                            class="individual-overview-tab-content"
                                            style="display: none;"
                                        >
                                            <div class="individual-overview-tab-p">
                                                <div class="row">
                                                    <div class="col-md-6 pl-md-0 ">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        JJK
                                                                        75000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $8,950
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/green-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 pr-md-0">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        QAW
                                                                        150,000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $88,678
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/green-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-4 pl-md-0">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        <span>
                                                                            HALO-USD
                                                                        </span>{" "}
                                                                        43,000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $678,000
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/green-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mt-4 pr-md-0">
                                                        <div class="individual-overview-transaction-bg">
                                                            <div class="individual-overview-time-date-value">
                                                                <div class="time-date-value-left">
                                                                    15:00, 12
                                                                    DEC 2020
                                                                </div>
                                                                <div class="time-date-value-right">
                                                                    <div class="individual-overview-value">
                                                                        <span>
                                                                            HALO-EUR
                                                                        </span>{" "}
                                                                        36,000
                                                                    </div>
                                                                    <div class="individual-overview-data-price">
                                                                        $57,000
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="individual-overview-transaction-btm">
                                                                <div class="individual-overview-transaction-btm-left">
                                                                    APL - NZKH -
                                                                    MZRE - 2CTT
                                                                    - 98NPW
                                                                </div>
                                                                <div class="individual-overview-transaction-btm-right">
                                                                    <img
                                                                        src="images/green-arrow.png"
                                                                        alt="arrow"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="individual-overview-active-poll-back">
                                    <div class="individual-overview-active-polls">
                                        <div class="row">
                                            <div class="individual-overview-assets-port pt-3">
                                                <div>PlutoClear News </div>
                                                <div class="individual-overview-see-all">
                                                    <a href="#">SEE ALL</a>
                                                </div>
                                            </div>
                                            <ul class="mb-0 individual-overview-pluto-nws">
                                                <li>
                                                    German Solaris bank opens
                                                    subsidiary to provide
                                                    custody service for digital
                                                    assets <br />
                                                    March 16, 2020 at 16:22 UTC
                                                </li>
                                                <li>
                                                    Elliptic Launched tool to
                                                    connect banks with
                                                    cryptocurrency exchanges{" "}
                                                    <br />
                                                    March 14, 2020 at 13:22 UTC
                                                </li>
                                                <li>
                                                    SEC Taking ‘Measured’
                                                    Approach to Digital Asset
                                                    Regulation, Jay Clayton
                                                    Tells Senate Committee{" "}
                                                    <br />
                                                    March 8, 2020 at 17:22 UTC
                                                </li>
                                            </ul>
                                        </div>
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

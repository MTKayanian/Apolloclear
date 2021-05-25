import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import { BASE_URL } from "./app.constants";

import axios from "axios";
import {
  userLoginAction,
  userRoleAction,
  userDetailAction,
} from "./auth/auth-actions/auth.actions";
import { withRouter } from "react-router";
import { getItem } from "./utils/localStore";

import Login from "./auth/auth-login";
import ForgetPasswordEmail from "./auth/auth-password/auth-forget-password-email/";
import AuthResentLink from "./auth/auth-password/auth-resent-link/";
import ForgetPasswordMobile from "./auth/auth-password/auth-forget-password-mobile/";
import ResetPassword from "./auth/auth-password/auth-password-reset/";
import ResetPasswordSuccess from "./auth/auth-password/auth-password-reset-success/";
import VerifyOTP from "./auth/auth-verify-otp/";
import ForgetVerifyOTP from "./auth/auth-password/auth-forget-password-otp/";
import SignUpNow from "./auth/auth-signup/auth-signup-now/";
import CheckYourMail from "./auth/auth-face/auth-face-mail";
import AuthSignupWarning from "./auth/auth-signup/auth-signup-warning/auth-signup-warning";
import AuthDataProtection from "./auth/auth-signup/auth-data-protection/auth-data-protection";
import AuthMailBox from "./auth/auth-signup/auth-mailbox/auth-mailbox";
import AuthVerifiedMail from "./auth/auth-signup/auth-verified-mail/auth-verified-mail";
import AuthDataSlider from "./auth/auth-data-slider/auth-data-slider";

import KYC from "./UserHomePage/KYC Bussiness/KYC";
import SignUpCaptch from "./auth/auth-signup/auth-signup-captcha";
import GetStarted from "./UserHomePage/Get Started/GetStarted";
import BusinessInformation from "./UserHomePage/Bussiness Information/BusinessInformation";
import AccountHolder from "./UserHomePage/Account Holder/AccountHolder";
import HeaderSidebar from "./header-sidebar/header";
import SideBar from "./header-sidebar/sidebar";
import SendOverview from "./UserHomePage/Send/SendOverview/SendOverview";
import Transaction from "./UserHomePage/Transaction Screens/Transaction/Transaction";

//individual-account-management
import IndividualAccountManagement from "./individual-account-management/";
import BusinessAccountManagement from "./business-account-management/";

//your-issues-and-listing
import ListedAsset from "./your-issues-and-listing/listed-asset/";

//tokenization-hub-token
import TokenIssueListing from "./tokenization-hub-token/token-issue-listing.js";
import TokenizationHubToken from "./tokenization-hub-token/tokenization-hub-token.js";
import TokenIssueListingMarketplace from "./tokenization-hub-token/token-issue-listing-marketplace.js";

//ATH-token-Issue-listing-trackinng
import AthIssueListingTracking from "./ATH-token-Issue-listing-trackinng/ath-issue-listing-tracking.js";

//ATHP-Background-Guide
import AtlasTokenizationHub from "./ATHP-Background-Guide/atlas-tokenization-hub.js";
import AssetTokenization from "./ATHP-Background-Guide/asset-tokenization.js";
import AssetTokenizationSecondary from "./ATHP-Background-Guide/asset-tokenization-secondary.js";
import TokenIssuance from "./ATHP-Background-Guide/token-issuance.js";
import TokenizationOfAssets from "./ATHP-Background-Guide/tokenization-of-assets.js";
import DigitalAssetSecurities from "./ATHP-Background-Guide/digital-asset-securities.js";
import DigitalAssetSecuritiesType from "./ATHP-Background-Guide/Digital-Asset-Securities-type.js";
import TokenizationFinancialAsset from "./ATHP-Background-Guide/tokenization-financial-asset.js";
import AssetTokenizationIssued from "./ATHP-Background-Guide/asset-tokenization-issued.js";
import SecurityTokensIssuance from "./ATHP-Background-Guide/security-tokens-issuance.js";
import TokenIssuerAgent from "./ATHP-Background-Guide/token-issuer-agent.js";
import SecurityTokenOffering from "./ATHP-Background-Guide/security-token-offering.js";
import InvestmentHorizon from "./ATHP-Background-Guide/investment-horizon.js";
import ApplyingBlockChainSecuritization from "./ATHP-Background-Guide/applying-blockchain-securitization.js";
import EchoUnityHub from "./ATHP-Background-Guide/echo-unity-hub.js";
import EchoUnityHubSecond from "./ATHP-Background-Guide/echo-unity-hub-second.js";
import AssetTokenizationDecentralization from "./ATHP-Background-Guide/asset-tokenization-decentralization.js";
import StartAssestTokenization from "./ATHP-Background-Guide/start-assest-tokenization.js";
import tokenizationIssuanceModel from "./ATHP-Background-Guide/tokenization-issuance-model.js";
import TokenizationHubPortal from "./ATHP-Background-Guide/tokenization-hub-portal.js";

//ATH-steps6
import TknSec from "./ATH-steps6/TS-main-account-holder/tkn-sec.js";
import TknSecAtlas from "./ATH-steps6/TS-main-account-holder/tkn-sec-atlas.js";
import TknSecAtlasNext from "./ATH-steps6/TS-main-account-holder/tkn-sec-atlas-next.js";
import TknSecSolOffered from "./ATH-steps6/TS-main-account-holder/tkn-sec-sol-offered.js";
import TknSecSolOfferedNext from "./ATH-steps6/TS-main-account-holder/tkn-sec-sol-offered-next.js";
import TknSecEnNameType from "./ATH-steps6/TS-main-account-holder/tkn-sec-en-name-type.js";
import TknSecEnAddressContact from "./ATH-steps6/TS-main-account-holder/tkn-sec-en-address-contact.js";
import TknSecParties from "./ATH-steps6/TS-main-account-holder/tkn-sec-parties.js";
import TokenizationPartiesInvite from "./ATH-steps6/TS-parties-invite/tokenization-parties-invite";
import TokenizationPartiesInvitePeople from "./ATH-steps6/TS-parties-invite/tkn-parties-invite-people";
import TknProductAccess from "./ATH-steps6/TS-parties-invite/tkn-product-access";

//ATH-steps6 >> TSP - Group
import TknTspGroup from "./ATH-steps6/TSP-group/tkn-tsp-group.js";

//ATH-steps6.1
import ViewMode from "./ATH-steps6.1/view-mode-sample.js";
import CalculationReporting from "./ATH-steps6.1/calculation-reporting.js";
import MemberRole from "./ATH-steps6.1/member-role.js";
import ObligorBorrower from "./ATH-steps6.1/obligor-borrower.js";
import ObligorBorrowerParties from "./ATH-steps6.1/obligor-borrower-parties.js";
import CalculationReportingWorkspace from "./ATH-steps6.1/calculation-reporting-workspace.js";

// ATHP-1-2-3-4-5

import FinancialAssetClasses from "./ATHP-1-2-3-4-5/financial-asset-classes/financial-asset-classes.js";
import TokenOffering from "./ATHP-1-2-3-4-5/token-offering/token.offering.js";
import FinancialTokenOffering from "./ATHP-1-2-3-4-5/token-offering/financial-token-offering.js";
import TokenSymbolReserve from "./ATHP-1-2-3-4-5/token-symbol-reserve/token-symbol-reserve.js";
import PartiesInvolvedTokenization from "./ATHP-1-2-3-4-5/parties-involved-tokenization/parties-involved-tokenization.js";
import WalletVerification from "./ATHP-1-2-3-4-5/wallet-verification/wallet-verification.js";
import PartiesInvolvedWalletVerification from "./ATHP-1-2-3-4-5/wallet-verification/parties-involved-wallet-verification.js";
import PartiesInvolved from "./ATHP-1-2-3-4-5/parties-involved-tokenization/parties-involved.js";

//import KYC individual
import KYCIndividualProfile from "./kyc-individual-apply/kyc-individual-profile/";
import KYCBusinessProfile from "./kyc-business-apply/kyc-business-profile/";

//import KYC single messaging
import kycSingleMessaging from "./kyc-individual-messaging/kyc-single-messaging/index";
import kycAMLENQ from "./kyc-individual-messaging/kyc-aml-enquiry/index";

import MarketCap from "./UserHomePage/Transaction/Market Cap/MarketCap";
import AddFundRes from "./UserHomePage/Bank Overview Screens/Add Funding Resource/AddFundRes";

import BF from "./UserHomePage/Bussiness_Profile/Business-Profile";
import RD from "./UserHomePage/Documentation/RD";

import TemporaryLimitation from "./UserHomePage/Temporary Limitation/TemporaryLimitation";

import PlutoPost from "./UserHomePage/PlutoNet_post/PlutoPost";
import W_overview from "./UserHomePage/Wallet_Screens/W_overview/W_overview";
import SP_PopUp_Head from "./UserHomePage/Send/Send Popups/SP PopUp Head/SP_PopUp_Head";
import RequestPending from "./UserHomePage/Components/RequestPending";
import Bank_AddCard from "./UserHomePage/Bank Overview Screens/Add a Card/Bank_AddCard";
// import Bank_AddAcc from "./UserHomePage/Bank Overview Screens/Add a Bank Account/Bank_AddAcc";
import BankAccPersl from "./UserHomePage/Bank Overview Screens/Add a Bank Account/Bank_Account_Personal/BankAccPersl";
import Bank_ConfBnk from "./UserHomePage/Bank Overview Screens/Confirm Your Bank/Bank_ConfBnk";
import Bank_ConfSucc from "./UserHomePage/Bank Overview Screens/Confirm Your Bank Success/Bank_ConfSucc";
import Bank_ConfBrclys from "./UserHomePage/Bank Overview Screens/Confirm Your Bank Barclys/Bank_ConfBrclys";
import RemBankAcc from "./UserHomePage/Bank Overview Screens/Remove Bank Account/RemBankAcc";
import BankDetailbank from "./UserHomePage/Bank Overview Screens/Bank Detail/BankDetailbank";
import Solution from "./UserHomePage/Bussiness Setup/Solutions/Solution";
import AccountSetup from "./UserHomePage/Account Setup/AccountSetup";
import BussinessName from "./UserHomePage/Confirm Your Bussiness Name popup/BussinessName";
import CustomerIdentification from "./UserHomePage/Customer Identification popUp/CustomerIdentification";
import IncomeAsset from "./UserHomePage/Income and Asset/IncomeAsset";
import PersonalDetail from "./UserHomePage/Personal Details/PersonalDetail";
import LetterofAuthorization from "./UserHomePage/Letter of Authorizaton/LetterofAuthorization";
import IdentityInterruption from "./UserHomePage/Identity interruption popUp/IdentityInterruption";
//import TemporaryLimitation from "./UserHomePage/Temporary Limitation/TemporaryLimitation";
import LifRecLim from "./UserHomePage/Lift Receiving Limit/LifRecLim";
import PopUp from "./UserHomePage/popUP/main_popUp";
//import PlutoPost from "./UserHomePage/PlutoNet_post/PlutoPost";
//import W_overview from "./UserHomePage/Wallet_Screens/W_overview/W_overview";
//import SP_PopUp_Head from "./UserHomePage/Send/Send Popups/SP PopUp Head/SP_PopUp_Head";

import SendReceiveToken from "./UserHomePage/Components/SendReceiveToken/index";
import SendRequestReview from "./UserHomePage/Components/SendRequestReview/index";
import RequestReviewsucess from "./UserHomePage/Components/RequestReview";

import SendRequestRerview from "./UserHomePage/Send/RequestRerview/RequestRerview";

import MyProfile from "./UserHomePage/My_Profile/Profile_main/MyProfile";
import SendReceiveTokenSuccess from "./UserHomePage/Components/SendReceiveTokenSuccess";
import KYCOverview from "./UserHomePage/KYC Overview/KYCOverview";
//import RequestPending from "./UserHomePage/Components/RequestPending";

import CreateWallet from "./customer-managment/create-wallet/create-wallet";
import CreatedWallet from "./customer-managment/primary-created-wallet/created-wallet";
import SavedWallet from "./customer-managment/saved-wallet/saved-wallet";
import primaryWalletCreation from "./customer-managment/primary-wallet-creation/business-wallet-creation";
import primaryWalletCreation2 from "./customer-managment/primary-wallet-creation2/business-wallet-creation2";
import primaryWalletCreation3 from "./customer-managment/primary-wallet-creation3/business-wallet-creation3";

import coreWalletCreation from "./customer-managment/core-wallet-creation/business-wallet-creation";
import coreWalletCreation2 from "./customer-managment/core-wallet-creation2/core-wallet-creation2";
import coreWalletCreation3 from "./customer-managment/core-wallet-creation3/core-wallet-creation3";

import coreWalletCreation4 from "./customer-managment/core-wallet-creation4/core-wallet-creation4";
import CoreWalletCreated from "./customer-managment/core-walleted-created/created-wallet";

import MusigConversion from "./customer-managment/musig-conversion/musig-conversion";
import MusigCoreMeridian from "./customer-managment/musig-core-meridian/musig-core-meridian";
import MusigWalletCreated from "./customer-managment/musig-created/musig-created";
import DigitalAssets from "./customer-managment/digital-assets/digital-assets";
import LoginCoreWallet from "./customer-managment/digital-login-core-wallet/login-core-wallet";
import SelectPhoneNumber from "./customer-managment/digital-phone-number/select-phone-number";
import PhoneVerify from "./customer-managment/digital-phone-number-verify/phone-verify";
import TokenSymbol from "./customer-managment/reserve-token-symbo/reserve-token-symbol";
import TokenPopup from "./customer-managment/reservation-token-popup/reservation-token-popup";
import CreateAsset from "./customer-managment/create-assets/create-assets";
import CreateAsset2 from "./customer-managment/create-assets2/create-assets2";
import CreateAsset3 from "./customer-managment/create-assets3/create-assets3";
import AssetCreated from "./customer-managment/created-asset/created-asset";
import CertifySubmit from "./UserHomePage/Certify Submit Information/CertifySubmit";
import AllAsset from "./capital-market/all-asset";
//import KYC individual

// import $ from 'jquery';
import AllPartners from "./capital-market/all-partners";
import Individual from "./kyc-individual-apply/kyc-apply-profile/index";
import Documentation from "./kyc-individual-apply/kyc-individual-documentation/index";
import KYCCHECK from "./kyc-individual-apply/kyc-individual-checklist/index";
import KYCREQ from "./kyc-individual-apply/ind-kyc-req-doc/index";
import Getstart from "./kyc-individual-apply/kyc-apply-start/description";
import Status from "./kyc-individual-apply/kyc-ind-status/index";

//import KYC messaging
import Kycsubmessaging from "./kyc-individual-messaging/kyc-messaging-submitted/index";
import createGroupMessage from "./kyc-individual-messaging/kyc-messaging-group-create/index";

class Routes extends Component {
  state = {
    sideBar: false,
    status: false,
  };
  clickSidebar = () => {
    this.setState({ sideBar: !this.state.sideBar });
  };
  componentDidMount() {
    let TOKEN = getItem("accessToken");
    //  $(".loading-container").fadeIn();

    axios({
      method: "GET",
      url:
        localStorage.getItem("role") === "B"
          ? BASE_URL + "/business/getBusinessProfile"
          : BASE_URL + "/personal/getPersonalProfile",

      headers: {
        "Content-Type": "application/json",
        authorization: TOKEN,
      },
    })
      .then((response) => {
        console.log(response);
        // $(".loading-container").fadeOut();

        this.props.userLoginAction(true);
      })
      .catch((error) => {
        console.log("error is here", error);
        this.setState({ status: true });
        //  $(".loading-container").fadeOut();
      });
  }
  render() {
    console.log("value is ", this.props);
    // this.props.userReducer.isUserLoggedIn
    return (
      <Router>
        <div>
          <div className="loading-container">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <Switch>
            <Route path={`/login`} component={Login} />
            <Route
              path={`/forget-password-email`}
              component={ForgetPasswordEmail}
            />
            <Route
              path={`/forget-password-mobile`}
              component={ForgetPasswordMobile}
            />
            <Route path={`/reset-password`} component={ResetPassword} />
            <Route path={`/auth-resent-link`} component={AuthResentLink} />
            <Route
              path={`/auth-password-reset-success`}
              component={ResetPasswordSuccess}
            />

            <Route path={`/verify-otp`} component={VerifyOTP} />
            <Route path={"/verify-email"} component={CheckYourMail} />
            <Route path={`/sign-up`} component={SignUpNow} />
            <Route path={`/signup-captch`} component={SignUpCaptch} />
            <Route
              path={`/auth-signup-warning`}
              component={AuthSignupWarning}
            />
            <Route
              path={`/auth-data-protection`}
              component={AuthDataProtection}
            />
            <Route path={`/auth-verified-mail`} component={AuthVerifiedMail} />
            <Route path={`/auth-mailbox`} component={AuthMailBox} />
            <Route path={`/auth-data-slider`} component={AuthDataSlider} />
            <Route
              path={`/auth-forget-password-otp`}
              component={ForgetVerifyOTP}
            />

            <Redirect exact from="/" to="/login" />
            {/* this.props.userReducer.isUserLoggedIn */}
            {this.props.userReducer.isUserLoggedIn ? (
              <div>
                <HeaderSidebar onSideBar={this.clickSidebar} />
                {/* <div style={{ display: "flex"</div> }}> */}
                <div style={{}}>
                  {this.state.sideBar ? <SideBar /> : null}
                  {/* !this.props.headReducer.headAccess                  */}

                  {!this.props.headReducer.headAccess ? (
                    <switch>
                      <Route path={`/home`} component={KYC} />
                      {/*<Redirect from="*" to="/home" />*/}
                    </switch>
                  ) : (
                    <switch>
                      {/* capital market */}
                      <Route path={`/all-asset`} component={AllAsset} />
                      <Route path={`/all-partners`} component={AllPartners} />

                      {/* ------------------ */}
                      <Route path={`/home`} component={KYC} />
                      <Route path={`/GetStarted`} component={GetStarted} />
                      <Route path={`/overview`} component={KYCOverview} />
                      <Route path={`/MyProfile`} component={MyProfile} />
                      <Route
                        path={`/kyc-apply-profile`}
                        component={Individual}
                      />
                      <Route
                        path={`/kyc-documentation`}
                        component={Documentation}
                      />

                      <Route
                        path={`/kyc-individual-profile`}
                        component={KYCIndividualProfile}
                        exact
                      />

                      <Route
                        path={`/kyc-business-profile`}
                        component={KYCBusinessProfile}
                        exact
                      />

                      <Route
                        path={`/individual-account-management`}
                        component={IndividualAccountManagement}
                      />

                      <Route
                        path={`/business-account-management`}
                        component={BusinessAccountManagement}
                      />
                      <Route
                        path={`/kyc-single-messaging`}
                        component={kycSingleMessaging}
                      />
                      <Route
                        path={`/ath-issue-listing-tracking`}
                        component={AthIssueListingTracking}
                      />
                      <Route
                        path={`/financial-asset-classes`}
                        component={FinancialAssetClasses}
                      />
                      <Route
                        path={`/token.offering`}
                        component={TokenOffering}
                      />
                      <Route
                        path={`/financial-token-offering`}
                        component={FinancialTokenOffering}
                      />
                      <Route
                        path={`/token-symbol-reserve`}
                        component={TokenSymbolReserve}
                      />
                      <Route
                        path={`/parties-involved-tokenization`}
                        component={PartiesInvolvedTokenization}
                      />
                      <Route
                        path={`/parties-involved`}
                        component={PartiesInvolved}
                      />
                      <Route
                        path={`/wallet-verification`}
                        component={WalletVerification}
                      />
                      <Route
                        path={`/parties-involved-wallet-verification`}
                        component={PartiesInvolvedWalletVerification}
                      />

                      <Route
                        path={`/atlas-tokenization-hub`}
                        component={AtlasTokenizationHub}
                      />
                      <Route
                        path={`/asset-tokenization`}
                        component={AssetTokenization}
                      />
                      <Route
                        path={`/asset-tokenization-secondary`}
                        component={AssetTokenizationSecondary}
                      />
                      <Route
                        path={`/token-issuance`}
                        component={TokenIssuance}
                      />
                      <Route
                        path={`/tokenization-of-assets`}
                        component={TokenizationOfAssets}
                      />
                      <Route
                        path={`/digital-asset-securities`}
                        component={DigitalAssetSecurities}
                      />
                      <Route
                        path={`/digital-asset-securities-type`}
                        component={DigitalAssetSecuritiesType}
                      />
                      <Route
                        path={`/tokenization-financial-asset`}
                        component={TokenizationFinancialAsset}
                      />
                      <Route
                        path={`/asset-tokenization-issued`}
                        component={AssetTokenizationIssued}
                      />
                      <Route
                        path={`/security-tokens-issuance`}
                        component={SecurityTokensIssuance}
                      />
                      <Route
                        path={`/token-issuer-agent`}
                        component={TokenIssuerAgent}
                      />
                      <Route
                        path={`/security-token-offering`}
                        component={SecurityTokenOffering}
                      />
                      <Route
                        path={`/investment-horizon`}
                        component={InvestmentHorizon}
                      />
                      <Route
                        path={`/applying-blockchain-securitization`}
                        component={ApplyingBlockChainSecuritization}
                      />
                      <Route
                        path={`/echo-unity-hub`}
                        component={EchoUnityHub}
                      />
                      <Route
                        path={`/echo-unity-hub-second`}
                        component={EchoUnityHubSecond}
                      />
                      <Route
                        path={`/asset-tokenization-decentralization`}
                        component={AssetTokenizationDecentralization}
                      />
                      <Route
                        path={`/start-assest-tokenization`}
                        component={StartAssestTokenization}
                      />
                      <Route
                        path={`/tokenization-issuance-model`}
                        component={tokenizationIssuanceModel}
                      />
                      <Route
                        path={`/tokenization-hub-portal`}
                        component={TokenizationHubPortal}
                      />
                      <Route
                        path={`/tokenization-hub-portal`}
                        component={TokenizationHubPortal}
                      />
                      <Route path={`/tkn-sec`} component={TknSec} />
                      <Route path={`/tkn-sec-atlas`} component={TknSecAtlas} />

                      <Route
                        path={`/tkn-sec-atlas-next`}
                        component={TknSecAtlasNext}
                      />
                      <Route
                        path={`/tkn-sec-sol-offered`}
                        component={TknSecSolOffered}
                      />
                      <Route
                        path={`/tkn-sec-sol-offered-next`}
                        component={TknSecSolOfferedNext}
                      />
                      <Route
                        path={`/tkn-sec-en-name-type`}
                        component={TknSecEnNameType}
                      />
                      <Route
                        path={`/tkn-sec-en-address-contact`}
                        component={TknSecEnAddressContact}
                      />
                      <Route
                        path={`/tkn-sec-parties`}
                        component={TknSecParties}
                      />
                      <Route path={`/tkn-tsp-group`} component={TknTspGroup} />

                      <Route path={`/kyc-aml-enquiry`} component={kycAMLENQ} />
                      <Route
                        path={`/issues-and-listing`}
                        component={ListedAsset}
                      />
                      <Route
                        path={`/token-issue-listing`}
                        component={TokenIssueListing}
                      />
                      <Route path={`/member-role`} component={MemberRole} />
                      <Route
                        path={`/tokenization-hub-token`}
                        component={TokenizationHubToken}
                      />
                      <Route
                        path={`/token-issue-listing-marketplace`}
                        component={TokenIssueListingMarketplace}
                      />
                      <Route path={`/view-mode-sample`} component={ViewMode} />
                      <Route
                        path={`/obligor-borrower`}
                        component={ObligorBorrower}
                      />
                      <Route
                        path={`/obligor-borrower-parties`}
                        component={ObligorBorrowerParties}
                      />
                      <Route
                        path={`/calculation-reporting`}
                        component={CalculationReporting}
                      />
                      <Route
                        path={`/tokenization-parties-invite`}
                        component={TokenizationPartiesInvite}
                      />
                      <Route
                        path={`/tkn-parties-invite-people`}
                        component={TokenizationPartiesInvitePeople}
                      />
                      <Route
                        path={`/tkn-product-access`}
                        component={TknProductAccess}
                      />
                      <Route
                        path={`/calculation-reporting-workspace`}
                        component={CalculationReportingWorkspace}
                      />

                      <Route path={`/kyc-req-doc`} component={KYCREQ} />
                      <Route path={`/kyc-check`} component={KYCCHECK} />
                      <Route path={`/kyc-status`} component={Status} />
                      <Route
                        path={`/kyc-messaging-submitted`}
                        component={Kycsubmessaging}
                      />
                      <Route
                        path={`/kyc-messaging-group-create`}
                        component={createGroupMessage}
                      />
                      <Route
                        path={`/AccountHolder`}
                        component={AccountHolder}
                      />
                      <Route path={`/MarketCap`} component={MarketCap} />
                      <Route path={`/AddFundRes`} component={AddFundRes} />
                      <Route path={`/Bank_AddCard`} component={Bank_AddCard} />
                      <Route path={`/BankAccPersl`} component={BankAccPersl} />
                      <Route
                        path={`/BankDetailbank`}
                        component={BankDetailbank}
                      />
                      <Route path={`/AccountSetup`} component={AccountSetup} />

                      <Route
                        path={`/Bank_ConfSucc`}
                        component={Bank_ConfSucc}
                      />
                      <Route path={`/Solution`} component={Solution} />

                      <Route path={`/Bank_ConfBnk`} component={Bank_ConfBnk} />
                      <Route
                        path={`/Bank_ConfBrclys`}
                        component={Bank_ConfBrclys}
                      />
                      <Route path={`/Business-profile`} component={BF} />
                      <Route path={`/Business-Documentation`} component={RD} />
                      <Route
                        path={`/BussinessName`}
                        component={BussinessName}
                      />
                      <Route
                        path={`/CustomerIdentification`}
                        component={CustomerIdentification}
                      />
                      <Route path={`/IncomeAsset`} component={IncomeAsset} />
                      <Route
                        path={`/BusinessInformation`}
                        component={BusinessInformation}
                      />
                      <Route
                        path={`/PersonalDetail`}
                        component={PersonalDetail}
                      />
                      <Route
                        path={`/LetterofAuthorization`}
                        component={LetterofAuthorization}
                      />
                      <Route
                        path={`/IdentityInterruption`}
                        component={IdentityInterruption}
                      />
                      <Route
                        path={`/TemporaryLimitation`}
                        component={TemporaryLimitation}
                      />
                      <Route path={`/LifRecLim`} component={LifRecLim} />
                      <Route path={`/PopUp`} component={PopUp} />
                      <Route path={`/PlutoPost`} component={PlutoPost} />
                      <Route path={`/W_overview`} component={W_overview} />
                      <Route
                        path={`/SP_PopUp_Head`}
                        component={SP_PopUp_Head}
                      />
                      <Route
                        path={`/RequestReview`}
                        component={RequestReviewsucess}
                      />
                      <Route
                        path={`/SendRequestReview`}
                        component={SendRequestReview}
                      />
                      <Route
                        path={`/SendRequesmtRerview`}
                        component={SendRequestRerview}
                      />
                      <Route
                        path={`/SendReceiveToken`}
                        component={SendReceiveToken}
                      />
                      <Route
                        path={`/SendReceiveTokenSuccess`}
                        component={SendReceiveTokenSuccess}
                      />
                      <Route
                        path={`/RequestPending`}
                        component={RequestPending}
                      />

                      <Route path={`/send-overview`} component={SendOverview} />
                      <Route path={`/RemBankAcc`} component={RemBankAcc} />
                      <Route path={`/transaction`} component={Transaction} />

                      <Route
                        path={`/kyc-apply-start/description`}
                        component={Getstart}
                      />
                      <Route path={`/create-wallet`} component={CreateWallet} />
                      <Route
                        path={`/MusigWalletCreated`}
                        component={MusigWalletCreated}
                      />
                      <Route
                        path={`/CreatedWallet`}
                        component={CreatedWallet}
                      />
                      <Route
                        path={`/primary-wallet-creation`}
                        component={primaryWalletCreation}
                      />
                      <Route
                        path={`/primaryWalletCreation2`}
                        component={primaryWalletCreation2}
                      />
                      <Route
                        path={`/primaryWalletCreation3`}
                        component={primaryWalletCreation3}
                      />
                      <Route path={`/SavedWallet`} component={SavedWallet} />
                      <Route
                        path={`/core-wallet-creation`}
                        component={coreWalletCreation}
                      />
                      <Route
                        path={`/MusigCoreMeridian`}
                        component={MusigCoreMeridian}
                      />
                      <Route
                        path={`/coreWalletCreation2`}
                        component={coreWalletCreation2}
                      />
                      <Route
                        path={`/coreWalletCreation3`}
                        component={coreWalletCreation3}
                      />
                      <Route
                        path={`/coreWalletCreation4`}
                        component={coreWalletCreation4}
                      />
                      <Route
                        path={`/CoreWalletCreated`}
                        component={CoreWalletCreated}
                      />
                      <Route
                        path={`/musig-conversion`}
                        component={MusigConversion}
                      />
                      <Route
                        path={`/digital-assets`}
                        component={DigitalAssets}
                      />
                      <Route
                        path={`/login-wallet`}
                        component={LoginCoreWallet}
                      />
                      <Route
                        path={`/select-phoneNumber`}
                        component={SelectPhoneNumber}
                      />
                      <Route path={`/PhoneVerify`} component={PhoneVerify} />
                      <Route path={`/TokenSymbol`} component={TokenSymbol} />
                      <Route path={`/TokenPopup`} component={TokenPopup} />
                      <Route path={`/create-asset`} component={CreateAsset} />
                      <Route path={`/CreateAsset2`} component={CreateAsset2} />
                      <Route path={`/CreateAsset3`} component={CreateAsset3} />
                      <Route path={`/AssetCreated`} component={AssetCreated} />
                    </switch>
                  )}
                </div>
              </div>
            ) : (
              // <Redirect from="*" to="/home" />
              <Route
                path="*"
                render={() =>
                  this.state.status ? (
                    <h1>404! Not Found</h1>
                  ) : (
                    <h1>Waiting........</h1>
                  )
                }
              />
            )}
            {/* <Redirect from="*" to="/home" /> */}

            <Route path="*" render={() => <h1>404! Not Found</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  userLoginAction: (payload) => dispatch(userLoginAction(payload)),
  userRoleAction: (payload) => dispatch(userRoleAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

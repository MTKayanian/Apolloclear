import React from 'react';
import { Link } from 'react-router-dom';
import './ac-management.css';
import './responsive.css';

class IndividualAccountManagement extends React.Component {
  render() {
    return (
      <div className="container-fluid dashboard-content">
        <div className="row">
          <div className="col-md-12">
            <div className="altas-individual-dashboard-head">
              <div className="altas-individual-dashboard-head-lft">
                <h2>Atlas Dashboard</h2>
                <p>Hello, Robert! Check out what's happening </p>
              </div>
              <div className="altas-individual-dashboard-head-right">
                <p>
                  We're updating our Terms of Service. Get to know our new Terms
                  before they take effect on March 31, 2020.
                </p>
                <div className="review-got-cls">
                  <span>
                    <Link className="b-account-new " style={{display:'inline-block'}}>
                      Review
                    </Link>
                  </span>{' '}
                  <span>
                    <Link className="b-account-new ml-2" style={{display:'inline-block'}}>
                      Got IT
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 marg-top40">
            <div className="altas-individual-dashboard-commn-block">
              <h3>
                <span>
                  <img src="/images/icon1.png" alt="Digital Asset Management" />
                </span>
                Digital Asset Management
              </h3>
              <p>
                Get started manage your diversified digital asset portfolio,
                create wallets, store and transfer digital asset securities with
                easy visual flows, and verify transactions, asset, wallet
                ownership with compliance{' '}
              </p>
              <div>
                <Link className="b-account-new" style={{display:'inline-block'}}>
                  Start
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 marg-top40">
            <div className="altas-individual-dashboard-commn-block">
              <h3>
                <span>
                  <img
                    src="./images/icon2.png"
                    alt="Digital Asset Management"
                  />
                </span>
                PlutoClear Support{' '}
              </h3>
              <p>
                Once approved, you will receive access to support, tracking,
                reporting, payments, and have your own unique affiliate link to
                track every referral you generate
              </p>
              <div className="btn-sect">
                <Link className="b-account-new">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 marg-top40">
            <div className="altas-individual-dashboard-commn-block black-bg">
              <h3>
                <span>
                  <img
                    src="./images/icon7.png"
                    alt="Digital Asset Management"
                  />
                </span>
                Quick Start
              </h3>
              <p className="se-wallet">
                Creating Your First Secure Wallet{' '}
                <span>
                  <img src="./images/right-arrow.png" alt="quick start" />
                </span>
              </p>
              <p>
                Creating Your New Wallet. Pick your preferred platform. We're
                accessible on Web, iOS, and Android. ( If you chose a mobile
                option, download & open the app) Create your wallet by filling
                in your email address, a secure password, agree to our terms of
                service(TOS), and then click Continue. Welcome to your new
                PlutoClear Blockchain Wallet!
              </p>
            </div>
          </div>
          <div className="col-md-6 marg-top40">
            <div className="altas-individual-dashboard-commn-block">
              <h3>
                <span>
                  <img src="./images/icon3.png" alt="affiliate" />
                </span>
                Becoming approved affiliate and earn a commission for marketing
                PlutoClear products{' '}
              </h3>
              <p>
                Once approved, you will receive access to support, tracking,
                reporting, payments, and have your own unique affiliate link to
                track every referral you generate
              </p>
              <div className="btn-sect">
                <Link className="b-account-new">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 marg-top40">
            <div className="altas-individual-dashboard-commn-block">
              <h3>
                <span>
                  <img src="./images/icon4.png" alt="Capital Market " />
                </span>
                Capital Market{' '}
              </h3>
              <h4>Why join a capital markets ... ?</h4>
              <p>
                Market data is the data issued by a trading venue, such as a
                digtal asset exchange, to inform traders and investors about the
                latest prices of financial instruments such as shares,
                derivatives, commodities and currencies.
              </p>
              <div>
                <Link className="b-account-new">
                  discover & share
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 marg-top40">
            <div className="altas-individual-dashboard-commn-block">
              <h3>
                <span>
                  <img
                    src="./images/icon3.png"
                    alt="Digital Asset Management"
                  />
                </span>
                PlutoClear Studio{' '}
              </h3>
              <p>
                Review PlutoClear's Public API and SDK for building wallet and
                testing APIs and integrations for PlutoClear Platfrom.
              </p>
              <div className="btn-sect">
                <Link className="b-account-new">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 marg-top40">
            <div className="row">
              <div className="altas-individual-dashboard-commn-block black-bg">
                <h3>
                  <span>
                    <img
                      src="./images/icon7.png"
                      alt="Digital Asset Management"
                    />
                  </span>
                  Quick Start
                </h3>
                <p className="se-wallet">
                  {' '}
                  Collateral Management Utility{' '}
                  <span>
                    <img src="./images/right-arrow.png" alt="quick start" />
                  </span>
                </p>
                <p className="mb-4">
                  Optimus Cube multi-service product, open to all market
                  participants, was built in collaboration with the company’s
                  stakeholders across the dealer, buy-side, custodian and
                  clearing house communities to foster standardized, utility
                  solutions for collateral management
                </p>
              </div>
              <div className="altas-individual-dashboard-commn-block marg-top40">
                <h3>
                  <span>
                    <img
                      src="./images/icon6.png"
                      alt="Digital Asset Management"
                    />
                  </span>
                  Do you own a company and need capital to fund further
                  expansion ?{' '}
                </h3>
                <p>
                  Companies that choose to seek admission to a public market
                  have a range of options depending on their sizes, stgae of
                  development and capital-raising requirements.
                </p>
                <div className="btn-sect">
                  <Link className="b-account-new">
                    start
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 marg-top40">
            <div className="altas-individual-dashboard-commn-block"></div>
          </div>
        </div>
        <div className="row">
          <div className="bottm-sect">
            <div>
              <span>
                <img src="./images/file.png" alt="documentation" />
              </span>
              Documentations
            </div>
            <div>
              <span>
                <img src="./images/training.png" alt="training" />
              </span>
              Training
            </div>
            <div>
              <span>
                <img src="./images/call-center.png" alt="Support Center" />
              </span>
              Support Center
            </div>
            <div>
              <span>
                <img src="./images/forum.png" alt="Forums" />
              </span>
              Forums
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualAccountManagement;

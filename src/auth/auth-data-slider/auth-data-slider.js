import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './css/style.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class AuthDataSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 0
    };
    this.next = this.next.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
  }

  componentDidMount() {}

  plusSlides = slideNumber => {
    console.log(slideNumber);
  };

  next() {
    if (this.state.slideCount < 3) {
      this.setState({ slideCount: this.state.slideCount + 1 });
      this.slider.slickNext();
    } else {
      if (
        localStorage.getItem('accessToken') && localStorage.getItem('role') == 'P'
      ) {
        this.props.history.push('/individual-account-management');
      }
      else if (localStorage.getItem('accessToken') && localStorage.getItem('role') == 'B'){
        this.props.history.push('/business-account-management');
      }
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{            
            position: 'absolute',
            right: '45%',
            bottom: '40px',         
          }}
        >
          <ul style={{ margin: '0px',padding:'0px 2px' }}> {dots} </ul>
        </div>
      ),     
    };
    return (
      <div className="container-fluid p-0 myBody">
        <div className="slideshow-container">
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div className="mySlides">
              <div className="row">
                <div className="col-md-6">
                  <div className="left-panel">
                    <div className="mid-sect slider-txt">
                      <h2>Manage all of your</h2>
                      <p>
                        Regulated digital assets issuance, listing, holding,
                        transfer in one place{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 position-relative pr-0 pl-0">
                  <div className="slide-img">
                    <img
                      src="./images/next.png"
                      alt="slide-img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mySlides">
              <div className="row">
                <div className="col-md-6 m-top-58">
                  <div className="left-panel">
                    <div className="mid-sect slider-txt">
                      <h2>Atlas suite connectivity</h2>
                      <p>
                        Our new connectivity framework, PlutoClear's atlas suite,
                        paves the way for a harmonised delivery of our full
                        range of services
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 position-relative pr-0 pl-0">
                  <div className="slide-img">
                    <img
                      src="./images/next1.png"
                      alt="slide-img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mySlides">
              <div className="row">
                <div className="col-md-6 m-top-58">
                  <div className="left-panel">
                    <div className="mid-sect slider-txt">
                      <h2>PlutoClear </h2>
                      <p>One-stop shop for funds An integrated solution</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 position-relative pr-0 pl-0">
                  <div className="slide-img">
                    <img
                      src="./images/next2.png"
                      alt="slide-img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mySlides">
              <div className="row">
                <div className="col-md-6 m-top-58">
                  <div className="left-panel">
                    <div className="mid-sect slider-txt">
                      <h2>Calculating your </h2>
                      <p>
                        Assets performance, Real-time managing & measuring your
                        portfolio's return.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 position-relative pr-0 pl-0">
                  <div className="slide-img">
                    <img
                      src="./images/next3.png"
                      alt="slide-img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          {/* 
          <div className="pagi-dots">
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
            <span className="dot" onclick="currentSlide(4)"></span>
          </div> */}
          <div className="paginate">
            <Link className="next nxt-button btn" onClick={this.next}>
              SKIP
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthDataSlider;

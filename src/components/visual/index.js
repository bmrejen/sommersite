
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caseimg1 from '../../images/resources/scr1.jpg'
import caseimg2 from '../../images/resources/scr2.jpg'
import caseimg3 from '../../images/resources/scr3.jpg'
import caseimg4 from '../../images/resources/scr4.jpg'

import './style.css'

class VisualSlider extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:false,
        margin: 10,
        loop:true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      };
      return (
        <section className="visual-sec">
            <div className="container">
              <div className="sec-title2 text-center">
                <h4>Screenshots</h4>
                <h2>Amazing visual interface</h2>
                <p>Why I say old chap that is spiffing barney, nancy boy bleeder chimneypot richard cheers the little rotter.!</p>
              </div>
              <div className="v-item">
                <Slider {...settings}>
                  <div className="v-slide">
                    <div className="scr-slide">
                        <img src={caseimg1} alt=""/>
                    </div>
                  </div>
                  <div className="v-slide">
                    <div className="scr-slide">
                        <img src={caseimg2} alt=""/>
                    </div>
                  </div>
                  <div className="v-slide">
                    <div className="scr-slide">
                        <img src={caseimg3} alt=""/>
                    </div>
                  </div>
                  <div className="v-slide">
                    <div className="scr-slide">
                        <img src={caseimg4} alt=""/>
                    </div>
                  </div>
                  <div className="v-slide">
                    <div className="scr-slide">
                         <img src={caseimg1} alt=""/>
                    </div>
                  </div>
                  <div className="v-slide">
                    <div className="scr-slide">
                        <img src={caseimg2} alt=""/>
                    </div>
                  </div>
                  <div className="v-slide">
                    <div className="scr-slide">
                        <img src={caseimg3} alt=""/>
                    </div>
                  </div>
                  <div className="v-slide">
                    <div className="scr-slide">
                          <img src={caseimg4} alt=""/>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
      );
    }
  }

export default VisualSlider;
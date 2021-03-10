
import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caseimg1 from '../../images/resources/casee1.png'
import caseimg2 from '../../images/resources/case2.png'
import caseimg3 from '../../images/resources/case3.png'

import './style.css'

class SimpleSlider extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
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
          <div className="case-studies-sec">
              <div className="container">
                <Slider {...settings}>
                    <div className="case-study-col">
                        <div className="case-img">
                            <img src={caseimg1} alt=""/>
                        </div>
                        <div className="case-info">
                            <h3><Link to="#" title="">Victoia Global Checking</Link></h3>
                            <span>Website Quality</span>
                        </div>
                    </div>
                    <div className="case-study-col">
                        <div className="case-img">
                            <img src={caseimg2} alt=""/>
                        </div>
                        <div className="case-info">
                            <h3><Link to="#" title="">Digital Studio Work</Link></h3>
                            <span>Website SEO</span>
                        </div>
                    </div>
                    <div className="case-study-col">
                        <div className="case-img">
                            <img src={caseimg3} alt=""/>
                        </div>
                        <div className="case-info">
                            <h3><Link to="#" title="">Victoia Global Checking</Link></h3>
                            <span>Website Quality</span>
                        </div>
                    </div>
                    <div className="case-study-col">
                        <div className="case-img">
                            <img src={caseimg2} alt=""/>
                        </div>
                        <div className="case-info">
                            <h3><Link to="#" title="">Victoia Global Checking</Link></h3>
                            <span>Website Quality</span>
                        </div>
                    </div>
                </Slider>
              </div>
          </div>
           
      );
    }
  }

export default SimpleSlider;
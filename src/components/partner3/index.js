
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../images/resources/pz1.png'
import pimg2 from '../../images/resources/pz2.png'
import pimg3 from '../../images/resources/pz3.png'
import pimg4 from '../../images/resources/pz4.png'

class PartnerSlider3 extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            margin: 10,
            loop: true,
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
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
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
              ]
        };
        return (
            <div className="layout3 partner-sec style2">
                <div className="container">
                    <div className="partner-sec-details">
                        <div className="pt-carousel">
                            <Slider {...settings}>
                                <div className="partner-col">
                                    <img src={pimg1} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg2} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg3} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg4} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg1} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg2} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg3} alt=""/>
                                </div>
                                <div className="partner-col">
                                    <img src={pimg4} alt=""/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default PartnerSlider3;
          
          
          
          

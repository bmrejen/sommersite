
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import climg1 from '../../images/resources/client-img.png'
import climg2 from '../../images/resources/client-img2.png'

import './style.css'

class ClientSay extends Component {

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 2,
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
            <section className="client-sec">
                <div className="container">
                    <div className="sec-title2 text-center">
                        <h4>Testimonial</h4>
                        <h2>What Our Core Client Say?</h2>
                    </div>
                    <div className="client-say-sec">
                        <div className="cl-slide-sec">
                            <Slider {...settings}>
                                <div className="cl-slide">
                                    <div className="client-col">
                                        <div className="client-row">
                                            <div className="client-img">
                                                <img src={climg1} alt="alient"/>
                                            </div>
                                            <div className="client-info">
                                                <h3>TeamSnap</h3>
                                                <span>Amy, VP  Experience</span>
                                            </div>
                                        </div>
                                        <p>“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</p>
                                    </div>
                                </div>
                                <div className="cl-slide">
                                    <div className="client-col">
                                        <div className="client-row">
                                            <div className="client-img">
                                                <img src={climg2} alt="alient"/>
                                            </div>
                                            <div className="client-info">
                                                <h3>Julia Steven</h3>
                                                <span>Amy, VP  Experience</span>
                                            </div>
                                        </div>
                                        <p>“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</p>
                                    </div>
                                </div>
                                <div className="cl-slide">
                                    <div className="client-col">
                                        <div className="client-row">
                                            <div className="client-img">
                                                <img src={climg1} alt="alient"/>
                                            </div>
                                            <div className="client-info">
                                                <h3>TeamSnap</h3>
                                                <span>Amy, VP  Experience</span>
                                            </div>
                                        </div>
                                        <p>“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</p>
                                    </div>
                                </div>
                                <div className="cl-slide">
                                    <div className="client-col">
                                        <div className="client-row">
                                            <div className="client-img">
                                                <img src={climg2} alt="alient"/>
                                            </div>
                                            <div className="client-info">
                                                <h3>Julia Steven</h3>
                                                <span>Amy, VP  Experience</span>
                                            </div>
                                        </div>
                                        <p>“We don't take ourselves too seriously, but seriously enough to ensure we're creating the best product and experience for our customers. I feel like Help Scout does the same.”</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            );
        }
    }
    
    export default ClientSay;
          
          
          
          

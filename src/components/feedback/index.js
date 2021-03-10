
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fdimg1 from '../../images/resources/fd-img1.png'

import './style.css'

class FeedBack extends Component {
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
            <section className="client-feedback-sec">
                <div className="container">
                    <div className="sec-title2 text-center">
                        <h4>Funfacts on the Way</h4>
                        <h2>What Client’s are Saying</h2>
                    </div>
                    <div className="feedback-sec">
                        <Slider {...settings}>
                            <div className="feedback-col">
                                <p>“What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David.”</p>
                                <h3>Lurch Schpellchek</h3>
                                <span>Manager</span>
                                <div className="fd-img">
                                    <img src={fdimg1} alt=""/>
                                </div>
                            </div>
                            <div className="feedback-col">
                                <p>“What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David.”</p>
                                <h3>Longno Maraka</h3>
                                <span>Webdesigner</span>
                                <div className="fd-img">
                                    <img src={fdimg1} alt=""/>
                                </div>
                            </div>
                            <div className="feedback-col">
                                <p>“What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David.”</p>
                                <h3>Lurch Schpellchek</h3>
                                <span>Manager</span>
                                <div className="fd-img">
                                    <img src={fdimg1} alt=""/>
                                </div>
                            </div>
                            <div className="feedback-col">
                                <p>“What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David.”</p>
                                <h3>Longno Maraka</h3>
                                <span>Webdesigner</span>
                                <div className="fd-img">
                                    <img src={fdimg1} alt=""/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            );
        }
    }
    
    export default FeedBack;
          
          
          
          

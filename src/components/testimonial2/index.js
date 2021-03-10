
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cmimg1 from '../../images/resources/user-img.png'

import './style.css'

class TestSlider2 extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            margin: 10,
            loop: true,
            fade:true
        };
        return (
            <section className="testimonial_sec">
                <div className="container">
                    <div className="testi_sec">
                        <div className="sec-title center-style">
                            <h2>What Client’s Says <br /> About Us</h2>
                        </div>
                        <Slider {...settings}>
                            <div className="testi_slide">
                                <p>We needed additional insight, which is something that we didn't find when looking at other companies. I would feel that I was teacvhing them things, as opposed to LSEO time.</p>
                                <div className="user-col">
                                    <div className="user-img">
                                        <img src={cmimg1} alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <h3>K. Makanzi Jack </h3>
                                        <span>Creativework</span>
                                        <ul className="rating">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="testi_slide">
                                <p>We needed additional insight, which is something that we didn't find when looking at other companies. I would feel that I was teacvhing them things, as opposed to LSEO time.</p>
                                <div className="user-col">
                                    <div className="user-img">
                                        <img src={cmimg1} alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <h3>John Doe </h3>
                                        <span>Creativework</span>
                                        <ul className="rating">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="testi_slide">
                                <p>We needed additional insight, which is something that we didn't find when looking at other companies. I would feel that I was teacvhing them things, as opposed to LSEO time.</p>
                                <div className="user-col">
                                    <div className="user-img">
                                        <img src={cmimg1} alt=""/>
                                    </div>
                                    <div className="user-info">
                                        <h3>Jenifer Watson </h3>
                                        <span>Creativework</span>
                                        <ul className="rating">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            );
        }
    }
    
    export default TestSlider2;
          
          
          
          

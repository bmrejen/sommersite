
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cmimg1 from '../../images/resources/cm-img.jpg'

import './style.css'

class TestSlider extends Component {
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
            <div className="testimonial-sec">
                <div className="container">
                    <div className="testi-sec">
                        <div className="testi-wrap">
                            <Slider {...settings}>
                                <div className="testi-slide">
                                    <div className="testi-comment">
                                        <div className="cm-head">
                                            <div className="cm-img">
                                                <img src={cmimg1} alt=""/>
                                            </div>
                                            <div className="cm-info">
                                                <h3>John Doe</h3>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                        <p>Our approach has empowered local, national, and global brands to grow their businesses and achieve a competitive advantage and we can do the same for you.</p>
                                    </div>
                                </div>
                                <div className="testi-slide">
                                    <div className="testi-comment">
                                        <div className="cm-head">
                                            <div className="cm-img">
                                                <img src={cmimg1} alt=""/>
                                            </div>
                                            <div className="cm-info">
                                                <h3>Sarah James</h3>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                        <p>Our approach has empowered local, national, and global brands to grow their businesses and achieve a competitive advantage and we can do the same for you.</p>
                                    </div>
                                </div>
                                <div className="testi-slide">
                                    <div className="testi-comment">
                                        <div className="cm-head">
                                            <div className="cm-img">
                                                <img src={cmimg1} alt=""/>
                                            </div>
                                            <div className="cm-info">
                                                <h3>Natalie James</h3>
                                                <span>Content Writer</span>
                                            </div>
                                        </div>
                                        <p>Our approach has empowered local, national, and global brands to grow their businesses and achieve a competitive advantage and we can do the same for you.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default TestSlider;
          
          
          
          

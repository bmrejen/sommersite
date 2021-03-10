import React from 'react'
import { Link } from 'react-router-dom'
import primg1 from '../../images/vc1.png'
import primg2 from '../../images/resources/vector4.png'
import primg3 from '../../images/resources/vector5.png'
import primg4 from '../../images/vc2.png'
import primg6 from '../../images/resources/vector6.png'

import './style.css'

const Profservice = () => {
    return (
        <section className="prof-services-sec">
            <div className="prof-services">
                <div className="container">
                    <div className="sec-title center-style">
                        <h2>Professional Services & Features that Drive More Traffic</h2>
                    </div>
                    <div className="prof-serv-details">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="prof-text">
                                    <span className="vc-shape"><img src={primg1} alt="" /></span>
                                    <h3>The Power to Unleash</h3>
                                    <p>Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <p> Quis nostrud exercitation ullamcoo laboris nisi ut aliquip ex ea consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                    <Link to="/" title="" className="rm-btn"><i className="fa fa-long-arrow-right"></i></Link>
                                    <h1 className="pro-num">01</h1>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="vect-shape">
                                    <img src={primg2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prof-services">
                <div className="container">
                    <div className="prof-serv-details">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="vect-shape">
                                    <img src={primg3} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="prof-text">
                                    <span className="vc-shape"><img src={primg4} alt=""/></span>
                                    <h3>Take Advanced Reports</h3>
                                    <p>Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <p> Quis nostrud exercitation ullamcoo laboris nisi ut aliquip ex ea consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                    <Link to="/" title="" className="rm-btn"><i className="fa fa-long-arrow-right"></i></Link>
                                    <h1 className="pro-num">02</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prof-services">
                <div className="container">
                    <div className="prof-serv-details">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="prof-text">
                                    <span className="vc-shape"><img src={primg1} alt=""/></span>
                                    <h3>Identify Smart Activities</h3>
                                    <p>Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <p> Quis nostrud exercitation ullamcoo laboris nisi ut aliquip ex ea consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                    <Link to="/" title="" className="rm-btn"><i className="fa fa-long-arrow-right"></i></Link>
                                    <h1 className="pro-num">03</h1>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="vect-shape">
                                  <img src={primg6} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="container">
                    <Link to="#" title="" className="btn-style2">Get in Touch</Link>
                </div>
            </div>
        </section>

    )
}
export default Profservice;
import React from 'react'

import {Link}  from 'react-router-dom'

import icon1 from '../../images/Ficon/1.png'
import icon2 from '../../images/Ficon/4.png'
import icon3 from '../../images/Ficon/2.png'
import icon4 from '../../images/Ficon/5.png'
import icon5 from '../../images/Ficon/3.png'
import icon6 from '../../images/Ficon/6.png'

import './style.css'

const Work = () => {
    return(
        <div className="how-works-sec">
            <div className="container">
                <div className="sec-title">
					<h2>How Does Work it?</h2>
					<Link to="/" className="ftz-btn">More Features</Link>
					<div className="clearfix"></div>
				</div>
                <div className="features-row">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="feature-col">
                                <div className="fl-icon-wrap">
                                    <div className="normal-img">
                                        <img src={icon1} alt="f"/>
                                    </div>
                                    <div className="hover-img">
                                        <img src={icon2} alt="f"/>
                                    </div>
                                </div>
                                <h3><Link to="/service-details" title="">Digital Analytics</Link></h3>
                                <p>Duis dolor in reprehenderit <br /> in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                                <Link className="rm-btn" to="/home"><i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="feature-col scnd-col">
                                <div className="fl-icon-wrap">
                                    <div className="normal-img">
                                        <img src={icon3} alt="f"/>
                                    </div>
                                    <div className="hover-img">
                                        <img src={icon4} alt="f"/>
                                    </div>
                                </div>
                                <h3><Link to="/service-details" title="">Digital Marketing</Link></h3>
                                <p>Duis dolor in reprehenderit <br /> in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                                <Link className="rm-btn" to="/home"><i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="feature-col thrd-col">
                                <div className="fl-icon-wrap">
                                    <div className="normal-img">
                                        <img src={icon5} alt="f"/>
                                    </div>
                                    <div className="hover-img">
                                        <img src={icon6} alt="f"/>
                                    </div>
                                </div>
                                <h3><Link to="/service-details" title="">Email Marketing</Link></h3>
                                <p>Duis dolor in reprehenderit <br /> in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, </p>
                                <Link className="rm-btn" to="/home"><i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;
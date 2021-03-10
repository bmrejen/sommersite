import React from 'react'
import {Link}  from 'react-router-dom'
import icon3 from '../../images/Ficon/icon-13.png'
import icon4 from '../../images/Ficon/icon-14.png'
import icon5 from '../../images/Ficon/icon-12.png'
import icon6 from '../../images/Ficon/icon-15.png'

import './style.css'

const Service2 = () => {
    return(
        <section className="servicess_sec">
            <div className="container">
                <div className="sec-title2">
                    <h4>Startup Services</h4>
                    <h2>We Services is a Uniqe Concepts for our Worldwide Clients</h2>
                </div>		
                <div className="services_list">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="services_col">
                                <span className="fl-icon-b"><img src={icon3} alt=""/></span>
                                <h3><Link to="/servicedetails" title="">Security Plan</Link></h3>
                                <p>The Startup Owner's Manual walks you, step-by-step, through the tested and proven Customer Development process.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="services_col">
                                <span className="fl-icon-b"><img src={icon5} alt=""/></span>
                                <h3><Link to="/servicedetails" title="">Install Plugins</Link></h3>
                                <p>The Startup Owner's Manual walks you, step-by-step, through the tested and proven Customer Development process.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="services_col">
                                <span className="fl-icon-b"><img src={icon4} alt=""/></span>
                                <h3><Link to="/servicedetails" title="">Identify Support</Link></h3>
                                <p>The Startup Owner's Manual walks you, step-by-step, through the tested and proven Customer Development process.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="services_col">
                                <span className="fl-icon-b"><img src={icon6} alt=""/></span>
                                <h3><Link to="/servicedetails" title="">Board Automation</Link></h3>
                                <p>The Startup Owner's Manual walks you, step-by-step, through the tested and proven Customer Development process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Service2;

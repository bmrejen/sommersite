import React from 'react'
import {Link}  from 'react-router-dom'
import icon3 from '../../images/Ficon/icon-9.png'
import icon4 from '../../images/Ficon/icon-10.png'
import icon5 from '../../images/Ficon/icon-11.png'

import './style.css'

const Service = () => {
    return(
        <section className="services_sec">
            <div className="container">
                <div className="sec-title2">
                    <h4>We’re apps Showcase</h4>
                    <h2>We Are Bolans Commit to Efficiency with Freedom Booking</h2>
                </div>
                <div className="services_row">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="service-col active">
                                <span><img src={icon3} alt="sev"/></span>
                                <h3><Link to="/service-details" title="">Easy Customize</Link></h3>
                                <p>This feature allows parents to find a sitter nearby. Geolocation is especially useful in town.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="service-col">
                                <span><img src={icon4} alt="sev"/></span>
                                <h3><Link to="/service-details" title="">More Data Savings</Link></h3>
                                <p>This feature allows parents to find a sitter nearby. Geolocation is especially useful in town.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="service-col">
                                <span><img src={icon5} alt="sev"/></span>
                                <h3><Link to="/service-details" title="">Secure Platform</Link></h3>
                                <p>This feature allows parents to find a sitter nearby. Geolocation is especially useful in town.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Service;

import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/ft-logo.png'
import App1 from '../../images/btn1.png'
import App2 from '../../images/btn2.png'

import './style.css'

const FooterT = () =>{
  return(
    <div className="top-footer no-bg">
        <div className="container">
            <div className="footer-content">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="widget widget-logo">
                            <img src={Logo} alt="logo"/>
                            <p>Lorem ipsum dolor amet consectetur adip- ielit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis....</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="widget widget-links">
                            <h3 className="widget-title">QUICK LINKS</h3>
                            <ul className="lnks-list">
                                <li><Link to="/" title="">How It Works</Link></li>
                                <li><Link to="/" title="">Guarantee</Link></li>
                                <li><Link to="/" title="">Report Bug</Link></li>
                                <li><Link to="/" title="">Pricing</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="widget widget-contact">
                            <h3 className="widget-title">Contact Us</h3>
                            <ul className="lnks-list">
                                <li>Street Number & Name Postal Code 2034 London</li>
                                <li>+45 423 445 99</li>
                                <li><Link to="/" title="">www.domain.com</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="widget widget-about">
                            <h3 className="widget-title">ABOUT</h3>
                            <ul className="lnks-list">
                                <li><Link to="/" title="">About Singleton</Link></li>
                                <li><Link to="/" title="">Team</Link></li>
                                <li><Link to="/" title="">Testimonials</Link></li>
                                <li><Link to="/" title="">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5">
                        <div className="widget widget-app">
                            <h3 className="widget-title">Download the App</h3>
                            <ul className="download-btns">
                                <li><Link to="/" title=""><img src={App1} alt="l-img"/></Link></li>
                                <li><Link to="/" title=""><img src={App2} alt="l-img"/></Link></li>
                            </ul>
                            <h3>Follow Us Now</h3>
                            <ul className="social-links">
                                <li><Link to="/" title=""><i className="fa fa-facebook"></i></Link></li>
                                <li><Link to="/" title=""><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to="/" title=""><i className="fa fa-skype"></i></Link></li>
                                <li><Link to="/" title=""><i className="fa fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
} 

export default FooterT;
import React from 'react'
import SectionTite2 from '../sectiontitle2'
import {Link}  from 'react-router-dom'

import icon1 from '../../images/Ficon/icon-2.png'
import icon2 from '../../images/Ficon/icon-1.png'
import icon3 from '../../images/Ficon/3.png'
import icon4 from '../../images/Ficon/6.png'
import icon5 from '../../images/Ficon/icon-4.png'
import icon6 from '../../images/Ficon/icon-3.png'
import icon7 from '../../images/Ficon/icon-6.png'
import icon8 from '../../images/Ficon/icon-5.png'
import icon9 from '../../images/Ficon/icon-8.png'
import icon10 from '../../images/Ficon/icon-7.png'


const Work2 = () => {
    return(
        <section>
               <div className="how-works-sec style2">
            <div className="container">
                <SectionTite2 sectitle2={'Visually Analyze in-depth Digital Marketing & Opportunities'}/>
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
                                <h3>Marketing Analysis</h3>
                                <p>Increase web traffic with pay-per click and retargeting advertising for your website pages.</p>
                                <Link className="rm-btn" to="/home2"><i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="feature-col center-main">
                                <div className="fl-icon-wrap">
                                    <div className="normal-img">
                                        <img src={icon3} alt="f"/>
                                    </div>
                                    <div className="hover-img">
                                        <img src={icon4} alt="f"/>
                                    </div>
                                </div>
                                <h3>Social Media</h3>
                                <p>Use customers’ preferences to engage in strategic conversations and build brand loyalty.</p>
                                <Link className="rm-btn" to="/home2"><i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="feature-col">
                                <div className="fl-icon-wrap">
                                    <div className="normal-img">
                                        <img src={icon5} alt="f"/>
                                    </div>
                                    <div className="hover-img">
                                        <img src={icon6} alt="f"/>
                                    </div>
                                </div>
                                <h3>SEO & Backlinks</h3>
                                <p>Grow and continually improve your website’s visibility and ranking with organic search.</p>
                                <Link className="rm-btn" to="/home2"><i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="feature-col">
                                <div className="fl-icon-wrap">
                                    <div className="normal-img">
                                        <img src={icon7} alt="f"/>
                                    </div>
                                    <div className="hover-img">
                                        <img src={icon8} alt="f"/>
                                    </div>
                                </div>
                                <h3>Ecommerce</h3>
                                <p>Business to business (B2B) or consumer (B2C) we have the experience you need to cater to your online consumers. </p>
                                <Link className="rm-btn" to="/home2"><i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="feature-col">
                                <div className="fl-icon-wrap">
                                    <div className="normal-img">
                                        <img src={icon9} alt="f"/>
                                    </div>
                                    <div className="hover-img">
                                        <img src={icon10} alt="f"/>
                                    </div>
                                </div>
                                <h3>Hosting & Email</h3>
                                <p>Reliable website hosting with professional grade email services. We can even manage your domain names for you!</p>
                                <Link className="rm-btn" to="/home2"><i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
    )
}

export default Work2;
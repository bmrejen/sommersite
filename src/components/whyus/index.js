import React from 'react'
import {Link}  from 'react-router-dom';

import Whyusimg from '../../images/resources/vector7.png'

import './style.css'

const Whyus = () => {
    return(
        <section className="why-us-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="grw-text pt-0">
                            <div className="sec-title2">
                                <h4>About apps</h4>
                                <h2>Why choose our app for your business? collaborate with anyone</h2>
                            </div>
                            <p>Real people are using momo to quickly and effectively run their online business. With our full suite of marketing, sales, and creation solutions, you can focus on what matters to you most: creating content, sharing your story, and making sales.</p>
                            <Link to="/home3" title="" className="btn-style2">Read More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="vector-img">
                            <img src={Whyusimg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Whyus;

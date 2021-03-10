import React from 'react'
import {Link}  from 'react-router-dom';

import grimg from '../../images/resources/sz-img.png'

import './style.css'

const Grow = () => {
    return(
        <section className="grow-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="grw-img">
                            <img src={grimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="grw-text">
                            <div className="sec-title2">
                                <h2>The Best App To Growing Your Business</h2>
                            </div>
                            <p>On the other hand we denounce with righteous indignation & dislike men who are so beguiled and demoralized.</p>
                            <ul>
                                <li>Cloud Content Management </li>
                                <li>Company Collaboration  </li>
                                <li>Enterprise Social Networking </li>
                                <li>Integrated Digital Workplace </li>
                            </ul>
                            <Link to="/home3" title="" className="btn-style2">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Grow;

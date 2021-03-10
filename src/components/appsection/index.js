import React from 'react'

import appimg from '../../images/resources/app-img.png'

import './style.css'

const AppSection = () => {
    return(
        <section className="app-sec">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-7">
                        <div className="app-text">
                            <div className="sec-title">
                                <h2>Get The App Now!</h2>
                            </div>
                            <p>Have you ever heard the expression, <br /> “Do not count your chickens before they hatch?” Maybe an older wiser individua</p>
                            <ul className="app-btns">
                                <li>
                                    <div className="app-dv">
                                        <div className="app-icon">
                                            <i className="fa fa-apple"></i>
                                        </div>	
                                        <div className="app-btn-info">
                                            <h4>Download on the</h4>
                                            <h3>App Store</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="app-dv">
                                        <div className="app-icon">
                                            <i className="fa fa-android"></i>
                                        </div>	
                                        <div className="app-btn-info">
                                            <h4>Get on it</h4>
                                            <h3>Google Play</h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-5">
                        <div className="app-img">
                            <img src={appimg} alt="app"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AppSection;

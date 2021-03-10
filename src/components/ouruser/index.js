import React from 'react'
import './style.css'

import user1 from '../../images/resources/shp-img3.png'

const OurUser = () => {
    return(
        <section className="our_users_sec">
            <div className="container">
                <div className="our_users_row">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sp-img">
                                <img src={user1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="us-col">
                                <h3>Our Trusted User to See you Funfacts</h3>
                                <p>Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot Richard cheers the little rotter so I said, easy peasy buggered blower bevvy A bit of how's your father he nicked it arse over tit.</p>
                                <div className="ml-txt">
                                    <h2>8M+</h2>
                                    <ul>
                                        <li>Users</li>
                                        <li>trust our tools</li>
                                    </ul>
                                </div>
                                <div className="ml-txt">
                                    <h2>100K</h2>
                                    <ul>
                                        <li>Users</li>
                                        <li>trust our tools</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurUser;

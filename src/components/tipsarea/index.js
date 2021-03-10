import React from 'react';
import SectionTite from '../../components/sectiontitle'
import tipimg from '../../images/resources/vector3.png'
import icon7 from '../../images/Ficon/7.png'
import icon8 from '../../images/Ficon/8.png'

import './style.css'

const Tipsarea = () => {
    return (
        <div className="tips-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="vector_bg">
                            <img src={tipimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tips-col">
                            <SectionTite sectitle={'How to Upgrade Your Sales Get Tips & Tricks.'}/>
                            <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
                            <div className="tps-col">
                                <div className="tps-row">
                                    <div className="tp-icon">
                                        <img src={icon7} alt=""/>
                                    </div>
                                    <div className="tp-info">
                                        <h3>Analysis & Reporting</h3>
                                        <p>Naff are you taking the piss say blow off faff about wellies richard.</p>
                                    </div>
                                </div>
                                <div className="tps-row">
                                    <div className="tp-icon">
                                        <img src={icon8} alt=""/>
                                    </div>
                                    <div className="tp-info">
                                        <h3>Audit For Technical SEO </h3>
                                        <p>Naff are you taking the piss say blow off faff about wellies richard.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Tipsarea;
import React from 'react';
import SectionTite from '../sectiontitle'
import tipimg2 from '../../images/resources/vector2.png'
import icon7 from '../../images/Ficon/7.png'
import icon8 from '../../images/Ficon/8.png'

import './style.css'

const TipBusiness = () => {
    return (
        <div className="tips-business-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                            <div className="tips-col">
                                <SectionTite sectitle={'Now start your Digital Market Business own time'} />
                                <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
                                <div className="tps-col">
                                    <div className="tps-row">
                                        <div className="tp-icon">
                                            <img src={icon7} alt=""/>
                                        </div>
                                        <div className="tp-info">
                                            <h3>Automation Digital Marketing</h3>
                                            <p>Naff are you taking the piss say blow off faff about wellies richard.</p>
                                        </div>
                                    </div>
                                    <div className="tps-row">
                                        <div className="tp-icon">
                                            <img src={icon8} alt=""/>
                                        </div>
                                        <div className="tp-info">
                                            <h3>Optimization Search Engine </h3>
                                            <p>Naff are you taking the piss say blow off faff about wellies richard.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="vector-sd">
                            <img src={tipimg2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};
export default TipBusiness;
import React from 'react'

import './style.css'

const Funfact = () => {
    return(
        <div className="facts-sec">
            <div className="container">
                <div className="sec-title">
                    <h2>Our Some Fun Fects</h2>
                </div>
                <div className="facts-row">
                    <div className="fact-col">
                        <h3>Happy Customer</h3>
                        <h2>12<span>K</span></h2>
                    </div>
                    <div className="fact-col">
                        <h3>Complete Work</h3>
                        <h2>15<span>K</span></h2>
                        <span>+</span>
                    </div>
                    <div className="fact-col">
                        <h3>Total Invest</h3>
                        <h2><small>$</small>15<span>M</span></h2>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Funfact;
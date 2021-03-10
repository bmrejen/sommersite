import React from 'react'
import {Link}  from 'react-router-dom';


import './style.css'

const ReaySec = () => {
    return(
        <div className="reay-sec">
            <div className="container">
                <div className="reay-row">
                    <div className="reay-text">
                        <h4>So What is Next?</h4>
                        <h3>Are You Ready? Let’S Work!</h3>
                    </div>
                    <Link to="/home3" title="" className="btn-style2">Read More</Link>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}
export default ReaySec;

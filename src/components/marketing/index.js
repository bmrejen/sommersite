import React from 'react' 
import mrimg from '../../images/resources/vector3.png'
import {Link}  from 'react-router-dom'


import './style.css'

const Mareketingarea = ( props ) => {
    return(
    <section className={`marketing-sol-sec ${props.nobg}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="vector-img">
                        <img src={mrimg} alt=""/>
                    </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sol-col">
                            <div className="sec-title">
                                <h2>Advanced Marketing Solutions that Works for Clients!</h2>
                            </div>
                            <p>Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p>Excepteur occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animd est laborum sed ut perspiciatis unde omnis natus error sit.</p>
                            <Link to="/" title="" className="lnk-default">About Company <span className="next-btn"><i className="fa fa-long-arrow-right"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}
export default Mareketingarea;
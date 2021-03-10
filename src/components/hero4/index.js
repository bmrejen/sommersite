import React from 'react'
import './style.css'
import {Link}  from 'react-router-dom'

const Hero4 = (props) => {

    return(
        <section className="banner_section hp_4">
            <div className="container">
                <div className="banner_text">
                    <h2>We Provide Business Succed Tools for You.</h2>
                    <p>Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!</p>
                    <ul className="fdz-links">
                        <li><Link to="/home4" title="" className="btn-default">Try Now Free</Link></li>
                        <li><Link to="/home4" title="" className="btn-default">Find Out More  <i className="fa fa-angle-double-right"></i></Link></li>
                    </ul>
                </div>
                <div className="vectorr_shapee">
                    <img src={props.heroimg} alt=""/>
                </div>
                <div className="clearfix"></div>
            </div>
        </section>
        
    )
}

export default Hero4;
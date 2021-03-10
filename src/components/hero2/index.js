import React from 'react'
import './style.css'
import {Link}  from 'react-router-dom'

const Hero2 = (props) => {

    return(
        <div className="wrapper">
            <div className="banner_section">
                <div className="container">
                    <div className="banner_text">
                        <h4>Digital Marketing</h4>
                        <h2>We Know you are Find Better Solution for Business</h2>
                        <p>Consectetur adipiscing elit. Nunc eget felis id purus lobortis ultricies sit amet sed diam. Donec nisi lacus.</p>
                        <Link to="/" title="" className="btn-default">Get Started</Link>
                    </div>
                    <div className="vectorr_shapee">
                        <img src={props.heroimg} alt=""/>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero2;
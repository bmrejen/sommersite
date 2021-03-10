import React from 'react'
import './style.css'
import {Link}  from 'react-router-dom'

const Hero2 = (props) => {

    return(
        <div className="wrapper layout3">
            <div className="banner_section">
                <div className="container">
                    <div className="banner_text">
                        <h2>Modern Design to Showcase Your App!</h2>
                        <p>Consectetur adipiscing elit. Nunc eget felis id purus lobortis ultricies sit amet sed diam. Donec nisi lacus.</p>
                        <Link to="/home3" title="" className="btn-default">Request Demo</Link>
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
import React from 'react'
import Logo from '../../images/ft-logo.png'
import Headericon from '../../images/user_icon.png'
import {Link}  from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'

import './style.css'

const Header2 = () => {
    return(	
	<div className="middle-header style2 middle-header2">
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <Link to="/home2" title=""><img src={Logo} alt=""/></Link>
                </div>
                <nav className="d-lg-block d-none">
                    <ul>
                        <li><Link className="active" to="/home" title="">Home</Link>
                            <ul>
                                <li><Link className="active" to="/home">Home</Link></li>
                                <li><Link to="/home2">HomePage 2</Link></li>
                                <li><Link to="/home3">HomePage 3</Link></li>
                                <li><Link to="/home4">HomePage 4</Link></li>
                            </ul>
                        </li>
                        <li><Link  to="/about">About</Link></li>
                        <li><Link  to="/service">Services</Link>
                            <ul>
                                <li><Link  to="/servicedetails">Service Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/blog">Blog</Link>
                            <ul>
                                <li><Link to="blogdetails">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/" title="">Pages</Link>
                            <ul>
                                <li><Link to="/shop" title="">Shop</Link>
                                    <ul>
                                        <li><Link to="/shopdetails" title="">Shop Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/cart" title="">Shopping Cart</Link></li>
                                <li><Link to="/checkout" title="">Checkout</Link></li>
                                <li><Link to="/faq" title="">FAQs</Link></li>
                                <li><Link to="/coming" title="">Coming Soon</Link></li>
                                <li><Link to="/404" title="">Error 404</Link></li>
                                <li><Link to="/login" title="">Sign In</Link></li>
                                <li><Link to="/signup" title="">Sign Up</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact" title="">Contact</Link></li>
                    </ul>
                </nav>
                <div className="contact">
                    <img src={Headericon} alt=""/>
                    <div className="contact-info">
                        <span>Needs For Help</span>
                        <h4>082-456-3254</h4>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <MobileMenu/>
        </div>
    </div>
    )
}

export default Header2;
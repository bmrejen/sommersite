import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import RngSlider from '../../components/rangeslide';

import pthumb from '../../images/resources/pp1.jpg'
import pthumb2 from '../../images/resources/pp2.jpg'
import pthumb3 from '../../images/resources/pp3.jpg'


import './style.css'


class ShopSidebar extends Component {

    submitHandler = (e) => {
        e.preventDefault()
    }

    render() {

        return(
            <div className="sidebar">
                <div className="widget widget-search">
                    <form onSubmit={this.submitHandler}>
                        <input type="text" name="search"  placeholder="Search Now"/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="widget widget-categories">
                    <h3 className="widget-title">Categories</h3>
                    <ul className="categories-list">
                        <li>
                            <Link to="/shop" title="">Web Design </Link>
                            <span>(09)</span>
                        </li>
                        <li>
                            <Link to="/shop" title="">Graphics  </Link>
                            <span>(13)</span>
                        </li>
                        <li>
                            <Link to="/shop" title="">Web Development  </Link>
                            <span>(05)</span>
                        </li>
                        <li>
                            <Link to="/shop" title="">IOS/Android Development </Link>
                            <span>(19)</span>
                        </li>
                        <li>
                            <Link to="/shop" title="">Others </Link>
                            <span>(12)</span>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="widget widget-filter">
                    <h3 className="widget-title">Price Fliter</h3>
                    <form onSubmit={this.submitHandler}>
                        
                        <div className="price-bx">
                                <label>Price:</label>
                                <RngSlider/>
                            </div>
                        <button type="submit" className="btn-style2">Filter</button>
                        
                        <div className="clearfix"></div>
                    </form>
                </div>
                <div className="widget widget-popular-posts">
                    <h3 className="widget-title">Popolur Products</h3>
                    <ul className="popular-posts">
                        <li>
                            <div className="pp-post">
                                <div className="pp-post-thumb">
                                    <img src={pthumb} alt=""/>
                                </div>
                                <div className="pp-post-info">
                                    <h3><Link to="/shopdetails" title="">Jellybin with Candy</Link></h3>
                                    <span>$ 150</span>
                                    <ul className="rating">
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star-half-o"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="pp-post">
                                <div className="pp-post-thumb">
                                     <img src={pthumb2} alt=""/>
                                </div>
                                <div className="pp-post-info">
                                    <h3><Link to="/shopdetails" title="">Special Head Phone</Link></h3>
                                    <span>$ 120</span>
                                    <ul className="rating">
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star-half-o"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="pp-post">
                                <div className="pp-post-thumb">
                                    <img src={pthumb3} alt=""/>
                                </div>
                                <div className="pp-post-info">
                                    <h3><Link to="/shopdetails" title="">Jellybin with Candy</Link></h3>
                                    <span>$ 150</span>
                                    <ul className="rating">
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star"></i></Link></li>
                                        <li><Link to="/shop" title=""><i className="fa fa-star-half-o"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default  ShopSidebar;
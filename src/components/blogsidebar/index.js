import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import bthumb1 from '../../images/resources/rct-img1.jpg'
import bthumb2 from '../../images/resources/rct-img2.jpg'
import bthumb3 from '../../images/resources/rct-img3.jpg'
import './style.css'

class Sidebar extends Component {
 
    submitHandler = (e) => {
        e.preventDefault()
    }

    

    render() {
            return(
                <div className="sidebar">
                    <div className="widget widget-search">
                        <form onSubmit={this.submitHandler}>
                            <input type="text" name="search" placeholder="Search Now"/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="widget widget-categories">
                        <h3 className="widget-title">Categories</h3>
                        <ul className="categories-list">
                            <li>
                                <Link to="/blog" title="">Web Design </Link>
                                <span>(09)</span>
                            </li>
                            <li>
                                <Link to="/blog" title="">Graphics  </Link>
                                <span>(13)</span>
                            </li>
                            <li>
                                <Link to="/blog" title="">Web Development  </Link>
                                <span>(05)</span>
                            </li>
                            <li>
                                <Link to="/blog" title="">IOS/Android Development </Link>
                                <span>(19)</span>
                            </li>
                            <li>
                                <Link to="/blog" title="">Others </Link>
                                <span>(12)</span>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="widget widget-recent-posts">
                        <h3 className="widget-title">Recent News</h3>
                        <ul className="recent-posts">
                            <li>
                                <div className="rect-post">
                                    <div className="post-thumb">
                                        <img src={bthumb1} alt=""/>
                                    </div>
                                    <div className="post-info">
                                        <h3><Link to="/blog" title="">Best website traffice Booster with great tools. </Link></h3>
                                        <span>12 May, 2016</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="rect-post">
                                    <div className="post-thumb">
                                        <img src={bthumb2} alt=""/>
                                    </div>
                                    <div className="post-info">
                                        <h3><Link to="/blog" title="">Google take latest step & Catch the black SEO</Link></h3>
                                        <span>12 May, 2016</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="rect-post">
                                    <div className="post-thumb">
                                        <img src={bthumb3} alt=""/>
                                    </div>
                                    <div className="post-info">
                                        <h3><Link to="/blog" title="">How to become a best sale marketer in a year! </Link></h3>
                                        <span>12 May, 2016</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="widget widget-tags">
                        <h3 className="widget-title">Popular Tags</h3>
                        <ul className="tags-list">
                            <li><Link to="/blog" title="">SEO Dightal</Link></li>
                            <li><Link to="/blog" title="">Animation</Link></li>
                            <li><Link to="/blog" title="">Ideas</Link></li>
                            <li><Link to="/blog" title="">Design</Link></li>
                            <li><Link to="/blog" title="">Develpment</Link></li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
    
export default  Sidebar;
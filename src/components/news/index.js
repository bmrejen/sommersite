import React from 'react'
import { Link } from 'react-router-dom'

import news1 from '../../images/resources/blog1.png'
import news3 from '../../images/resources/blog2.png'
import news4 from '../../images/resources/blog3.png'
import news2 from '../../images/resources/auth-img.png'
import news5 from '../../images/resources/auth-img2.png'

import './style.css'

const News = () => {
    return (
        <section className="blog-sec">
            <div className="container">
                <div className="sec-title center-style">
                    <h2>Latest News <br />Get Tech Land Blog</h2>
                </div>
                <div className="blog-items">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={news1} alt="news" />
                                </div>
                                <div className="blog-info">
                                    <ul className="meta">
                                        <li><Link to="/home2" title="">20 March, 2018</Link></li>
                                        <li><Link to="/home2" title="">03 Comments</Link></li>
                                    </ul>
                                    <h3 className="blog-title"><Link to="/home2" title="">Top aide possible contender forced to resign over creepy.</Link></h3>
                                    <div className="shr-row">
                                        <div className="auth-col">
                                            <div className="auth-img">
                                                <img src={news2} alt="news" />
                                            </div>
                                            <h4><Link to="/home2" title=""> by Jhon Kenedy</Link></h4>
                                        </div>
                                        <ul className="post-optz">
                                            <li><Link to="/home2" title=""><i className="fa fa-comments"></i></Link></li>
                                            <li><Link to="/home2" title=""><i className="fa fa-share"></i></Link></li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={news3} alt="news" />
                                </div>
                                <div className="blog-info">
                                    <ul className="meta">
                                        <li><Link to="/home2" title="">20 March, 2018</Link></li>
                                        <li><Link to="/home2" title="">03 Comments</Link></li>
                                    </ul>
                                    <h3 className="blog-title"><Link to="/home2" title="">Thirty surrogate mothers charged with human trafficking.</Link></h3>
                                    <div className="shr-row">
                                        <div className="auth-col">
                                            <div className="auth-img">
                                                <img src={news5} alt="news" />
                                            </div>
                                            <h4><Link to="/home2" title=""> by Jhon Kenedy</Link></h4>
                                        </div>
                                        <ul className="post-optz">
                                            <li><Link to="/home2" title=""><i className="fa fa-comments"></i></Link></li>
                                            <li><Link to="/home2" title=""><i className="fa fa-share"></i></Link></li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={news4} alt="news" />
                                </div>
                                <div className="blog-info">
                                    <ul className="meta">
                                        <li><Link to="/home2" title="">20 March, 2018</Link></li>
                                        <li><Link to="/home2" title="">03 Comments</Link></li>
                                    </ul>
                                    <h3 className="blog-title"><Link to="/home2" title="">TChinese clients have been released after agreeing to keep.</Link></h3>
                                    <div className="shr-row">
                                        <div className="auth-col">
                                            <div className="auth-img">
                                                <img src={news2} alt="news" />
                                            </div>
                                            <h4><Link to="/home2" title=""> by Jhon Kenedy</Link></h4>
                                        </div>
                                        <ul className="post-optz">
                                            <li><Link to="/home2" title=""><i className="fa fa-comments"></i></Link></li>
                                            <li><Link to="/home2" title=""><i className="fa fa-share"></i></Link></li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News;
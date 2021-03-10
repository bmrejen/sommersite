import React from 'react'
import {Link}  from 'react-router-dom'
import Sidebar from '../../components/blogsidebar';

import blog1 from '../../images/resources/blog-lg2.jpg'
import blog2 from '../../images/resources/blog-lg3.jpg'
import blog3 from '../../images/resources/blog-lg4.jpg'
import blog4 from '../../images/resources/blog-lg5.jpg'
import Auth from '../../images/resources/auth-img.png'

import './style.css'

const Blog = ( props ) => {
    return(
        <section className="page-content">
            <div className="container">
                <div className="page-content-row">
                    <div className="blog_page">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog_items">
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <img src={blog1} alt=""/>
                                        </div>
                                        <div className="blog-info">
                                            <ul className="meta">
                                                <li><Link to="/blog" title="">20 March, 2018</Link></li>
                                                <li><Link to="/blog" title="">03 Comments</Link></li>
                                            </ul>
                                            <h3 className="blog-title"><Link to="/blogdetails" title="">Top aide possible contender forced to resign over creepy.</Link></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore inventore veritadipisci velit, snumquam eius modi tempora incidunt.</p>
                                            <div className="shr-row">
                                                <div className="auth-col">
                                                    <div className="auth-img">
                                                         <img src={Auth} alt=""/>
                                                    </div>
                                                    <h4><Link to="/blog" title=""> by Jhon Kenedy</Link></h4>
                                                </div>
                                                <ul className="post-optz">
                                                    <li><Link to="/blog" title=""><i className="fa fa-comments"></i></Link></li>
                                                    <li><Link to="/blog" title=""><i className="fa fa-share-alt"></i></Link></li>
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <img src={blog2} alt=""/>
                                        </div>
                                        <div className="blog-info">
                                            <ul className="meta">
                                                <li><Link to="/blog" title="">20 May, 2018</Link></li>
                                                <li><Link to="/blog" title="">03 Comments</Link></li>
                                            </ul>
                                            <h3 className="blog-title"><Link to="/blogdetails" title="">Thirty surrogate mothers charged with human trafficking.</Link></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore inventore veritadipisci velit, snumquam eius modi tempora incidunt.</p>
                                            <div className="shr-row">
                                                <div className="auth-col">
                                                    <div className="auth-img">
                                                        <img src={Auth} alt=""/>
                                                    </div>
                                                    <h4><Link to="/blog" title=""> by Jhon Kenedy</Link></h4>
                                                </div>
                                                <ul className="post-optz">
                                                    <li><Link to="/blog" title=""><i className="fa fa-comments"></i></Link></li>
                                                    <li><Link to="/blog" title=""><i className="fa fa-share-alt"></i></Link></li>
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <img src={blog3} alt=""/>
                                        </div>
                                        <div className="blog-info">
                                            <ul className="meta">
                                                <li><Link to="/blog" title="">20 April, 2018</Link></li>
                                                <li><Link to="/blog" title="">03 Comments</Link></li>
                                            </ul>
                                            <h3 className="blog-title"><Link to="/blogdetails" title="">Chinese clients have been released after agreeing to keep.</Link></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore inventore veritadipisci velit, snumquam eius modi tempora incidunt.</p>
                                            <div className="shr-row">
                                                <div className="auth-col">
                                                    <div className="auth-img">
                                                        <img src={Auth} alt=""/>
                                                    </div>
                                                    <h4><Link to="/blog" title=""> by Jhon Kenedy</Link></h4>
                                                </div>
                                                <ul className="post-optz">
                                                    <li><Link to="/blog" title=""><i className="fa fa-comments"></i></Link></li>
                                                    <li><Link to="/blog" title=""><i className="fa fa-share-alt"></i></Link></li>
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <img src={blog4} alt=""/>
                                        </div>
                                        <div className="blog-info">
                                            <ul className="meta">
                                                <li><Link to="/blog" title="">20 Oct, 2018</Link></li>
                                                <li><Link to="/blog" title="">03 Comments</Link></li>
                                            </ul>
                                            <h3 className="blog-title"><Link to="/blogdetails" title="">Chinese clients have been released after agreeing to keep.</Link></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore inventore veritadipisci velit, snumquam eius modi tempora incidunt.</p>
                                            <div className="shr-row">
                                                <div className="auth-col">
                                                    <div className="auth-img">
                                                        <img src={Auth} alt=""/>
                                                    </div>
                                                    <h4><Link to="/blog" title=""> by Jhon Kenedy</Link></h4>
                                                </div>
                                                <ul className="post-optz">
                                                    <li><Link to="/blog" title=""><i className="fa fa-comments"></i></Link></li>
                                                    <li><Link to="/blog" title=""><i className="fa fa-share-alt"></i></Link></li>
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination-row">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item"><Link className="page-link" to="/blog"><i className="fa fa-angle-left"></i></Link></li>
                                            <li className="page-item active"><Link className="page-link" to="/blog">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="/blog">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="/blog">3</Link></li>
                                            <li className="page-item"><Link className="page-link" to="/blog"><i className="fa fa-angle-right"></i></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-4">
                               <Sidebar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default  Blog;
import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import Sidebar from '../blogsidebar';
import blog1 from '../../images/resources/blog-lg2.jpg'
import Auth from '../../images/resources/auth-img.png'
import cm1 from '../../images/resources/cm1.png'
import cm2 from '../../images/resources/cm2.png'
import cm3 from '../../images/resources/cm3.png'

import './style.css'

class BlogDetails  extends Component {

    submitHandler = ( e ) => {
       e.preventDefault()
    }
  
   render() {
        return(
            <section className="page-content">
                <div className="container">
                    <div className="page-content-row">
                        <div className="blog_page">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <img src={blog1} alt=""/>
                                        </div>
                                        <div className="blog-info">
                                            <ul className="meta">
                                                <li><Link to="/blogdetails" title="">20 May, 2018</Link></li>
                                                <li><Link to="/blogdetails" title="">03 Comments</Link></li>
                                            </ul>
                                            <h3 className="blog-title">Thirty surrogate mothers charged with human trafficking.</h3>
                                            <p>Eveniet in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at seds eros sed et accumsan et iusto odio dignissim. Temporibus autem quibusdam et aut officiis.</p>
                                            <p> cookies are set through this site to recognise your repeat visits and preferences, serve more vant ads, facilitate social sharing, and to violanalyse traffic.Others wondered if the hand of od was at work over New York, heralding perhaps a new Pope, or the moment when Evangeli cals say true believers will be swept up, or "raptured", to heaven. When these electrons recombine with the excited atoms, returning them to their starting energy state, light is emitted.</p>
                                            <p> When these electrons recombine with the excited atoms, returning them to their starting energy state, light is emitted. The colour of the light emitted depends on the type of atoms involved.</p>
                                            <blockquote>
                                                <p>What sort of men would think it is acceptable to subject a young girl to this level of brutality and violence? an attack like this in ourcommunities and we must all work together.</p>
                                            </blockquote>
                                            
                                            <p>Cookies are set through this site to recognise your repeat visits and preferences, serve more vant ads, facilitate social sharing, and to violanalyse traffic.Others wondered if the hand of od was at work over New York, heralding perhaps a new Pope, or the moment </p>
                                            <div className="clearfix"></div>
                                            <div className="shr-row">
                                                <div className="auth-col">
                                                    <div className="auth-img">
                                                        <img src={Auth} alt=""/>
                                                    </div>
                                                    <h4><Link to="/blogdetails" title=""> by Jhon Kenedy</Link></h4>
                                                </div>
                                                <ul className="post-optz">
                                                    <li><Link to="/blogdetails" title=""><i className="fa fa-comments"></i></Link></li>
                                                    <li><Link to="/blogdetails" title=""><i className="fa fa-share"></i></Link></li>
                                                </ul>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comments-section">
                                        <h3>2 Comments</h3>
                                        <ul className="comments-list">
                                            <li>
                                                <div className="comment">
                                                    <div className="cmnt-img">
                                                        <img src={cm1} alt=""/>
                                                    </div>
                                                    <div className="cmnt-info">
                                                        <h3>Tamoc Morala <span>13 June, 2018 at 07:30</span></h3>
                                                        <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.</p>
                                                        <Link to="/blogdetails" title="" className="reply-btn">Reply</Link>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="comment">
                                                            <div className="cmnt-img">
                                                                <img src={cm2} alt=""/>
                                                            </div>
                                                            <div className="cmnt-info">
                                                                <h3>Rosta Barsr   <span>13 June, 2018 at 07:30</span></h3>
                                                                <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future.</p>
                                                                <Link to="/blogdetails" title="" className="reply-btn">Reply</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="comment">
                                                    <div className="cmnt-img">
                                                        <img src={cm3} alt=""/>
                                                    </div>
                                                    <div className="cmnt-info">
                                                        <h3>Morala Tamoc  <span>13 June, 2018 at 07:30</span></h3>
                                                        <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future. The same true we experience the emotional sensation.</p>
                                                        <Link to="/blogdetails" title="" className="reply-btn">Reply</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="comment-form">
                                        <h3>Leave A Comment</h3>
                                        <form onSubmit={this.submitHandler} className="form-roww">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="form-field">
                                                        <input type="text" name="name" placeholder="Full Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="form-field">
                                                        <input type="email" name="email" placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-field">
                                                        <textarea name="message" placeholder="Your Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-submit">
                                                        <button type="submit" className="btn-style2">Send Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
   }
    
export default  BlogDetails;
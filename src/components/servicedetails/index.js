import React from 'react'
import {Link}  from 'react-router-dom';

import sedtimg1 from '../../images/icon15.png'
import sedtimg2 from '../../images/resources/blog-lg.jpg'


import './style.css'

const Servicedetails = () => {
    return(
        <section className="page-content">
            <div className="container">
                <div className="page-content-row">
                    <div className="services_page">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="dy-sidebar">
                                    <ul className="svs-list">
                                        <li>
                                            <Link to="/servicedetails" title="">All Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/servicedetails" title="">Web Develpment </Link>
                                        </li>
                                        <li>
                                            <Link to="/servicedetails" title="">Strategy & Planning</Link>
                                        </li>
                                        <li>
                                            <Link to="/servicedetails" title="">Marketing Research</Link>
                                        </li>
                                        <li>
                                            <Link to="/servicedetails" title="">Growth Tracking</Link>
                                        </li>
                                        <li>
                                            <Link to="/servicedetails" title="">Enterprise Consulting</Link>
                                        </li>
                                    </ul>
                                    <div className="brouchers">
                                        <h3>Download Our Brochures</h3>
                                        <div className="broucher-row">
                                            <div className="brw-img">
                                                <img src={sedtimg1} alt=""/>
                                            </div>
                                            <div className="brw-info">
                                                <p>Business is a marketing discipline on growing visibility in organic (non-paid) technic required.</p>
                                                <Link to="/servicedetails" title="">Click here to download</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="blog-item single">
                                    <div className="blog-img">
                                        <img src={sedtimg2} alt=""/>
                                    </div>
                                    <div className="blog-info">
                                        <h3 className="blog-title">Startegy and Plan.</h3>
                                        <p>Having been around for over a decade, Basecamp is considered a reliable tool that excels at giving organizations a high-level view of their teams. Like Asana, Basecamp can help monitor tracking, but also offers additional features like direct messaging chats, centralized document storage, and a scheduling tool.Basecamp aims to take on Slack, Asana, Google Drive, and Dropbox by melding all of their competitors into one robust management tool.</p>
                                        <h4>Features</h4>
                                            <p>Designed with the harried business person in mind, Basecamp helps managers and team members stay on top of their professional lives. The app boasts that users will no longer drown in a sea of emails as that feature is already embedded into the app. Additionally, the scheduling and tracking features help ensure teams never again miss a deadline. Another interesting component of Basecamp is that manager can eliminate the need for “check-in” meetings by sending an automated message daily to employees that ask for a recap of what they accomplished that day. Then employees can “tag” teammates in their recaps to explain what they need help with or what they finished.</p>
                                            <h4>Cost</h4>
                                        <p> A unique feature of Basecamp is that the app doesn’t charge for an increase in the number of users or projects. So unlike some of its peers, Basecamp charges a flat-fixed fee of $99 a month for a team, no
                                        matter the size.</p>
                                        <h4>Why It’s Good for SEO Pros</h4>
                                        <p>Managing a client’s SEO consists of many different timelines and action items. Keeping track of client emails, meetings, and central documents is a full-time job.</p>
                                        <p>By offering one of the best all-encompassing software solutions, Basecamp helps busy SEO pros stay on top of their entire business by more efficiently checking in with their team and deadlines in one easy to use the app.Casie Gillette, senior director of digital marketing at KoMarketing, uses Basecamp mainly for
                                        communicating to clients.</p>
                                        <p> “Basecamp is our primary means of communication with clients,” Gillette said. “For any deliverable, it allows an easy way to track the conversation and adjust docs accordingly.”</p>
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
export default Servicedetails;

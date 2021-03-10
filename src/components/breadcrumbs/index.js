import React from 'react'
import {Link}  from 'react-router-dom'

import './style.css'

const Breadcrumbs = ( props ) => {
    return(
        <section className="pager-sec">
            <div className="container">
                <div className="pager-sec-details">
                    <h2 className="page-title">{props.CrumbsTitle}</h2>
                    <ul className="pages-list">
                        <li><Link to="/home" title="">Home</Link></li>
                        <li className="active"><span>{props.pagename}</span></li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </div>
        </section>
    )
}
export default  Breadcrumbs;
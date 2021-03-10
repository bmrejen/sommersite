import React from 'react'
import {Link}  from 'react-router-dom';
import error from '../../images/resources/404.png'



import './style.css'

const ErrorSec = ( props ) => {
    return(
        <section className="page-content">
            <div className="container">
                <div className="page-content-row">
                    <div className="error-page text-center">
                        <img src={error} alt=""/>
                        <h3>Page Not Found</h3>
                        <p> We’re sorry, the page you have looked for does not exist in our database! Maybe go to our home page or try to use a search?</p>
                        <Link to="/home" title="" className="btn-style2">Go Back to home Page</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default  ErrorSec;
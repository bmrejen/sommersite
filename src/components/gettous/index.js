import React from 'react'
import {Link}  from 'react-router-dom'

import './style.css'

const Gettouch = () =>{
  return(
    <div className="get-touch-sec">
        <div className="container">
            <div className="get-text text-center">
                <h2>Have a burning question, a problem that needs solving or you'd just like to say hello...</h2>
                <Link to="/" title="">Get in Touch</Link>
            </div>
        </div>
    </div>
  )
} 

export default Gettouch;
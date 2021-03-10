import React from 'react'

import subimg from '../../images/resources/subs-img.png'
import './style.css'



const Subscribe = ( props ) => {

    const submitHandler = ( e ) => {
         e.preventDefault()
    }
    return(
        <section className={`layout3 subs-sec sub-sec-2 ${props.subclass}`}>
            <div className="container">
                <div className="subscribe-sec">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="subs-img">
                                <img src={subimg} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subs-text">
                                <div className="sec-title">
                                    <h2>Subscribe Our Newsletter</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo </p>
                                <form onSubmit={submitHandler}>
                                    <input type="email" name="email" placeholder="Enter Your Email"/>
                                    <button type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscribe;
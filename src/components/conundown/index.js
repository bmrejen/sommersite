import React, { Component } from 'react';
import CountDown from 'reactjs-countdown';

import './style.css'
 
class Comeing extends Component {

    submitHandler = (e) => {
        e.preventDefault()
    }


    render() {
        return(
            <div className="wrapper">
                <div className="cm-page">
                    <div className="cm-page-content">
                        <div className="cm-logo">

                            
                        </div>
                        <h2>Coming Soon</h2>
                        <div className="bolans-time-counter">
                            <CountDown
                                deadline="August 22, 2020"
                            />
                            <div className="clearfix"></div>
                        </div>
                        <p>Our Website is under construction. stay tuned for something amazing!. Subscribe to be notified,</p>
                        <form onSubmit={this.submitHandler}>
                            <input type="text" name="email" placeholder="Enter Your Email"/>
                            <button type="submit" className="btn-style2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Comeing;
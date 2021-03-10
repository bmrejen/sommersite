import React, { Component } from 'react'
import SectionTite2 from '../sectiontitle2'

import './style.css'

    class Seo extends Component {
 
        submitHander = ( e ) => {
           e.preventDefault()
        }

        render(){
            return (
                <div className="seo-sec">
                    <div className="container">
                        <div className="seo-sec-details text-center">
                            <div className="sec-title center-style">
                                <SectionTite2 sectitle2={'Check your Website’s SEO!'}/>
                            </div>
                            <form onSubmit={this.submitHander} className="form-row">
                                <input type="text" name="search" placeholder="Enter URL" />
                                <button type="submit">Check Now</button>
                            </form>
                            <p>The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!</p>
                        </div>
                    </div>
                </div>
            )
        }
    
   
}
export default Seo;
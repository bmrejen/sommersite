import React from 'react'
import {Link}  from 'react-router-dom'

import lycimg from '../../images/resources/shp-img.png'

const Lytsec = () => {
    return(
        <section className="lyt-sec">
            <div className="container-fluid">
                <div className="lyt-sec-details">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="shp-img shdw">
                                <img src={lycimg} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="grw-text">
                                <div className="sec-title2">
                                    <h2>Powerful & Elegant <br /> Layout From Top To Bottom Of The Design</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore inventore veritadipisci velit, snumquam eius modi tempora incidunt ut labore et dolore erat voluptatem.</p>
                                <ul>
                                    <li>Professional and easy-to-use software </li>
                                    <li>Setup and installations takes ten minutes  </li>
                                    <li>Perfect for any device with pixel-perfect design </li>
                                </ul>
                                <Link to="#" title="" className="btn-style2">Load More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Lytsec;

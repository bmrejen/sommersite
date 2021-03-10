import React from 'react'
import {Link}  from 'react-router-dom'
import ShopSidebar from '../../components/shopsidebar';
import shop1 from '../../images/resources/shop-img1.jpg'
import shop2 from '../../images/resources/shop-img2.jpg'
import shop3 from '../../images/resources/shop-img3.jpg'
import shop4 from '../../images/resources/shop-img4.jpg'
import shop5 from '../../images/resources/shop-img5.jpg'
import shop6 from '../../images/resources/shop-img6.jpg'


import './style.css'

const Shop = ( props ) => {
    return(
        <section className="page-content">
            <div className="container">
                <div className="page-content-row">
                    <div className="shop-page">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="shop-page-details">
                                    <div className="shop-head">
                                        <span>Showing 1–9 of 15 results</span>
                                        <div className="sort-by">
                                            <select>
                                                <option>Default Sorting</option>
                                                <option>0 - 10</option>
                                                <option>0 - 20</option>
                                                <option>0 - 30</option>
                                                <option>0 - 40</option>
                                            </select>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="shop-items">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="shop-item">
                                                    <div className="shop-img">
                                                         <img src={shop1} alt=""/>
                                                        <Link to="/shop" title="" className="add-cart">Add Cart <span><i className="fa fa-shopping-cart"></i></span></Link>
                                                    </div>
                                                    <div className="shop-info">
                                                        <h3><Link to="/shopdetails" title="">Product Title Name</Link></h3>
                                                        <span className="price-num">$ 250</span>
                                                        <Link to="/shop" title="" className="add-cart-btn"><i className="fa fa-heart-o"></i></Link>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="shop-item">
                                                    <div className="shop-img">
                                                        <img src={shop2} alt=""/>
                                                        <Link to="/shop" title="" className="add-cart">Add Cart <span><i className="fa fa-shopping-cart"></i></span></Link>
                                                    </div>
                                                    <div className="shop-info">
                                                        <h3><Link to="/shopdetails" title="">Product Title Name</Link></h3>
                                                        <span className="price-num">$ 250</span>
                                                        <Link to="/shop" title="" className="add-cart-btn"><i className="fa fa-heart-o"></i></Link>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="shop-item">
                                                    <div className="shop-img">
                                                        <img src={shop3} alt=""/>
                                                        <Link to="/shop" title="" className="add-cart">Add Cart <span><i className="fa fa-shopping-cart"></i></span></Link>
                                                    </div>
                                                    <div className="shop-info">
                                                        <h3><Link to="/shopdetails" title="">Product Title Name</Link></h3>
                                                        <span className="price-num">$ 250</span>
                                                        <Link to="/shop" title="" className="add-cart-btn"><i className="fa fa-heart-o"></i></Link>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="shop-item">
                                                    <div className="shop-img">
                                                        <img src={shop4} alt=""/>
                                                        <Link to="/shop" title="" className="add-cart">Add Cart <span><i className="fa fa-shopping-cart"></i></span></Link>
                                                    </div>
                                                    <div className="shop-info">
                                                        <h3><Link to="/shopdetails" title="">Product Title Name</Link></h3>
                                                        <span className="price-num">$ 250</span>
                                                        <Link to="/shop" title="" className="add-cart-btn"><i className="fa fa-heart-o"></i></Link>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="shop-item">
                                                    <div className="shop-img">
                                                        <img src={shop5} alt=""/>
                                                        <Link to="/shop" title="" className="add-cart">Add Cart <span><i className="fa fa-shopping-cart"></i></span></Link>
                                                    </div>
                                                    <div className="shop-info">
                                                        <h3><Link to="/shopdetails" title="">Product Title Name</Link></h3>
                                                        <span className="price-num">$ 250</span>
                                                        <Link to="/shop" title="" className="add-cart-btn"><i className="fa fa-heart-o"></i></Link>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="shop-item">
                                                    <div className="shop-img">
                                                        <img src={shop6} alt=""/>
                                                        <Link to="/shop" title="" className="add-cart">Add Cart <span><i className="fa fa-shopping-cart"></i></span></Link>
                                                    </div>
                                                    <div className="shop-info">
                                                        <h3><Link to="/shopdetails" title="">Product Title Name</Link></h3>
                                                        <span className="price-num">$ 250</span>
                                                        <Link to="/shop" title="" className="add-cart-btn"><i className="fa fa-heart-o"></i></Link>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagination-row">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><Link className="page-link" to="/shop"><i className="fa fa-angle-left"></i></Link></li>
                                                <li className="page-item active"><Link className="page-link" to="/shop">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/shop">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/shop">3</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/shop"><i className="fa fa-angle-right"></i></Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                               <ShopSidebar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default  Shop;
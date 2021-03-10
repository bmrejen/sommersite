import React, { Component } from 'react'
import ShopSidebar from '../shopsidebar';

import ShopTabs from '../shoptabs'

import prdetails from '../../images/resources/shop-img1.jpg'



import './style.css'

class ShopSingle extends Component{

    submitHandler = (e) => {
        e.preventDefault()
    }
    state= {
     qty:2
    }

    increment = () => {
       this.setState({
           qty: this.state.qty+1
       })
    }

    decrement = () => {
        this.setState({
            qty: this.state.qty-1
        })
    }



    render(){
        return(
            <section className="page-content">
                <div className="container">
                    <div className="page-content-row">
                        <div className="shop-page">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="shop-page-details">
                                        <div className="shop-items">
                                            <div className="shop-item single">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="shop-img">
                                                             <img src={prdetails} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="shop-info">
                                                            <h3>Product Title Name</h3>
                                                            <ul className="rating">
                                                                <li><span><i className="fa fa-star"></i></span></li>
                                                                <li><span><i className="fa fa-star"></i></span></li>
                                                                <li><span><i className="fa fa-star"></i></span></li>
                                                                <li><span><i className="fa fa-star"></i></span></li>
                                                                <li><span><i className="fa fa-star"></i></span></li>
                                                            </ul>
                                                            <span className="review_count">( 3 Customer Reviews )</span>
                                                            <div className="clearfix"></div>
                                                            <span className="price-num">$350.00</span>
                                                            <p>There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                                                            <form onSubmit={this.submitHandler}>
                                                                <div className="handle-counter" id="handleCounter">
                                                                    <input type="text" value={this.state.qty} onChange={() => console.log()} />
                                                                    <div className="lft-cntrs">
                                                                        <span onClick={this.increment} className="counter-plus btn"><i className="fa fa-caret-up"></i></span>
                                                                        <span onClick={this.decrement} className="counter-minus btn"><i className="fa fa-caret-down"></i></span>
                                                                    </div>
                                                                </div>
                                                                <button type="submit" className="btn-style2">Add To Cart</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-area">
                                                <ShopTabs/>
                                            </div>
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
    
}
export default  ShopSingle;
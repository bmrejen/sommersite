import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sp1 from '../../images/resources/sp1.jpg'



import './style.css'

class ShopCart extends Component {

    
    state = {
        qty: 1,
        qty2: 1,
        qty3: 1
    }

    increment = qty => () => {
        this.setState({
            [qty]: this.state[qty] + 1
        })
    }

    decrement = qty => () => {
        this.setState({
            [qty]: this.state[qty] - 1
        })
    }

    submitHander = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <section className="page-content">
                <div className="container">
                    <div className="page-content-row">
                        <div className="shopping-cart-page">
                            <div className="shop-cart-head">
                                <div className="sp-product-name">
                                    <h3>PRODUCT</h3>
                                </div>
                                <div className="pp-price">
                                    <h3>PRICE</h3>
                                </div>
                                <div className="pp-quantity">
                                    <h3>QUANTITY</h3>
                                </div>
                                <div className="pp-total">
                                    <h3>TOTAL</h3>
                                </div>
                                <div className="pp-empty"></div>
                                <div className="clearfix"></div>
                            </div>
                            <form onSubmit={this.submitHander}>
                                <div className="shop-cart-body">
                                    <div className="shop-cart-items">
                                        <div className="sp-product-name">
                                            <div className="crt-img">
                                                <img src={sp1} alt=""/>
                                            </div>
                                            <div className="crt-info">
                                                <h3>Patient Ninja</h3>
                                                <span>#859632007881 <br />Size: 23” Color: Red</span>
                                            </div>
                                        </div>
                                        <div className="pp-price">
                                            <h3>$35.00</h3>
                                        </div>
                                        <div className="pp-quantity">
                                            <div className="handle-counter" id="handleCounter">
                                                <input type="text" value={this.state.qty} onChange={() => console.log()} />
                                                <div className="lft-cntrs">
                                                    <span onClick={this.increment('qty')} className="counter-plus btn"><i className="fa fa-caret-up"></i></span>
                                                    <span onClick={this.decrement('qty')} className="counter-minus btn"><i className="fa fa-caret-down"></i></span>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                        <div className="pp-total">
                                            <h3>$35.00</h3>
                                        </div>
                                        <div className="pp-empty">
                                            <Link to="/cart" title="" className="delete-item"><i className="fa fa-times"></i></Link>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="shop-cart-items">
                                        <div className="sp-product-name">
                                            <div className="crt-img">
                                                <img src={sp1} alt=""/>
                                            </div>
                                            <div className="crt-info">
                                                <h3>Patient Ninja</h3>
                                                <span>#859632007881 <br />Size: 23” Color: Red</span>
                                            </div>
                                        </div>
                                        <div className="pp-price">
                                            <h3>$35.00</h3>
                                        </div>
                                        <div className="pp-quantity">
                                            <div className="handle-counter" id="handleCounter2">
                                                <input type="text" value={this.state.qty2} onChange={() => console.log()} />
                                                <div className="lft-cntrs">
                                                    <span onClick={this.increment('qty2')} className="counter-plus btn"><i className="fa fa-caret-up"></i></span>
                                                    <span onClick={this.decrement('qty2')} className="counter-minus btn"><i className="fa fa-caret-down"></i></span>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                        <div className="pp-total">
                                            <h3>$35.00</h3>
                                        </div>
                                        <div className="pp-empty">
                                            <Link to="/cart" title="" className="delete-item"><i className="fa fa-times"></i></Link>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="shop-cart-items">
                                        <div className="sp-product-name">
                                            <div className="crt-img">
                                                <img src={sp1} alt=""/>
                                            </div>
                                            <div className="crt-info">
                                                <h3>Patient Ninja</h3>
                                                <span>#859632007881 <br />Size: 23” Color: Red</span>
                                            </div>
                                        </div>
                                        <div className="pp-price">
                                            <h3>$35.00</h3>
                                        </div>
                                        <div className="pp-quantity">
                                            <div className="handle-counter" id="handleCounter3">
                                                <input type="text" value={this.state.qty3} onChange={() => console.log()} />
                                                <div className="lft-cntrs">
                                                    <span onClick={this.increment('qty3')} className="counter-plus btn"><i className="fa fa-caret-up"></i></span>
                                                    <span onClick={this.decrement('qty3')} className="counter-minus btn"><i className="fa fa-caret-down"></i></span>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                        <div className="pp-total">
                                            <h3>$35.00</h3>
                                        </div>
                                        <div className="pp-empty">
                                            <Link to="/cart" title="" className="delete-item"><i className="fa fa-times"></i></Link>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-7">
                                        <div className="coupan-col">
                                            <input type="text" name="coupan-code" placeholder="Coupon Code" />
                                            <button type="submit" className="btn-style2">Apply Coupon</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-5">
                                        <ul className="checkt-details">
                                            <li>
                                                <h4>Subtotal</h4>
                                                <span>$276.65</span>
                                            </li>
                                            <li>
                                                <h4>Shipping Cost</h4>
                                                <span>$13.00</span>
                                            </li>
                                            <li>
                                                <h4>Total</h4>
                                                <span>$289.65</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="upt-row">
                                            <button type="submit" className="btn-style2">Update Cart</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 full_wdth">
                                        <div className="upt-row fl-right">
                                            <button type="submit" className="btn-style2">Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default ShopCart;
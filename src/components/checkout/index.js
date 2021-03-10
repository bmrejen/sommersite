import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pyp from '../../images/resources/paypal.png'
import './style.css'


class CheckoutP extends Component {
 
    submitHander = ( e ) => {
       e.preventDefault()
    }

    render() {
        return (
            <section className="page-content">
                <div className="container">
                    <div className="page-content-row">
                        <div className="checkout-page">
                            <div className="ret-row">
                                <i className="fa fa-window-maximize"></i>
                                <h4>Returning customer? <Link to="/checkout" title="">Click here to login</Link></h4>
                            </div>
                            <div className="ret-row">
                                <i className="fa fa-window-maximize"></i>
                                <h4>Have a coupone? <Link to="/checkout" title="">Click here to enter your code</Link></h4>
                            </div>
                            <form onSubmit={this.submitHander}>
                                <div className="top-hd-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout-fields">
                                                <h3>Billing Details</h3>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>First Name*</label>
                                                            <input type="text" name="name" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>last Name</label>
                                                            <input type="text" name="last-name" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <label>Company name</label>
                                                            <input type="text" name="company" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>Email Address</label>
                                                            <input type="text" name="email" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>Phone</label>
                                                            <input type="text" name="phone" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <label>Country</label>
                                                            <div className="select-field">
                                                                <select>
                                                                    <option>Pakistan</option>
                                                                    <option>Australia</option>
                                                                    <option>USA</option>
                                                                    <option>Canada</option>
                                                                    <option>Kashmir</option>
                                                                </select>
                                                                <i className="fa fa-angle-down"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <label>Address</label>
                                                            <input type="text" name="address" placeholder="Street Address" />
                                                            <input type="text" name="address2" placeholder="Apartment,suite,unit etc. (optional)" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <label>Town/City</label>
                                                            <input type="text" name="town-city" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>State/Country</label>
                                                            <input type="text" name="state-country" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>Postcode/ZIP</label>
                                                            <input type="number" name="postcode-zip" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <div className="shipp">
                                                                <input type="checkbox" id="c1" name="cc" />
                                                                <label htmlFor="c1">
                                                                    <span></span>
                                                                    <small>Create An Account?</small>
                                                                </label>
                                                            </div>
                                                            <p>Create an account by entering the information below. if you are a returning custoer please login at the top of the page.</p>
                                                            <div className="account-password">
                                                                <h4>Account Password</h4>
                                                                <input type="password" name="password" placeholder="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout-fields">
                                                <h3>Ship to a Different Address?</h3>
                                                <div className="shipp pb">
                                                    <input type="checkbox" id="c2" name="cc"/>
                                                    <label htmlFor="c2"><span></span></label>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>First Name*</label>
                                                            <input type="text" name="name" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>last Name</label>
                                                            <input type="text" name="last-name" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <label>Company name</label>
                                                            <input type="text" name="company" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <label>Country</label>
                                                            <div className="select-field">
                                                                <select>
                                                                    <option>Pakistan</option>
                                                                    <option>Australia</option>
                                                                    <option>USA</option>
                                                                    <option>Canada</option>
                                                                    <option>Kashmir</option>
                                                                </select>
                                                                <i className="fa fa-angle-down"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <label>Address</label>
                                                            <input type="text" name="address" placeholder="Street Address" />
                                                            <input type="text" name="address2" placeholder="Apartment,suite,unit etc. (optional)" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <label>Town/City</label>
                                                            <input type="text" name="town-city" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>State/Country</label>
                                                            <input type="text" name="state-country" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-field">
                                                            <label>Postcode/ZIP</label>
                                                            <input type="number" name="postcode-zip" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-field">
                                                            <label>Order Notes</label>
                                                            <input type="text" name="order-notes" placeholder="Notes about your order,e.g. special notes for delivery." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-row">
                                    <h3>Your Order</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>PRODUCT</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Patient Ninja 1</td>
                                                <td>$35.00</td>
                                            </tr>
                                            <tr>
                                                <td>SUBTOTAL</td>
                                                <td>$35.00</td>
                                            </tr>
                                            <tr>
                                                <td>SHIPPING</td>
                                                <td>Free Shipping</td>
                                            </tr>
                                            <tr>
                                                <td>TOTAL</td>
                                                <td>$35.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="payment-options">
                                    <ul>
                                        <li>
                                            <div className="shipp">
                                                <input type="radio" id="c4" name="cc2"/>
                                                <label htmlFor="c4"><span></span>
                                                    <small>Direct Bank Transfer</small>
                                                </label>
                                            </div>
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                        </li>
                                        <li>
                                            <div className="shipp">
                                                <input type="radio" id="c5" name="cc2"/>
                                                <label htmlFor="c5"><span></span>
                                                    <small>Check Payments</small>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="shipp">
                                                <input type="radio" id="c6" name="cc2"/>
                                                <label htmlFor="c6"><span></span>
                                                    <small>Cash on Delivery</small>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="shipp">
                                                <input type="radio" id="c7" name="cc2"/>
                                                <label htmlFor="c7"><span></span>
                                                    <small>PayPal</small>
                                                </label>
                                            </div>
                                             <img src={pyp} alt=""/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-submit fl-right">
                                    <button type="submit" className="btn-style2">Place Order</button>
                                </div>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CheckoutP;
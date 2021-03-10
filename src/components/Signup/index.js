import React, { Component } from 'react'
import {Link}  from 'react-router-dom';

class Register extends Component {
 
    state = {
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            password,
            confirmpassword,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (password === '') {
            error.password = "Please enter your password";
        }
        if (confirmpassword === '') {
            error.confirmpassword = "Please enter your confirm password";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.password === '' && error.confirmpassword === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                password: '',
                confirmpassword: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            password,
            confirmpassword,
            error } = this.state;

        return(
            <section className="page-content">
                <div className="container">
                    <div className="page-content-row">
                        <div className="popup-form">
                            <h3>Sign Up</h3>
                            <form onSubmit={this.subimtHandler}>
                                <div className="form-field">
                                    <input  value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Full Name"/>
                                    <p>{error.name ? error.name : ''}</p>
                                </div>
                                <div className="form-field">
                                    <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="E-mail"/>
                                    <p>{error.email ? error.email : ''}</p>
                                </div>
                                <div className="form-field">
                                    <input onChange={this.changeHandler} value={password} type="Password" name="password" placeholder="Password"/>
                                    <p>{error.password ? error.password : ''}</p>
                                </div>
                                <div className="form-field">
                                    <input onChange={this.changeHandler} value={confirmpassword} type="Password" name="confirmpassword" placeholder="Confirm Password"/>
                                    <p>{error.confirmpassword ? error.confirmpassword : ''}</p>
                                </div>
                                <div className="form-field">
                                    <div className="shipp">
                                        <input type="checkbox" id="c1" name="cc"/>
                                        <label htmlFor="c1"><span></span></label>
                                        <p>I agree with  <Link to="/signup" title="">Terms of Services</Link></p>
                                    </div>
                                </div>
                                <div className="form-submit">
                                    <button type="submit" className="btn-style2">Submit Now</button>
                                </div>
                            </form>
                            <p><Link to="/login" title="">Sign In</Link> if you don’t have an account</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default  Register;
import React, { Component } from 'react'
import {Link}  from 'react-router-dom';

import './style.css'

class Login extends Component {
    state = {
        name: '',
        password: '',
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

    submitHandler = (e) => {
        e.preventDefault();

        const { name,
            password,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (password === '') {
            error.password = "Please enter your password";
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
        if (error.name === '' && error.email === '' && error.password === ''  && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                password: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            password,
            error } = this.state;
        return(
            <section className="page-content">
                <div className="container">
                    <div className="page-content-row">
                        <div className="popup-form">
                            <h3>Sign in</h3>
                            <form onSubmit={this.submitHandler}>
                                <div className="form-field">
                                    <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="User Name"/>
                                    <p>{error.name ? error.name : ''}</p>
                                </div>
                                <div className="form-field">
                                    <input onChange={this.changeHandler} value={password} placeholder="Password"/>
                                    <p>{error.password ? error.password : ''}</p>
                                </div>
                                <div className="forgot-password">
                                    <Link to="/login" title="">I forgot my password</Link>
                                </div>
                                <div className="form-submit">
                                    <button type="submit" className="btn-style2">Submit Now</button>
                                </div>
                            </form>
                            <p><Link to="/signup" title="">Sign Up</Link> if you don’t have an account</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default  Login;
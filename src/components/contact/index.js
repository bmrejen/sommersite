import React, { Component } from "react";
import { Link } from "react-router-dom";

import icon1 from "../../images/icon16.png";
import icon2 from "../../images/icon17.png";
import icon3 from "../../images/icon18.png";

import "./style.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    events: "",
    notes: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = (e) => {
    e.preventDefault();

    const { name, email, subject, events, notes, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (subject === "") {
      error.subject = "Please enter your subject";
    }
    if (events === "") {
      error.events = "Select your event list";
    }
    if (notes === "") {
      error.notes = "Please enter your note";
    }

    if (error) {
      this.setState({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      error.email === "" &&
      error.subject === "" &&
      error.events === "" &&
      error.notes === ""
    ) {
      this.setState({
        name: "",
        email: "",
        subject: "",
        events: "",
        notes: "",
        error: {},
      });
    }
  };

  render() {
    const { name, email, subject, error } = this.state;

    return (
      <section className="page-content">
        <div className="container">
          <div className="page-content-row">
            <div className="contact-page">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-col">
                    <h3>Contact Us</h3>
                    <p>
                      Print this page to PDF for the complete set of vectors. Or
                      to use on the desktop, install FontAwesome.
                    </p>
                    <form onSubmit={this.subimtHandler} className="form-roww">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-field">
                            <input
                              value={name}
                              onChange={this.changeHandler}
                              type="text"
                              name="name"
                              placeholder="Name"
                            />
                            <p>{error.name ? error.name : ""}</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-field">
                            <input
                              value={subject}
                              onChange={this.changeHandler}
                              type="text"
                              name="subject"
                              placeholder="Subject"
                            />
                            <p>{error.subject ? error.subject : ""}</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-field">
                            <input
                              onChange={this.changeHandler}
                              value={email}
                              type="email"
                              name="email"
                              placeholder="Email"
                            />
                            <p>{error.email ? error.email : ""}</p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-field">
                            <textarea
                              name="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-submit">
                            <button type="submit" className="btn-style2">
                              Send Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="our_social_links">
                      <h3>Our Socials Links</h3>
                      <p>
                        Print this page to PDF for the complete set of vectors.
                      </p>
                      <ul className="social-links">
                        <li>
                          <Link to="/contact" title="">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" title="">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" title="">
                            <i className="fa fa-skype"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact" title="">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div id="map">
                    <div className="contact-map">
                      <iframe
                        title="Sommer"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-list-info">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="contact_info">
                      <div className="ctt-icon">
                        <img src={icon1} alt="" />
                      </div>
                      <div className="ctt-info">
                        <span>10:00am to 6:00pm Sunday Closed</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="contact_info">
                      <div className="ctt-icon clr2">
                        <img src={icon2} alt="" />
                      </div>
                      <div className="ctt-info">
                        <span>
                          Street Number & Name Postal Code 2034 London
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="contact_info">
                      <div className="ctt-icon clr3">
                        <img src={icon3} alt="" />
                      </div>
                      <div className="ctt-info">
                        <span>
                          +2 35478 5587{" "}
                          <Link to="/contact" title="">
                            mail@example.com
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;

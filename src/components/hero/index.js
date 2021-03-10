import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="banner-text">
          <h2>Medical Organisation Management</h2>
          <p>
            Une société spécialisée dans les coûts et la finance des services de
            santé
          </p>
          <Link to="/" title="" className="btn-default">
            Get Started
          </Link>
        </div>
        <div className="vectorr_shape">
          <img src={props.heroimg} alt="" />
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Hero;

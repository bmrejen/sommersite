import React from "react";
import { Link } from "react-router-dom";
import SectionTite2 from "../sectiontitle2";
import team1 from "../../images/resources/team1.png";
import team2 from "../../images/resources/team2.png";
import team3 from "../../images/resources/team3.png";
import "./style.css";

const Team = () => {
  return (
    <div className="team-sec">
      <div className="container">
        <SectionTite2 sectitle2={"Notre équipe"} />
        <div className="team-row">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team-col">
                <div className="team-img">
                  <img src={team1} alt="team" />
                </div>
                <div className="team-info">
                  <h3>Rabia Romasa</h3>
                  <span>Web-Develper</span>
                  <ul className="social-links">
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-skype"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team-col">
                <div className="team-img">
                  <img src={team2} alt="team" />
                </div>
                <div className="team-info">
                  <h3>Monib Murtaza</h3>
                  <span>Web-Designer</span>
                  <ul className="social-links">
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-skype"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team-col">
                <div className="team-img">
                  <img src={team3} alt="team" />
                </div>
                <div className="team-info">
                  <h3>Mona Murtabit</h3>
                  <span>Manager</span>
                  <ul className="social-links">
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-skype"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" title="">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

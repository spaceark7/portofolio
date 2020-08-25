import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/team-member.css";
import { hasbi, dadan, emyus } from "../image/profile/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const TeamMember = () => {
  console.log("Here: ", faFacebookSquare);
  return (
    <div className="wrapper">
      <div className="team-header">
        <h2> Tim Kami</h2>
      </div>
      <div id="team-container" className="container-fluid">
        <div className="row team-container">
          <div
            data-aos="flip-right"
            data-aos-duration="700"
            data-aos-delay="300"
            className="member col-md-4"
          >
            <figure className="item-container">
              <img id="dadan" className="member-img" src={dadan} alt="" />
              <figcaption className="member-caption">
                <a className="member-title" href="" title="Dadan Ramdani">
                  <h4 className="member-name">Dadan Ramdani</h4>
                </a>
                <p className="member-occupation">
                  Enterpreuner, Property Business, Sales Marketing
                </p>
                <div className="member-contact">
                  <span>
                    <a href="">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </span>
                  <span>
                    <a href="">
                      <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>
                  </span>
                  <span>
                    <a href="">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="800"
            data-aos-delay="500"
            className="member col-md-4"
          >
            <figure className="item-container">
              <img id="hasbi" className="member-img" src={hasbi} alt="" />
              <figcaption className="member-caption">
                <a className="member-title" href="">
                  <h4 className="member-name">Hasbi Assidiki</h4>
                </a>
                <p className="member-occupation">
                  Digital Marketing, Web Developer, Android Developer, Graphic
                  Designer
                </p>
                <div className="member-contact">
                  <span>
                    <a href="">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </span>
                  <span>
                    <a href="">
                      <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>
                  </span>
                  <span>
                    <a href="">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="800"
            data-aos-delay="700"
            className="member col-md-4"
          >
            <figure className="item-container">
              <div>
                <img id="emyus" className="member-img" src={emyus} alt="" />
                <figcaption className="member-caption">
                  <a className="member-title" href="">
                    <h4 className="member-name">M. Yusuf Sutresna</h4>
                  </a>
                  <p className="member-occupation">
                    Experienced Graphic Designer, UI/UX Designer, Enterpreuner
                  </p>
                  <div className="member-contact">
                    <span>
                      <a href="">
                        <FontAwesomeIcon
                          className="contact-icon"
                          icon={faInstagram}
                          size="2x"
                        />
                      </a>
                    </span>
                    <span>
                      <a href="">
                        <FontAwesomeIcon
                          className="contact-icon"
                          icon={faFacebookF}
                          size="2x"
                        />
                      </a>
                    </span>
                    <span>
                      <a href="">
                        <FontAwesomeIcon
                          className="contact-icon"
                          icon={faEnvelope}
                          size="2x"
                        />
                      </a>
                    </span>
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

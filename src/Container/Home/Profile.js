import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

export default function profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/dema.amano.3/">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
            <a href="https://www.instagram.com/demaamano/">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a href="https://www.youtube.com/channel/UCX9rmevZSkZZqDmabVZDk5g">
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </a>
            <a href="https://twitter.com/amano_dema">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Dema</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typewriter
                  options={{
                    strings: [
                      "Creative Developer",

                      "Full Stack Developer",

                      "MERN Stack Developer",

                      "Python Developer",

                      "Flutter Developer",

                      "Cross Platform Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack for building applications with frontend and backend
                operations.
              </span>
            </span>
          </div>
        <div className="profile-optins">
            <button className="btn primary-btn">
                {""}
                Hire Me{" "}
            </button>
            <a href="resume.pdf" download="Dema resume.pdf" >
                <button className="btn highlighted-btn">Get Resume</button>
            </a>
        </div>
        </div>
      </div>
    </div>
  );
}

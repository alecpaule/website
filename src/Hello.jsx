import React, { Component } from "react";
import "./Hello.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

class Hello extends Component {
  render() {
    return (
      <div className="hello">
        <h1>Alec Paule</h1>

        <div className="links">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/alexander-paule-37600ab8/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            className="github"
            href="https://github.com/alecpaule"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            className="neko"
            href="https://www.instagram.com/softboiledneko/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    );
  }
}

export default Hello;

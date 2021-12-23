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
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
          <a
            className="github"
            href="https://github.com/alecpaule"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a
            className="neko"
            href="https://www.instagram.com/softboiledneko/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
        </div>
      </div>
    );
  }
}

export default Hello;

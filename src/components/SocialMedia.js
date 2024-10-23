import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";

function SocialMedia() {
  return (
    <div>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/ronalyn05"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillGithub className="social-icon" />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/giducos-ronalyn-0794922b0"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <FaLinkedinIn className="social-icon" />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.instagram.com/ron4lyn?igsh=dWJvaWNwMHFhemdj"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiFillInstagram className="social-icon" />
          </a>
        </li>
        {/* <li className="work-icons">
          <a
            href="mailto:ronalyn.giducos@accenture.com"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <MdEmail className="social-icon" />
          </a>
        </li> */}
        <li className="social-icons">
          <a
            href="mailto:ronalyn.giducos@accenture.com"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <MdEmail className="social-icon" />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://g.co/kgs/yVFSfEU"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <BsFillGeoAltFill className="social-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;

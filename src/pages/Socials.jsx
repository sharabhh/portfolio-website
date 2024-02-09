import React from "react";
import "./Socials.css";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

function Socials(props) {
  return (
    <div className="socials-container">
      <section
        className="social-media-container"
        id={props.mode === "light" ? "" : "darkmode"}
      >
        <a
          href="https://github.com/sharabhh"
          target="_blank"
          className="github social-media-icons-border-radius"
        >
          <div className="github socials">
            <AiFillGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/sharabhh/"
          target="_blank"
          className="linkedin social-media-icons-border-radius"
        >
          <div className="linkedin socials">
            <BiLogoLinkedin />
          </div>
        </a>
        <a
          href="https://twitter.com/sharabhh"
          target="_blank"
          className="twitter social-media-icons-border-radius"
        >
          <div className="twitter socials">
            <AiOutlineTwitter />
          </div>
        </a>
        <a
          href="https://www.instagram.com/sharabhh/"
          target="_blank"
          className="instagram social-media-icons-border-radius"
        >
          <div className="instagram socials">
            <BsInstagram />
          </div>
        </a>
      </section>
    </div>
  );
}

export default Socials;

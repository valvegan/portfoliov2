import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import footer_svg from "./images/footer_svg.svg";
import bikeToRepeat from "./images/bikeIcon_rotating-wheels.svg";
import "./Footer.css";

function RepeatBikes() {
  const elements = [];
  for (let i = 0; i <= 16; i++) {
    // eslint-disable-next-line jsx-a11y/alt-text
    elements.push(<img src={bikeToRepeat} key={i} id={i}></img>);
  }
  return elements;
}
export function Footer() {
  return (
    <footer className="page-footer">
      <div className="bike-icon-pattern" alt="Pattern of bike graphics">
        <RepeatBikes />
      </div>
      <div className="social-media">
        <div className="social-media-icons">
          <a href="https://github.com/valvegan">
            {" "}
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/vpaintz/">
            {" "}
            <BsInstagram />
          </a>
          <a href="https://www.linkedin.com/in/valentina-vaccari-b70265bb/">
            {" "}
            <BsLinkedin />
          </a>
        </div>
      </div>

      <img src={footer_svg} className="footer-svg" alt="footergraphic"></img>
    </footer>
  );
}

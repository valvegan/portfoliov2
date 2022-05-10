import React from "react";
import { Link } from "react-router-dom";
import headerSvg1 from "./images/header_svg_1.svg";
import headerSvg2 from "./images/header_svg_2.svg";
import valLogo from "./images/valentinalogo_simplified.svg";
//hamb
import{GiHamburgerMenu}from "react-icons/";
import{AiOutlineCloseCircle}from "react-icons/ai";

export function NavBar() {
  return (
    <header className="page-header">
      <div className="page-header-bg">
        <img
          alt="headersvg1"
          className="page-header-svg__1"
          src={headerSvg1}
        ></img>
        <img
          src={headerSvg2}
          className="page-header-svg__2"
          alt="headersvg2"
        ></img>
      </div>

      <img
        className="page-header__item"
        src={valLogo}
        alt="Personal logo of Valentina, a text logo that consists of my name"
      ></img>

      <nav className="nav main-navigation page-header__item">
        <ul role="menubar" className="navigation-list">
          <Link to={`/`}>
            <li className="navigation-list__item navigation-list__item--active">
              Home
            </li>
          </Link>
          <Link to={`/about`}>
            <li className="navigation-list__item navigation-list__item--active">
              About
            </li>
          </Link>
          <Link to={`/portfolio`}>
            <li className="navigation-list__item navigation-list__item--active">
              Portfolio
            </li>
          </Link>
          <Link to={`/contact`}>
            <li className="navigation-list__item navigation-list__item--active">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

import React from "react";
import MobileNav from "./MobileNavigation";
import Navigation from "./Navigation";
import headerSvg1 from "./images/header_svg_1.svg";
import headerSvg2 from "./images/header_svg_2.svg";
import valLogo from "./images/valentinalogo_simplified.svg";
//hamb

import "./Navbar.css";

export class NavBar extends React.Component {
  render() {
    return (
      <header className="page-header">
        <div className="page-header-bg">
          <img alt="headersvg1" src={headerSvg1}></img>
          <img src={headerSvg2} alt="headersvg2"></img>
        </div>
        <div className="logo-container">
          <img
            className="page-header__item"
            src={valLogo}
            alt="Personal logo of Valentina, a text logo that consists of my name"
          ></img>
        </div>
        <Navigation />
        <MobileNav />
      </header>
    );
  }
}

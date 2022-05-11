import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

export class NavLinks extends React.Component {
  state = {
    menuExpanded: false,
  };

  menuToggle() {
    this.setState({ menuExpanded: !this.state.menuExpanded });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.menuToggle()}
          className={this.state.menuExpanded ? "menu-close" : "menu-expand"}
        >
          {this.state.menuExpanded ? (
            <AiOutlineCloseCircle />
          ) : (
            <GiHamburgerMenu />
          )}
        </button>

        <ul
          role="menubar"
          className={
            this.state.menuExpanded
              ? "nav-list nav-list-open"
              : "nav-list nav-list-closed"
          }
        >
          <Link to={`/`}>
            <li
              onClick={() => this.menuToggle()}
              className={
                this.state.menuExpanded
                  ? "first-li nav-li-open"
                  : "first-li nav-li-closed"
              }
            >
              Home
            </li>
          </Link>
          <Link to={`/about`}>
            <li
              onClick={() => this.menuToggle()}
              className={
                this.state.menuExpanded ? "nav-li-open" : "nav-li-closed"
              }
            >
              About
            </li>
          </Link>
          <Link to={`/portfolio`}>
            <li
              onClick={() => this.menuToggle()}
              className={
                this.state.menuExpanded ? "nav-li-open" : "nav-li-closed"
              }
            >
              Portfolio
            </li>
          </Link>
          <Link to={`/contact`}>
            <li
              onClick={() => this.menuToggle()}
              className={
                this.state.menuExpanded ? "nav-li-open" : "nav-li-closed"
              }
            >
              Contact
            </li>
          </Link>
          <Link to={`/contact`}>
            <li
              onClick={() => this.menuToggle()}
              className={
                this.state.menuExpanded ? "nav-li-open" : "nav-li-closed"
              }
            >
              CV
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

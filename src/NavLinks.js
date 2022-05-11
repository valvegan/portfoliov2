import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import React from "react";

export class NavLinks extends React.Component {
  state = {
    menuExpanded: false,
  };

  menuToggle() {
    this.setState({ menuExpanded: !this.state.menuExpanded });
  }
  render() {
    return (
      <ul
        role="menubar"
        className={
          this.state.menuExpanded
            ? "nav-list nav-list-open"
            : "nav-list nav-list-closed"
        }
      >
        <li className="nav-list-item">
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
        </li>
        <Link to={`/`}>
          <li>Home</li>
        </Link>
        <Link to={`/about`}>
          <li>About</li>
        </Link>
        <Link to={`/portfolio`}>
          <li>Portfolio</li>
        </Link>
        <Link to={`/contact`}>
          <li>Contact</li>
        </Link>
      </ul>
    );
  }
}

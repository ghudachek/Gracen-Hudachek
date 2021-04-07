import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <div className="links-container">
        <Link className="nav-link" to="about-me">
          About Me
        </Link>
        <Link className="nav-link" to="/work">
          My Work
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
      <Link to="/">
        <h1 className="title">GRACEN HUDACHEK</h1>
      </Link>
    </div>
  );
};

export default Nav;

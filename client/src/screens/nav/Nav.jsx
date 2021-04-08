import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="titles">
        <h1 className="title">GRACEN HUDACHEK</h1>
        <span className="title-descriptor">//Software Engineer</span>
      </Link>
      <div className="links-container">
        <Link className="nav-link">About Me</Link>
        <Link className="nav-link">My Work</Link>
        <Link className="nav-link">Contact</Link>
        <Link className="nav-link">Resume</Link>
      </div>
    </div>
  );
};

export default Nav;

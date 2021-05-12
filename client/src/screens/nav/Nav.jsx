import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    const myName = ["{Gracen Hudachek}"];

    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        document.querySelector("h1").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 150);
      }
    }

    function StartTextAnimation(i) {
      if (typeof myName[i] == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 20000);
      }

      if (i < myName[i].length) {
        typeWriter(myName[i], 1, function () {
          StartTextAnimation(i + 1);
        });
      }
    }

    StartTextAnimation(0);
  });

  return (
    <div className="nav">
      <Link to="/" className="titles">
        <h1 className="title">{"{Gracen Hudachek}"}</h1>
        <span className="title-descriptor">//Software Engineer</span>
      </Link>
      <div className="links-container">
        <a className="nav-link" href="/#aboutme">
          About Me
        </a>

        <a className="nav-link" href="/#projects">
          My Work
        </a>
        <a className="nav-link" href="/#contact">
          Contact
        </a>
        <a
          href="https://www.canva.com/design/DAEeSbv8WD4/j_UxWYpEHijZ-LQPRHRdNw/view?utm_content=DAEeSbv8WD4&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
          target="_blank"
          className="nav-link"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Nav;

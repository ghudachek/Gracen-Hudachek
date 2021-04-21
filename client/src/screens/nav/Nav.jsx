import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  document.addEventListener("DOMContentLoaded", function (event) {
    // array with texts to type in typewriter
    const myName = ["{Gracen Hudachek}"];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // check if text isn't finished yet
      if (i < text.length) {
        // add next character to h1
        document.querySelector("h1").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 150);
      }
    }
    // start a typewriter animation for a text in the myName array
    function StartTextAnimation(i) {
      if (typeof myName[i] == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 20000);
      }
      // check if myName[i] exists
      if (i < myName[i].length) {
        // text exists! start typewriter animation
        typeWriter(myName[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  return (
    <div className="nav">
      <Link to="/" className="titles">
        <h1 className="title">{"{GRACEN HUDACHEK}"}</h1>
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
          href="https://drive.google.com/file/d/1CAKqEJQuOtGuYZ2DQFxJEgkMZMLLnWDF/view?usp=sharing"
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

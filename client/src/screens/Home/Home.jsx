import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import "./Home.css";
import Background from "../images/my-portfolio-small.jpg";
import Email from "../Email/Email";
import BirdPic from "../images/bird.png";
import MeArt from "../images/Me+work.jpg";
import Projectbox from "../Projectbox";
const Home = () => {
  return (
    <Layout>
      <div className="home-screen">
        <div className="black">
          <div
            className="background"
            style={{ backgroundImage: `url(${Background})` }}
          ></div>
        </div>
        <div className="about-me-div">
          <a
            className="hidden-link"
            id="aboutme"
            href="www.gracenhudachek.com/#aboutme"
          ></a>
          A LITTLE ABOUT ME
          <div className="AM-Description">
            <div className="intro">
              <b>GRACE</b>-<i className="spice">with a touch of spice</i>-
              <b>N</b>. <br />
              <i className="blurb">
                (No, the "N" is not a typo and yes, I do go by Gracen!)
              </i>
            </div>
            <div className="list">
              <li>
                I am a <b>Full Stack Developer</b> with a <b>creative</b> mind
                and
                <b> compassionate</b> heart. I am <b>curious</b> like a cat (
                with less lives but better luck) who is
                <b> self-motivated</b> to learn and be the best version of
                myself.
              </li>
              <br />
              <li>
                I ventured between four majors in college: business, graphic
                communications, biochemistry, and nutrition.
              </li>
              <br />
              <li>
                I had the opportunity to work for a top college football team,
                the
                <b> Clemson Tigers</b>, and a top hospital, <b>Johns Hopkins</b>
                , in the field of nutrition.
              </li>
              <br />
              <li>
                In the last year, I started my own{" "}
                <b>screen printing business</b>, made
                <b> logos</b> for other businesses, and created beautiful
                <b> digital art pieces</b> for customers .
              </li>
              <br />
              <li>
                Now, I am looking for a career in <b>Software Engineering</b>{" "}
                where I can <b>solve</b> technical problems, <b>flourish</b>{" "}
                creativley , and <b> give</b> to my community and the future.
              </li>
            </div>
          </div>
        </div>
        <a
          className="hidden-link"
          id="projects"
          href="www.gracenhudachek.com/#projects"
        ></a>
        <h1 className="my-work-h1">MY WORK</h1>
        <div className="my-work">
          <Projectbox />
        </div>
        <div className="artwork-slide">
          <p>I also make art...</p>
          <img alt="bird" src={BirdPic} className="birdpic" />
          <img alt="bird" src={MeArt} className="art-n-me" />
          <div className="square"></div>
          <div className="square2"></div>
          <div className="square3"></div>
          <p className="art-blurb">
            Check it out... those photos on the wall were hand-drawn by me too!
          </p>
          <Link className="seemoreart" to="/artwork">
            See More
          </Link>
        </div>
        <a
          className="hidden-link"
          id="contact"
          href="www.gracenhudachek.com/#contact"
        ></a>
        <div className="contact-me">
          <h1 className="my-contact-h1">LETS CHAT</h1>
          <p className="contact-blurb">
            Send me a message below or email me directly at:{" "}
            <a href="mailto: ghudachek@gmail.com">ghudachek@gmail.com</a>
          </p>
          <Email />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

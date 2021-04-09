import React from "react";
import Layout from "../layout/Layout";
import "./Home.css";
import Background from "../images/my-porfolio.jpg";
import HangHuman from "../images/hanghuman.png";
import RestGen from "../images/restaurant.png";
import WYR from "../images/WYR.png";
import CarApp from "../images/car-app.png";

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
        <div className="about-me-div show-on-scroll">
          A Little About Me
          <p className="AM-Description">
            <div className="intro">
              <b>GRACE</b>-<i>with a touch of spice</i>-<b>N</b>. <br />
              <i>No, the "N" is not a typo and yes, I do go by Gracen!</i>
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
          </p>
        </div>
        <h1 className="my-work-h1">My Work</h1>
        <div className="my-work">
          <div className="project-btns">
            <div className="project">
              Restaurant Generator
              <div className="details">
                <img className="project-img" alt="project-img" src={RestGen} />
                <p className="proj-description"> Full CRUD web app...</p>
                <a href="https://ghudachek.github.io/Restaurant-Generator/">
                  See Site
                </a>
                <a href="https://github.com/ghudachek/Restaurant-Generator">
                  See Code
                </a>
              </div>
            </div>
            <div className="project">
              HangHuman{" "}
              <div className="details">
                <img
                  className="project-img"
                  alt="project-img"
                  src={HangHuman}
                />
                <p className="proj-description"> Full CRUD web app...</p>
                <a href="https://elastic-heisenberg-02c1a9.netlify.app/">
                  See Site
                </a>
                <a href="https://github.com/ghudachek/HangHuman">See Code</a>
              </div>
            </div>
            <div className="project">
              Sunday Driver{" "}
              <div className="details">
                <img className="project-img" alt="project-img" src={CarApp} />
                <p className="proj-description"> Full CRUD web app...</p>
                <a href="https://sundaydriver.netlify.app/">See Site</a>
                <a href="https://github.com/ghudachek/car-app">See Code</a>
              </div>
            </div>
            <div className="project">
              Would You Rather{" "}
              <div className="details">
                <img className="project-img" alt="project-img" src={WYR} />
                <p className="proj-description"> Full CRUD web app...</p>
                <a href="https://606c7fd6ffd75e000719edb8--would-you-rather-200.netlify.app/">
                  See Site
                </a>
                <a href="https://github.com/ghudachek/WouldYouRather">
                  See Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-me show-on-scroll">CONTACT:</div>
    </Layout>
  );
};

export default Home;

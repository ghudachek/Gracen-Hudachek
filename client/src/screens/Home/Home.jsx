import React from "react";
import Layout from "../layout/Layout";
import "./Home.css";
import Background from "../images/my-porfolio.jpg";
import HangHuman from "../images/hanghuman.png";
import RestGen from "../images/restaurant.png";
import WYR from "../images/WYR.png";
import CarApp from "../images/car-app.png";
import Email from "../Email/Email";

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
          <a id="aboutme" href="www.gracenhudachek.com">
            _________
          </a>
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
        <a id="projects" href="www.gracenhudachek.com">
          ___________
        </a>
        <h1 className="my-work-h1">MY WORK</h1>
        <div className="my-work">
          <div className="project-btns">
            <div className="project">
              Restaurant Generator
              <div className="details">
                <img className="project-img" alt="project-img" src={RestGen} />
                <p className="proj-description">
                  {" "}
                  Find Restaurants by location using the{" "}
                  <a href="https://www.zomato.com/">Zomato </a> API. Save your
                  top choices to a list and let the generator pick what
                  restaurant you'll try first by clicking the "Choose For Me"
                  button!
                </p>
              </div>
              <a href="https://ghudachek.github.io/Restaurant-Generator/">
                See Site
              </a>
              <a href="https://github.com/ghudachek/Restaurant-Generator">
                See Code
              </a>
            </div>
            <div className="project">
              HangHuman{" "}
              <div className="details">
                <img
                  className="project-img"
                  alt="project-img"
                  src={HangHuman}
                />
                <p className="proj-description">
                  {" "}
                  The Classic Hangman game reproduced using React and Airtable.
                  Users can create more levels to play and play others user
                  created levels.
                </p>
              </div>
              <a href="https://elastic-heisenberg-02c1a9.netlify.app/">
                See Site
              </a>
              <a href="https://github.com/ghudachek/HangHuman">See Code</a>
            </div>
            <div className="project">
              Sunday Driver{" "}
              <div className="details">
                <img className="project-img" alt="project-img" src={CarApp} />
                <p className="proj-description">
                  {" "}
                  An antique car selling site. Features full CRUD functionality,
                  built in React with a backend in Express.{" "}
                </p>
              </div>
              <a href="https://sundaydriver.netlify.app/">See Site</a>
              <a href="https://github.com/ghudachek/car-app">See Code</a>
            </div>
            <div className="project">
              Would You Rather{" "}
              <div className="details">
                <img className="project-img" alt="project-img" src={WYR} />
                <p className="proj-description">
                  {" "}
                  A place where choices are limited! Login in to join the fun
                  and the debate. A place for users to answer Would You Rathers,
                  create your own, and debate your choice. Created with React on
                  the front and with Ruby on Rails in the back.
                </p>
              </div>
              <a href="https://606c7fd6ffd75e000719edb8--would-you-rather-200.netlify.app/">
                See Site
              </a>
              <a href="https://github.com/ghudachek/WouldYouRather">See Code</a>
            </div>
          </div>
        </div>
        <a id="contact" href="www.gracenhudachek.com">
          _________
        </a>
        <div className="contact-me show-on-scroll">
          <div className="triangle"></div>
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

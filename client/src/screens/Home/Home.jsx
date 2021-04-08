import React from "react";
import Layout from "../layout/Layout";
import "./Home.css";
import Background from "../images/my-porfolio.jpg";

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
            <button className="work-btn">Restaurant Generator</button>
            <button className="work-btn">HangHuman</button>
            <button className="work-btn">Sunday Driver</button>
            <button className="work-btn">Would You Rather</button>
          </div>
          <div className="projects">project box</div>
        </div>
      </div>

      <div className="contact-me show-on-scroll">CONTACT:</div>
    </Layout>
  );
};

export default Home;

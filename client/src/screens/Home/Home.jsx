import React from "react";
import Layout from "../layout/Layout";
import "./Home.css";
import Background from "../images/my-porfolio.jpg";
import "../../services/onScroll";

const Home = () => {
  return (
    <Layout>
      <div className="home-screen">
        <div
          className="background"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>
        <p className="line">|</p>
        <div className="about-me-div show-on-scroll"> Hello About Me..</div>
        <p className="line">|</p>
        <div className="projects-div show-on-scroll"> PROJECTS</div>
        <p className="line">|</p>
        <p className="line">|</p>
        <div className="contact-me show-on-scroll"> CONTACT:</div>
      </div>
    </Layout>
  );
};

export default Home;

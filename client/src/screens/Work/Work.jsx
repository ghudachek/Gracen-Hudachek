import React from "react";
import Layout from "../layout/Layout";
import "./Work.css";
const Work = () => {
  return (
    <Layout>
      <div className="my-work">
        <div>My Work</div>
        <div className="project-btns">
          <button className="work-btn">Restaurant Generator</button>
          <button className="work-btn">HangHuman</button>
          <button className="work-btn">Sunday Driver</button>
        </div>
        <div className="projects">project box</div>
      </div>
    </Layout>
  );
};

export default Work;

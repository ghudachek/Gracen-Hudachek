import React from "react";
import { useState } from "react";
import Flock from "./images/flock.png";
import HangHuman from "./images/hanghuman.png";
import RestGen from "./images/restaurant.png";
import WYR from "./images/WYR.png";
import CarApp from "./images/car-app.png";

const Projectbox = () => {
  const [isOpen, setIsOpen] = useState("none");
  const [ind, setInd] = useState(0);

  function openButton(indx) {
    if (indx !== ind) {
      setInd(indx);
      setIsOpen("block");
    } else {
      if (isOpen === "none") {
        setIsOpen("flex");
      } else {
        setIsOpen("none");
      }
    }
  }

  let projects = [
    {
      id: 1,
      title: "Restaurant Generator",
      img: `${RestGen}`,
      description:
        "Find Restaurants by location using the Zomato API. Save your top choices to a list and let the generator pick what restaurant you'll try first by clicking the `Choose For Me` button!",
      site: "https://ghudachek.github.io/Restaurant-Generator/",
      code: "https://github.com/ghudachek/Restaurant-Generator",
    },
    {
      id: 2,
      title: "HangHuman",
      img: `${HangHuman}`,
      description:
        "The Classic Hangman game reproduced using React and Airtable. Users can create more levels to play and play others user created levels.",
      site: "https://elastic-heisenberg-02c1a9.netlify.app/",
      code: "https://github.com/ghudachek/HangHuman",
    },
    {
      id: 3,
      title: "Would You Rather",
      img: `${WYR}`,
      description:
        "A place where choices are limited! Login in to join the fun and the debate. A place for users to answer Would You Rathers, create your own, and debate your choice. Created with React on the front and with Ruby on Rails in the back.",
      site: "https://606c7fd6ffd75e000719edb8--would-you-rather-200.netlify.app/",
      code: "https://github.com/ghudachek/WouldYouRather",
    },
    {
      id: 4,
      title: "Sunday Drivers",
      img: `${CarApp}`,
      description:
        "An antique car selling site. Features full CRUD functionality, built in React with a backend in Express.",
      site: "https://sundaydriver.netlify.app/",
      code: "https://github.com/ghudachek/car-app",
    },
    {
      id: 5,
      title: "Flock",
      img: `${Flock}`,
      description:
        "My new project: a site for complexes to give residents the chance to make a real community out of where they live. Also designed for management of a complex to give updates to their residents in a simlar fasion to social media rather than through mass emails.",
      site: "https://github.com/ghudachek/Flock",
      code: "https://github.com/ghudachek/Flock",
    },
  ];

  return (
    <>
      <div className="project-show">
        {projects.map((project, indx) => {
          return (
            <button
              className="project-btns"
              onClick={(e) => {
                e.preventDefault();
                openButton(indx);
              }}
            >
              {project.title}
            </button>
          );
        })}
      </div>
      <div id="projects-box">
        <div className="project" style={{ display: `${isOpen}` }}>
          {projects[ind].title}
          <div className="details">
            <img
              className="project-img"
              alt="project-img"
              src={`${projects[ind].img}`}
            />
            <p className="proj-description">{projects[ind].description}</p>
          </div>
          <a href={projects[ind].site}>See Site</a>
          <a href={projects[ind].code}>See Code</a>
        </div>
      </div>
    </>
  );
};

export default Projectbox;

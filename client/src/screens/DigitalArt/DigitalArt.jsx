import React from "react";
import "./DigitalArt.css";
import Art1 from "./artwork/bailey-small.jpg";
import Art2 from "./artwork/couple-small.jpg";
import Art3 from "./artwork/wedding.jpg";
import Art4 from "./artwork/bubble.jpg";
import Art5 from "./artwork/covid-halloween.jpg";
import Layout from "../layout/Layout";
export const DigitalArt = () => {
  return (
    <Layout>
      <div>
        <h2 className="my-art">RECENT ARTWORK</h2>
        <p>___________</p>
      </div>
      <div className="artwork">
        <img className="art-piece" src={Art1} />
        <img className="art-piece" src={Art2} />
        <img className="art-piece" src={Art3} />
        <img className="art-piece" src={Art4} />
        <img className="art-piece" src={Art5} />
      </div>
    </Layout>
  );
};

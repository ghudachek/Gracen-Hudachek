import React from "react";
import "./DigitalArt.css";
import Art1 from "./artwork/art1.jpg";
import Art2 from "./artwork/art2.JPG";
import Art3 from "./artwork/art3.PNG";
import Art4 from "./artwork/art4.JPG";
import Art5 from "./artwork/art5.PNG";
import Art6 from "./artwork/art6.JPG";
import Art7 from "./artwork/art7.JPG";
import Art8 from "./artwork/art8.PNG";
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
        <img className="art-piece" src={Art6} />
        <img className="art-piece" src={Art7} />
        <img className="art-piece" src={Art8} />
      </div>
    </Layout>
  );
};

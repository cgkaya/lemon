import Button from "./Button";
import React from "react";
import brus from "../images/bruchetta.svg";

const About = () => {
  return (
    <div className="container" id="about-section">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex
        leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa.
        Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum
        blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id,
        vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae
        lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit
        consequat. In dictum ligula in elit euismod malesuada. Curabitur varius
        augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh
        scelerisque ut.
      </p>
      <img src={brus} />
    </div>
  );
};

export default About;

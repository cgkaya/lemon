import React from "react";
import Button from "./Button";

const CallToAction = (heading, subheading, text, buttonText, url, img) => {
  return (
    <div className="container grid grid-2 dark">
      <div>
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
        <p>{text}</p>
        <Button text={buttonText} url={url} />
      </div>
      <img src={img} />
    </div>
  );
};
export default CallToAction;

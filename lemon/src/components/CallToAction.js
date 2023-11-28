import React from "react";
import Button from "./Button";
import img from "../images/restauranfood.jpg";

const CallToAction = () => {
  return (
    <div className="dark ">
      <div className="container grid grid-2 cta">
        <div className="header">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button text="Reserve a Table" url="/BookingPage" />
        </div>
        <img src={img} />
      </div>
    </div>
  );
};
export default CallToAction;

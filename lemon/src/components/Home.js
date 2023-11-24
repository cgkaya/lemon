import React from "react";

import CallToAction from "./CallToAction";
import About from "./About";
const Home = () => {
  /*const header = [
    {
      heading: "Little Lemon",
      subheading: "Chicago",
      text: "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    },
  ];
  const headerButton = [
    {
      text: "Reserve a Table",
      url: "/BookingPage",
    },
  ];*/

  return (
    <About />
    /*
    <CallToAction
      heading="Little Lemon"
      sub="Chicago"
      text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
      buttonText="Reserve a Table"
      url="/BookingPage"
      img="../restauranfood.jpg"
    />*/
  );
};
export default Home;

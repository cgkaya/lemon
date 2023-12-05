import React from "react";

import CallToAction from "./CallToAction";
import About from "./About";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

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
    <div>
      <CallToAction className="dark" />
      <Specials />
      <Testimonials />
      <About className="dark" />
    </div>
  );
};
export default Home;

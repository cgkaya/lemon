import React from "react";
import Nav from "./Nav";
import logo from "../Logo.png";

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="Little Lemon Logo" />
      </a>
      <Nav />
    </header>
  );
};
export default Header;

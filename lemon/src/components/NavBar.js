import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "../Logo.png";

const NavBar = () => {
  return (
    /*<Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      listStyleType="none"
    >*/
    <div className="navbar container flex">
      <div>
        <Link to="/">
          <img className="navbarLogo" src={logo} alt="Little Lemon Logo" />
        </Link>
      </div>
      <nav>
        <ul className="navbarItems flex">
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/BookingPage">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;

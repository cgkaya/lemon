import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";

const NavBar = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
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
            <a href="/#about" onClick={handleClick("about")}>
              About
            </a>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
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

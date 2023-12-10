import React from "react";
import logo from "../images/small_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSquareInstagram,
  faLinkedin,
  faSquarePinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socials = [
    {
      icon: faSquareInstagram,
      url: "https://www.instagram.com",
      id: "1",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
      id: "3",
    },
    {
      icon: faSquarePinterest,
      url: "https://www.pinterest.com",
      id: "3",
    },
  ];
  const navSocials = socials.map((social) => {
    return (
      <a href={social.url} key={social.id}>
        <FontAwesomeIcon icon={social.icon} size="2x"></FontAwesomeIcon>
      </a>
    );
  });

  return (
    <footer className="footer-section">
      <div className="container grid grid-3 footer">
        <div>
          <img src={logo} alt="Little Lemon Logo" className="footer-logo" />
          <span>Copyright 2023</span>
        </div>
        <div>
          <h3>Navigation</h3>
          <ul className="footer-list">
            <li>
              <a href="/#about">About</a>
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
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul className="footer-list">
            <li>Phone</li>
            <li>E-mail</li>
            <li>Address</li>
          </ul>
          <div className="flex socials">{navSocials}</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

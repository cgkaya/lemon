import React from "react";
import logo from "../Logo.png";

const Footer = () => {
  const footerItems = [
    {
      heading: "Navigation",
      listItems: [
        "Home",
        "About",
        "Menu",
        "Reservation",
        "Order Online",
        "Login",
      ],
    },
    {
      heading: "Contact Us",
      listItems: ["Phone", "E-mail", "Adress"],
    },
    {
      heading: "Social Media",
      listItems: ["Instagram", "Linkedin", "Pinterest"],
    },
  ];
  const footerNavItems = footerItems.map((footerItem) => (
    <h3>{footerItem.heading}</h3>
  ));
  return (
    <footer>
      <>
        <img src={logo} alt="logo" />
        <span>Copyright 2023</span>
        <p>{footerNavItems}</p>
      </>
    </footer>
  );
};
export default Footer;

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const Button = ({ text, url }) => {
  return (
    <div className="navButton">
      <Link to={url}>
        <button>{text}</button>
      </Link>
    </div>
  );
};
export default Button;

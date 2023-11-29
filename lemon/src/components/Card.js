import React from "react";

import icon from "../images/Basket.svg";
const Card = ({ title, price, description, imageSrc }) => {
  return (
    <div className="card">
      <img className="card_img" src={imageSrc} alt={title} />
      <div className="flex card_h">
        <h3>{title}</h3>
        <span>${price}</span>
      </div>
      <p>{description}</p>
      <div className="flex bold">
        <p>Order a delivery</p>
        <img src={icon} className="icon" />
      </div>
    </div>
  );
};
export default Card;

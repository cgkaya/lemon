import React from "react";
import Card from "./Card";
import Button from "./Button";

const dishes = [
  {
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../images/greek_salad.jpg"),
  },
  {
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
    getImageSrc: () => require("../images/bruchetta.png"),
  },
  {
    title: "Lemon Cake",
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../images/lemon_dessert.jpg"),
  },
];
const Specials = () => {
  return (
    <div className="container ">
      <div className="flex specials b_padding">
        <h1>Specials</h1>
        <Button text="Online Menu" url="" />
      </div>
      <div className="grid grid-3 media-1">
        {dishes.map((dish) => (
          <Card
            key={dish.title}
            title={dish.title}
            price={dish.price}
            description={dish.description}
            imageSrc={dish.getImageSrc()}
          />
        ))}
      </div>
    </div>
  );
};
export default Specials;

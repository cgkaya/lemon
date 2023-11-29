import React from "react";
import Review from "./Review";

const Testimonials = () => {
  const people = [
    {
      rating: 5,
      person: "Herman Herrera",
      review:
        "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert.",
      getImageSrc: () => require("../images/34.jpg"),
    },
    {
      rating: 5,
      person: "Rebecca Andrews",
      review:
        "It’s the cutest little spot with amazing food. The service we received was so amazing and we will definitely be back again. ",
      getImageSrc: () => require("../images/81.jpg"),
    },
    {
      rating: 5,
      person: "Enrique Craig",
      review:
        "It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. ",
      getImageSrc: () => require("../images/66.jpg"),
    },
    {
      rating: 5,
      person: "Margie Beck",
      review:
        "Do yourself a favor and visit this lovely restaurant. The service is unmatched. The staff truly cares about your experience.",
      getImageSrc: () => require("../images/67.jpg"),
    },
  ];

  return (
    <div className="dark">
      <div className="container testimonial">
        <h1 className="b_padding">Testimonials</h1>

        <div className="grid grid-4 ">
          {people.map((person) => (
            <Review
              key={person.person}
              rating={person.rating}
              imageSrc={person.getImageSrc()}
              person={person.person}
              review={person.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonials;

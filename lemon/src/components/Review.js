import React from "react";
import { Rating } from "react-simple-star-rating";

const Review = ({ rating, imageSrc, person, review }) => {
  return (
    <div className="review">
      <Rating value={rating} />
      <img src={imageSrc} />
      <h3>{person}</h3>
      <p>{review}</p>
    </div>
  );
};

export default Review;

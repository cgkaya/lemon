import React from "react";
import { Rating } from "react-simple-star-rating";

const Review = ({ rating, imageSrc, person, review }) => {
  return (
    <div className="review">
      <Rating
        name="read-only"
        initialValue={rating}
        fillColor="#f4ce14"
        readonly
      />
      <img src={imageSrc} className="person_img" alt={person} />
      <h3>{person}</h3>
      <p>{review}</p>
    </div>
  );
};

export default Review;

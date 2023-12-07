import React from "react";
import restaurant from "../images/restaurant.jpg";
import BookingForm from "../components/BookingForm";

const BookingPage = (props) => {
  return (
    <div>
      <div className="dark ">
        <div className="container grid grid-2 cta">
          <div>
            <h1>Reserve a table!</h1>
            <p>
              <b>Opening times :</b> Monday - Sunday opening. 12pm - 11.30pm.
            </p>
          </div>
          <img src={restaurant} alt="Little Lemon restaurant outdoor view " />
        </div>
      </div>
      <div className="container r-details">
        <p>
          Food served until 10.00pm Sunday - Thursday, and until 10.30pm on
          Friday & Saturday.
        </p>
        <p>
          Please do not use the booking comments to make requests for
          alternative dates/times as these will not be accommodated. If your
          desired group size or time is unavailable please send us an email at
          hello@littlelemon.com
        </p>
        <h2>Book a table now!</h2>
        <BookingForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};
export default BookingPage;

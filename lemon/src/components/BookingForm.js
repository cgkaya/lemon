import React from "react";
import { useState } from "react";
import { submitAPI } from "../BookingAPI";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [rdate, setDate] = useState();
  const [time, setTime] = useState();
  const [guest, setGuest] = useState(2);
  const [occasion, setOccasion] = useState("occasion");
  const [placement, setPlacement] = useState("placement");
  const [showError, setShowError] = useState(false);

  const timeOptions = props.availableTimes.times.map((hour) => (
    <option key={hour} value={hour}>
      {hour}
    </option>
  ));

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmation");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm(e);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    props.dispatch(selectedDate);
  };

  const isValid = () => {
    return rdate && time && guest < 11 && guest > 0;
  };

  return (
    <form onSubmit={handleSubmit} className="grid r-form">
      <label htmlFor={rdate}>Choose a date</label>
      <input
        type="date"
        name="date"
        value={rdate}
        id="rdate"
        onChange={handleDateChange}
        data-testid="r_date"
        required
        onBlur={(e) => {
          if (!rdate) {
            setShowError(true);
          }
        }}
      ></input>
      {!rdate && showError && <div className="error">Required</div>}
      <label htmlFor={time}>Choose time</label>
      <select
        id="availableTimes"
        data-testid="availableTimes"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
        required
      >
        {timeOptions}
        {!time && <div className="error">Required</div>}
      </select>{" "}
      <label htmlFor={guest}>Number of guests</label>
      <input
        type="number"
        value={guest}
        placeholder="2"
        min={1}
        max={10}
        id="guest"
        data-testid="guest"
        onChange={(e) => {
          setGuest(e.target.value);
        }}
        required
      ></input>{" "}
      {guest > 10 && <div className="error">Must be at most 10</div>}
      {guest < 1 && <div className="error">Must be at least 1</div>}
      <label htmlFor={occasion}>Occasion</label>
      <select
        id="occasion"
        data-testid="occasion"
        value={occasion}
        onChange={(e) => {
          setOccasion(e.target.value);
        }}
      >
        <option value="occasion">Occasion</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="engagement">Engagement</option>
      </select>{" "}
      <label htmlFor={placement}>Preferred table placement</label>
      <select
        id="placement"
        data-testid="placement"
        value={placement}
        onChange={(e) => {
          setPlacement(e.target.value);
        }}
      >
        <option value="placement">Please Select</option>
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>{" "}
      <button type="submit" className="navButton" disabled={!isValid()}>
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;

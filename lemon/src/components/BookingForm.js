import React from "react";
import { useState } from "react";
import { submitAPI } from "../BookingAPI";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
  const [r_date, setDate] = useState();
  const [time, setTime] = useState("17:00");
  const [guest, setGuest] = useState("2");
  const [occasion, setOccasion] = useState("occasion");
  const [placement, setPlacement] = useState("placement");

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
    return guest && occasion !== "occasion" && placement !== "placement";
  };
  return (
    <form onSubmit={handleSubmit} className="grid r-form">
      <label htmlFor={r_date}>Choose a date</label>
      <input
        type="date"
        name="date"
        value={r_date}
        id="r_date"
        onChange={handleDateChange}
        data-testid="r_date"
      ></input>
      <label htmlFor={time}>Choose time</label>
      <select
        id="availableTimes"
        data-testid="availableTimes"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      >
        {timeOptions}
      </select>
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
      ></input>
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
      </select>
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
      </select>
      <button type="submit" className="navButton" disabled={!isValid()}>
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;

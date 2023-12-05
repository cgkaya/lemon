import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [r_date, setDate] = useState();
  const [time, setTime] = useState("17:00");
  const [guest, setGuest] = useState("2");
  const [occasion, setOccasion] = useState("occasion");
  const [placement, setPlacement] = useState("placement");

  const [timeOptions, setTimeOptions] = useState(
    props.availableTimes.map((times) => (
      <option key={times} value={times}>
        {times}
      </option>
    ))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation is submitted!");
  };
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    props.updateTimes(selectedDate);
    setTimeOptions(
      props.availableTimes.map((times) => (
        <option key={times} value={times}>
          {times}
        </option>
      ))
    );
  };
  const isValid = () => {
    return (
      r_date && guest && occasion !== "occasion" && placement !== "placement"
    );
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
      ></input>
      <label htmlFor={time}>Choose time</label>
      <select
        id="availableTimes"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      >
        {timeOptions}
      </select>
      <label htmlFor={guest}>Number of guest</label>
      <input
        type="number"
        value={guest}
        placeholder="2"
        min={1}
        max={10}
        id="guest"
        onChange={(e) => {
          setGuest(e.target.value);
        }}
      ></input>
      <label htmlFor={occasion}>Occasion</label>
      <select
        id="occasion"
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

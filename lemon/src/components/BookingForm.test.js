import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../BookingAPI";
import { initializeTimes, updateTimes } from "../App";

test("Renders the BookingForm labels", () => {
  render(
    <BookingForm
      availableTimes={{
        times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      }}
      dispatch={jest.fn((action) => action)}
    />
  );

  const choseDateLabel = screen.getByText("Choose a date");
  expect(choseDateLabel).toBeInTheDocument();
  const choseDateField = screen.getByTestId("r_date");
  expect(choseDateField).toBeInTheDocument();

  const choseTimeLabel = screen.getByText("Choose time");
  expect(choseTimeLabel).toBeInTheDocument();
  const choseTimeField = screen.getByTestId("availableTimes");
  expect(choseTimeField).toBeInTheDocument();

  const numberGuestLabel = screen.getByText("Number of guests");
  expect(numberGuestLabel).toBeInTheDocument();
  const numberGuestField = screen.getByTestId("guest");
  expect(numberGuestField).toBeInTheDocument();

  const placementLabel = screen.getByText("Preferred table placement");
  expect(placementLabel).toBeInTheDocument();
  const placementField = screen.getByTestId("placement");
  expect(placementField).toBeInTheDocument();

  const submitButton = screen.getByText("Make Your Reservation");
  expect(submitButton).toBeInTheDocument();
});
test("initializeTimes returns the correct expected value", () => {
  const today = new Date();
  const initialState = initializeTimes();
  const expectedResult = { times: fetchAPI(today) };
  expect(initialState).toEqual(expectedResult);
});

test("should update state based on selectedDate", () => {
  const mockedResponse = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  fetchAPI = jest.fn().mockReturnValue(mockedResponse);
  const selectedDate = "2023-12-06";
  const updatedState = updateTimes(selectedDate);
  expect(updatedState).toEqual({ ...state, times: mockedResponse });
});

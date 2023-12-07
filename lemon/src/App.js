import "./App.css";
import BookingPage from "./components/BookingPage";
import Confirmation from "./components/Confirmation";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useReducer } from "react";
import { fetchAPI } from "./BookingAPI";

function App() {
  function updateTimes(state, selectedDate) {
    return { ...state, times: fetchAPI(new Date(selectedDate)) };
  }
  const initializeTimes = { times: fetchAPI(new Date()) };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/booking"
            element={
              <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            }
          />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;

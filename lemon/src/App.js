import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

import Footer from "./components/Footer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    backgroundColor: "#edefee",
    typeColor: "#333",
  },
};

const theme = extendTheme({ colors });
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

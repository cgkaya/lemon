import React from "react";
import Nav from "./Nav";
import logo from "../Logo.png";
import { Box, HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Box color="#495e57" fontFamily="Karla" margin="0 auto" maxWidth="1280px">
        <HStack justifyContent="space-between" alignItems="center" spacing={28}>
          <a href="#">
            <img src={logo} alt="Little Lemon Logo" width={"350px"} />
          </a>

          <Nav />
        </HStack>
      </Box>
    </header>
  );
};
export default Header;

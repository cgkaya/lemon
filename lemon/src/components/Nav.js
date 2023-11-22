import React from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      listStyleType="none"
    >
      <nav>
        <ul>
          <HStack spacing={15} listStyleType={"none"} fontWeight={800}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </HStack>
        </ul>
      </nav>
    </Box>
  );
};
export default Nav;

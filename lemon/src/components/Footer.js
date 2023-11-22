import React from "react";
import logo from "../Logo.png";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { startOptimizedAppearAnimation } from "framer-motion";

const Footer = () => {
  const footerItems = [
    {
      heading: "Navigation",
      listItems: [
        "Home",
        "About",
        "Menu",
        "Reservation",
        "Order Online",
        "Login",
      ],
    },
    {
      heading: "Contact Us",
      listItems: ["Phone", "E-mail", "Adress"],
    },
    {
      heading: "Social Media",
      listItems: ["Instagram", "Linkedin", "Pinterest"],
    },
  ];
  /*const openListItems = footerItems.listItems.map((openListItem) => (
    <p>{openListItem}</p>
  ));*/
  const footerNavItems = footerItems.map((footerItem) => (
    <h3>{footerItem.heading}</h3>
  ));
  return (
    <footer>
      <Box color="#495e57" fontFamily="Karla" margin="0 auto" maxWidth="1280px">
        <HStack justifyContent="space-between" alignItems="center" spacing={28}>
          <VStack>
            <img src={logo} alt="Little Lemon Logo" width={"350px"} />
            <span>Copyright 2023</span>
          </VStack>
          <p>{footerNavItems}</p>
        </HStack>
      </Box>
    </footer>
  );
};
export default Footer;

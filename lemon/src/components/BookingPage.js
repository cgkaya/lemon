import React from "react";
import restaurant from "../images/restaurant.jpg";
import { Box, HStack, VStack, Text } from "@chakra-ui/react";

const BookingPage = () => {
  return (
    <main>
      <Box backgroundColor={"#495e57"} marginBottom={"96px"}>
        <Box maxWidth="1280px" alignItems="center" margin="0 auto">
          <HStack justifyContent="space-between" spacing={28}>
            <Box>
              <h2
                style={{
                  fontSize: "60px",
                  paddingTop: "24px",
                  textAlign: "left",
                  color: "#f4ce14",
                }}
              >
                Reserve a table!
              </h2>
              <Text
                color={"#edefee"}
                textAlign="left"
                padding={"24px 0"}
                fontSize={"20px"}
              >
                <b>Opening times :</b> Monday - Sunday opening. 12pm - 11.30pm.
              </Text>
            </Box>
            <img
              src={restaurant}
              style={{
                objectFit: "cover",
                height: "30vh",
                borderRadius: "16px",

                position: "relative",
                top: "48px",
                boxShadow: "3px 3px 15px rgba(0,0,0,.2)",
              }}
            />
          </HStack>
        </Box>
      </Box>
      <Box
        maxWidth="1280px"
        alignItems="center"
        margin="0 auto"
        textAlign="center"
      >
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
        <form>Form</form>
      </Box>
    </main>
  );
};
export default BookingPage;

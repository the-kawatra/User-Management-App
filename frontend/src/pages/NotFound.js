import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
  return (
    <Container>
      <Box
        h="80vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading size="4xl">404</Heading>
        <Text fontSize="3xl">Page Not Found</Text>
      </Box>
    </Container>
  );
};

export default NotFound;

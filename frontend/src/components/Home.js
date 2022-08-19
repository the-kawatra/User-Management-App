import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box w="100%" display="flex" justifyContent="center" py="4" bg="cyan.400">
        <Heading>CRUD App</Heading>
      </Box>
      <Outlet />
    </>
  );
};

export default Home;

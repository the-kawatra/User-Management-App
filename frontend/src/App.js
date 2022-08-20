import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Box w="100%" display="flex" justifyContent="center" py="4" bg="cyan.400">
        <Heading>CRUD App</Heading>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

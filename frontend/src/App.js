import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/edituser" element={<EditUser />} />
    </Routes>
  );
};

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

import FormContainer from "./Form";

const AddUser = () => {
  const history = useNavigate();

  const addUser = (e) => {
    e.preventDefault();
    history("/");
  };

  return <FormContainer header={"Add User"} action={addUser} />;
};

export default AddUser;

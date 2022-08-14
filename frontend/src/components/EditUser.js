import React from "react";
import { useNavigate } from "react-router-dom";

import FormContainer from "./Form";

const EditUser = () => {
  const history = useNavigate();

  const editUser = (e) => {
    e.preventDefault();
    history("/");
  };

  return <FormContainer header={"Edit User"} action={editUser} />;
};

export default EditUser;

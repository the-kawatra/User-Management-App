import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

const EditButton = ({ userId }) => (
  <Link to={`/edituser/${userId}`}>
    <Button>
      <FaEdit />
    </Button>
  </Link>
);

const DeleteButton = ({ userId }) => {
  const deleteUser = async () => {
    try {
      const { data } = await axios.delete(`/api/user/${userId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button onClick={deleteUser}>
      <FaTrashAlt />
    </Button>
  );
};

export { EditButton, DeleteButton };

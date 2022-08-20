import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

const AddUser = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    department: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const addUser = async (e) => {
    e.preventDefault();
    const { name, email, age, department } = user;

    try {
      const { data } = await axios.post(
        "/api/user/add",
        { name, email, age, department },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      history("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Container centerContent>
      <Box
        display="flex"
        justifyContent="center"
        mt="10"
        w="100%"
        borderRadius="md"
        borderWidth="2px"
      >
        <Text fontSize="4xl">Add User</Text>
      </Box>
      <Box p="5" my="5" w="100%" borderRadius="md" borderWidth="2px">
        <VStack spacing="5">
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              value={user.name}
              name="name"
              placeholder="Enter Name"
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              value={user.email}
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={handleInputs}
            />
            <FormHelperText>Email Address must be unique</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Age</FormLabel>
            <Input
              value={user.age}
              name="age"
              type="number"
              placeholder="Enter Age"
              onChange={handleInputs}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Department</FormLabel>
            <Input
              value={user.department}
              name="department"
              placeholder="Enter Department"
              onChange={handleInputs}
            />
          </FormControl>
          <Button colorScheme="purple" w="100%" onClick={addUser}>
            Submit
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default AddUser;

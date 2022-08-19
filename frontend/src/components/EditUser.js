import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

const EditUser = () => {
  const history = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
    department: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/user/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setUser({
          name: data.name,
          email: data.email,
          age: data.age,
          department: data.department,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const editUser = async (e) => {
    e.preventDefault();
    const { name, email, age, department } = user;

    try {
      const { data } = await axios.put(
        `/api/user/edit/${id}`,
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
        <Text fontSize="4xl">Edit User</Text>
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
          <ButtonGroup spacing="6" w="100%">
            <Button colorScheme="purple" w="50%" onClick={editUser}>
              Edit
            </Button>
            <Button
              variant="outline"
              w="50%"
              onClick={() => {
                history("/");
              }}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </VStack>
      </Box>
    </Container>
  );
};

export default EditUser;

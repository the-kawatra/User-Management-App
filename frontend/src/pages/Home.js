import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DeleteButton, EditButton } from "../components/Buttons";
import {
  Box,
  Button,
  Container,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Container maxW="80%" mt="10" centerContent>
        <Box>
          <Link to="/adduser">
            <Button colorScheme="purple" mb="5">
              Add User
            </Button>
          </Link>
        </Box>
        <Box>
          <Heading>User List</Heading>
        </Box>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>User Data will update automatically</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th isNumeric>Age</Th>
                <Th>Department</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user, i) => (
                <Tr key={i}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td isNumeric>{user.age}</Td>
                  <Td>{user.department}</Td>
                  <Td>{<EditButton userId={user._id} />}</Td>
                  <Td>{<DeleteButton userId={user._id} />}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Home;

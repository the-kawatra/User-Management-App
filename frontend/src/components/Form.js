import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const FormContainer = ({ header, action }) => {
  return (
    <Container className="my-5">
      <Link to="/">
        <Button className="mb-3 mx-3">Back to Home</Button>
      </Link>
      <Container>
        <Card className="shadow-lg p-3">
          <Card.Header as="h2" className="text-center">
            {header}
          </Card.Header>
          <Card.Body className="m-3">
            <Form onSubmit={action}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  Email Address must be unique
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone Number" />
                <Form.Text className="text-muted">
                  Phone Number must be unique
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Age" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="Enter Department Name" />
              </Form.Group>

              <Button className="mt-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default FormContainer;

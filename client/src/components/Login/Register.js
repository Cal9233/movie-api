import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mb-5">Register</h1>
      <Form style={{ minWidth: "300px", maxWidth: "600px" }}>
        <Form.Group controlId="registerUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
          <Form.Text className="text-muted">Enter your username.</Form.Text>
        </Form.Group>
        <Form.Group controlId="registerEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Enter your email address.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="registerPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">Enter your password.</Form.Text>
        </Form.Group>
        <Form.Text className="mb-3 text-right">
          Already have an account? <Link to="/login">Login</Link>
        </Form.Text>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;

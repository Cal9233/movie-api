import React from "react";
import { Form, FormControl, Button, Jumbotron } from "react-bootstrap";

const LandingPage = ({ history }) => {
  return (
    <>
      <Jumbotron>
        <h1>Welcome to the Landing Page</h1>
        <div className="d-flex">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="secondary">Search</Button>
          </Form>
          <Button
            onClick={() => history.push("/login")}
            variant="secondary"
            className="mx-3"
          >
            Login
          </Button>
          <Button onClick={() => history.push("/register")} variant="secondary">
            Register
          </Button>
        </div>
      </Jumbotron>
    </>
  );
};

export default LandingPage;

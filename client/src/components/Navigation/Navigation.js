import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";

const Navigation = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { setSearchResults } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${searchQuery}&apikey=OMDBKEY`)
      .then(({ data }) => {
        setSearchResults(data.Search);
        history.push("/search");
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  };

  if (pathname !== "/") {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Site Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form onSubmit={(e) => handleSubmit(e)} inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            <Nav className="mx-3">
              <NavDropdown title="Account">
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                <NavDropdown.Item href="/profile">
                  Your Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Inbox</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  } else {
    return null;
  }
};

export default Navigation;

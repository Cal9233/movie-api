import React from "react";
import avatar from "../../assets/avatar.jpg";
import { Card } from "react-bootstrap";

const UserInfo = () => {
  return (
    <>
      <h1>Username</h1>
      <Card style={{ maxWidth: "18rem" }}>
        <Card.Img variant="top" src={avatar} alt="avatar" />
        <Card.Body>
          <Card.Title>About Me:</Card.Title>
          <Card.Text>Hello nice to meet you blah blah blah</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserInfo;

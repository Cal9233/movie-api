import React from "react";
import { Form, Button } from "react-bootstrap";

const PostForm = () => {
  return (
    <thead>
      <tr>
        <th colspan="2">
          <Form className="d-flex flex-column align-items-center">
            <Form.Group style={{ width: "80%" }} controlId="addPost">
              <Form.Label>Post:</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="type here..." />
            </Form.Group>
            <Button
              style={{ marginLeft: "10%", alignSelf: "flex-start" }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </th>
      </tr>
    </thead>
  );
};

export default PostForm;

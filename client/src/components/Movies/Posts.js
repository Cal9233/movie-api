import React from "react";
import "./movie.css";
import PostForm from "./PostForm";
import { Table, Card } from "react-bootstrap";

const Posts = () => {
  return (
    <Card id="post-card">
      <Table id="post-table" striped bordered>
        <PostForm />
        <tbody>
          <tr>
            <td>poster</td>
            <td>post</td>
          </tr>
          <tr>
            <td>poster</td>
            <td>post</td>
          </tr>
          <tr>
            <td>poster</td>
            <td>post</td>
          </tr>
          <tr>
            <td>poster</td>
            <td>post</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default Posts;

import React from "react";
import "./movie.css";
import { Card, Button } from "react-bootstrap";

const Actions = () => {
  return (
    <Card id="movie-actions">
      <Card.Body className="d-flex flex-column align-items-center">
        <Button variant="secondary">Save to Favorites</Button>
        <Button variant="secondary">Save to Watchlist</Button>
        <Button variant="secondary">Save to Wishlist</Button>
      </Card.Body>
    </Card>
  );
};

export default Actions;

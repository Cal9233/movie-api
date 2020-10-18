import React from "react";
import { Card } from "react-bootstrap";
import movieImg from "../../assets/movieImg.jpg";

const Favorites = () => {
  const map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h1>Favorite Movies</h1>
      <div className="profile-flexbox">
        {map?.map((movie, i) => {
          return (
            <Card key={i} style={{ maxWidth: "15rem", margin: "20px" }}>
              <Card.Img variant="top" src={movieImg} alt="movie" />
              <Card.Body>
                <Card.Title>Movie Title:</Card.Title>
                <Card.Text>Movie Description goes here</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;

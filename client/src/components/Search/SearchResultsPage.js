import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Card, Button } from "react-bootstrap";
import movieImg from "../../assets/movieImg.jpg";

const SearchResultsPage = () => {
  const { searchResults } = useContext(AppContext);
  const map = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(searchResults);

  return (
    <>
      <h1 className="mb-5">Search Results:</h1>
      <div className="profile-flexbox">
        {map?.map((movie, i) => {
          return (
            <Card key={i} style={{ maxWidth: "15rem", margin: "20px" }}>
              <Card.Img variant="top" src={movieImg} alt="movie" />
              <Card.Body>
                <Card.Title className="text-center">Movie Title:</Card.Title>
                <Card.Text>Movie Description goes here</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button>Link to Movie</Button>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default SearchResultsPage;

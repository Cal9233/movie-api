import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Card, Button } from "react-bootstrap";

const SearchResultsPage = ({ history }) => {
  const { searchResults } = useContext(AppContext);

  return (
    <>
      <h1 className="mb-5">Search Results:</h1>
      <div className="profile-flexbox">
        {searchResults?.map((movie, i) => {
          return (
            <Card
              key={movie.imdbID}
              style={{ maxWidth: "15rem", margin: "20px" }}
            >
              <Card.Img variant="top" src={movie.Poster} alt="movie" />
              <Card.Body className="text-center">
                <Card.Title>{movie.Title}</Card.Title>
                <Button onClick={() => history.push(`/movie/${movie.imdbID}`)}>
                  Link to Movie
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default SearchResultsPage;

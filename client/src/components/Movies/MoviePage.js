import React, { useEffect, useState } from "react";
import "./movie.css";
import { Card } from "react-bootstrap";
import MovieTable from "./MovieTable";
import Actions from "./Actions";
import Posts from "./Posts";
import axios from "axios";

const MoviePage = ({ match }) => {
  const { id } = match.params;
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios(`http://www.omdbapi.com/?i=${id}&apikey=OMDBAPIKEY`)
      .then(({ data }) => setMovie(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <h1 className="text-center">{movie?.Title}</h1>
      <Card key={movie?.imdbID} style={{ margin: "20px auto" }}>
        <Card.Body id="movie-card">
          <Card.Img
            id="movie-img"
            className="mr-3 mb-3"
            src={movie?.Poster}
            alt="movie"
          />
          <Actions />
          {movie ? <MovieTable movie={movie} /> : <h2>Loading...</h2>}
        </Card.Body>
      </Card>
      <h2 className="mt-5">Add Your Thoughts!</h2>
      <Posts />
    </>
  );
};

export default MoviePage;

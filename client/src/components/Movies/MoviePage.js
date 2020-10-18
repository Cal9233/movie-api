import React, { useEffect, useState } from "react";
import "./movie.css";
import { Card, Table } from "react-bootstrap";
import axios from "axios";

const MoviePage = ({ match }) => {
  const { id } = match.params;
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios(`http://www.omdbapi.com/?i=${id}&apikey=OMDB_KEY`)
      .then(({ data }) => setMovie(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <h1>{movie?.Title}</h1>
      <Card key={movie?.imdbID} style={{ margin: "20px" }}>
        <Card.Body id="movie-card">
          <Card.Img
            id="movie-img"
            className="mr-3 mb-3"
            src={movie?.Poster}
            alt="movie"
          />
          <Table id="movie-table" striped bordered hover>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Released</td>
                <td>
                  {movie?.Released}, {movie?.Language}, {movie?.Country}
                </td>
              </tr>
              <tr>
                <td>Rated</td>
                <td>{movie?.Rated}</td>
              </tr>
              <tr>
                <td>Runtime</td>
                <td>{movie?.Runtime}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>{movie?.Genre}</td>
              </tr>
              <tr>
                <td>Team</td>
                <td>
                  <h6>Writers: </h6>
                  <p>{movie?.Writer}</p>
                  <hr />
                  <h6>Director: </h6>
                  <p>{movie?.Director}</p>
                  <hr />
                  <h6>Actors:</h6>
                  <p>{movie?.Actors}</p>
                </td>
              </tr>
              <tr>
                <td>Plot</td>
                <td>{movie?.Plot}</td>
              </tr>
              <tr>
                <td>Awards</td>
                <td>{movie?.Awards}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default MoviePage;

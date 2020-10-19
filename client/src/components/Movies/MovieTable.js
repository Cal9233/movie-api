import React from "react";
import { Table } from "react-bootstrap";

const MovieTable = ({ movie }) => {
  return (
    <Table id="movie-table" striped bordered>
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
  );
};

export default MovieTable;

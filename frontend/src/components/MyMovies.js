import React from "react";

function MyMovies({ movies }) {
  movies.map((movie) => <p>{movie.poster}</p>);
  console.log(movies);
}

export default MyMovies;

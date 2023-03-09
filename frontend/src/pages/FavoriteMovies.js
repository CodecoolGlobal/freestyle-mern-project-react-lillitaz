import React, { useEffect } from "react";
import { useState } from "react";
import MyMovies from "../components/MyMovies";

async function fetchUsers(stateSetter) {
  const response = await fetch("http://localhost:5000/api/users");
  const users = await response.json();
  stateSetter(users);
}

function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchUsers(setMovies);
  });
  return (
    <div id="movie-showcase">{movies && <MyMovies movies={movies} />}</div>
  );
}
export default FavoriteMovies;

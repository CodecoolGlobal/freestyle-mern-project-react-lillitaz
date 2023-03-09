import React, { useState } from "react";
import Footer from "../components/Footer";
import MovieSearch from "../components/MovieSearch";
import Button from "../components/Button";
import Login from "../components/Login";

function Account() {
  const [movieData, setMovieData] = useState({});
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const currentDate = new Date().toDateString();

  const handleMovieSelect = async (movie) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=38ae7047&i=${movie.imdbID}`
    );
    const data = await response.json();
    setMovieData(data);
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: username, password: password }),
      });
      if (response.ok) {
        setUser(username);
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    }
  };

  const handleAddToFavorites = async () => {
    const { Title: title, Year: year, Poster: poster } = movieData;

    if (!user || !movieData) {
      console.log("No user or movie data found");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, year, poster, currentUser: user }),
      });

      if (response.ok) {
        console.log("Movie added to favorites");
      } else {
        console.error("Could not add movie to favorites");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="page-container">
      <div id="content-wrap">
        <div></div>
        <div>
          <Login onLogin={handleLogin} error={error} />
        </div>
        <div id="movie-showcase">
          <MovieSearch handleSelect={handleMovieSelect} />
          {movieData && (
            <div>
              <h2>{movieData.Title}</h2>
              <p>{movieData.Genre}</p>
              <p>{movieData.Year}</p>
              <p>{movieData.imdbRating}</p>
              <p>{movieData.Actors}</p>
              <p>{movieData.Plot}</p>
              <img src={movieData.Poster} alt={movieData.Title} />
            </div>
          )}
          <Button
            type="button"
            onClick={() => handleAddToFavorites()}
            innerText={"Add to Collection"}
          />
        </div>
        <Footer currentDate={currentDate} />
      </div>
    </div>
  );
}

export default Account;

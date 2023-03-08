import React, { useState } from "react";
import Footer from "../components/Footer";
import MovieSearch from "../components/MovieSearch";
import Button from "../components/Button";
import Login from "../components/Login";

function Account() {
  const [movieData, setMovieData] = useState({});
  let currentDate = new Date().toDateString();

  const handleMovieSelect = async (movie) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=38ae7047&i=${movie.imdbID}`
    );
    const data = await response.json();
    console.log(data);
    setMovieData(data);
  };

  return (
    <div id="page-container">
      <div id="content-wrap">
        <div></div>
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
          <Button type="submit" innerText={"Add to Collection"}></Button>
        </div>
        <div>
          <Login />
        </div>
      </div>
      <div>
        <Footer currentDate={currentDate} />
      </div>
    </div>
  );
}

export default Account;

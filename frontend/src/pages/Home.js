import React, { useState } from "react";
import MovieSearch from "../components/MovieSearch";
import CreateAccount from "../components/CreateAccount";
import Footer from "../components/Footer";

function Home() {
  const [movieData, setMovieData] = useState({});
  const currentDate = new Date().toDateString();

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
        <div className="headline">
            <h1>Welcome to CrudeMovieDb</h1>
            <h2>
               Browse through our library and collect movies at home or while traveling
                on tablet, phone or TV.
            </h2>
            <p> Create an Account and collect your favorite Movies!</p>
        </div>
        <div>
          <CreateAccount />
        </div>
        <div id="movie-showcase">
          <MovieSearch handleSelect={handleMovieSelect} />
          {Object.keys(movieData).length !== 0 && (
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
        </div>
      </div>
      <div>
        <Footer currentDate={currentDate} />
      </div>
    </div>
  );
}

export default Home;

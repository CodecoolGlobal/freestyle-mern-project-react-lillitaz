import { useState } from "react";
import GenSearch from "../components/GenSearch";

function MovieNightIdeas() {
  const [movieData, setMovieData] = useState();

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
        <div class="py-16">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div class="md:5/12 lg:w-5/12"></div>
              <div class="md:7/12 lg:w-6/12"></div>
            </div>
          </div>
        </div>
        <div>
          <GenSearch handleSelect={handleMovieSelect} />
          {movieData ? (
            <div
              className="holder max-w-screen-lg grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2"
              style={{ margin: "1vw 20%" }}
            >
              <div
                className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative"
                style={{ width: "90%" }}
              >
                <div className="desc p-4 text-gray-800">
                  <p className="title font-bold block cursor-pointer hover:underline">
                    {movieData.Title}
                  </p>
                  <p>{movieData.Genre}</p>
                  <p>{movieData.Year}</p>
                  <p>{movieData.imdbRating}</p>
                  <p>{movieData.Actors}</p>
                  <p>{movieData.Plot}</p>
                  <img
                    className="w-full"
                    src={movieData.Poster}
                    alt={movieData.Title}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MovieNightIdeas;
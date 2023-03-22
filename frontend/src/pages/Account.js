import { useState } from "react";
//import Footer from "../components/Footer";
import MovieSearch from "../components/MovieSearch";
import Button from "../components/Button";
import Login from "../components/Login";

function Account() {
  const [movieData, setMovieData] = useState({});
  const user = localStorage.getItem("userId")
  
  const handleMovieSelect = async (movie) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=38ae7047&i=${movie.imdbID}`
    );
    const data = await response.json();
    setMovieData(data);
  };

  const handleAddToFavorites = async () => {
    const { Title: title, Year: year, Poster: poster, imdbID: imdbID } = movieData;
    if (!user || !movieData) {
      console.log("No user or movie data found");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/favorites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, year, poster, imdbID, user }),
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
        <div class="py-16">
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div class="md:5/12 lg:w-5/12">
              </div>
              <div class="md:7/12 lg:w-6/12">
                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">This is your Dashboard</h2>
                <p class="mt-6 text-gray-600"> Here you can add your favorite movies to your collection and share them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Login />
        </div>
        <div>
          <MovieSearch handleSelect={handleMovieSelect} />
          {movieData ? (
            <div className="holder max-w-screen-lg grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2" style={{ margin: "1vw 20%" }}>
              <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative" style={{ width: "90%" }}>
                <div className="desc p-4 text-gray-800">
                  <p className="title font-bold block cursor-pointer hover:underline">{movieData.Title}</p>
                  <p>{movieData.Genre}</p>
                  <p>{movieData.Year}</p>
                  <p>{movieData.imdbRating}</p>
                  <p>{movieData.Actors}</p>
                  <p>{movieData.Plot}</p>
                  <img className="w-full" src={movieData.Poster} alt={movieData.Title} />
                </div>
                <div>
                <Button
                  type="button"
                  onClick={() => handleAddToFavorites(user)}
                  innerText={"Add to Collection"}
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

export default Account;

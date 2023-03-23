import { useState } from "react";
import MovieSearch from "../components/MovieSearch";
import Login from "../components/Login";

function Home() {
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
      <div>
          <MovieSearch handleSelect={handleMovieSelect} />
          {movieData ? (
            <div className="holder grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2" style={{ margin: "1vw 3vw" }}>
              <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative" style={{ width: "30vw" }}>
                <div className="desc p-4 text-gray-800">
                  <p className="title font-bold block cursor-pointer hover:underline">{movieData.Title}</p>
                  <p>{movieData.Genre}</p>
                  <p>{movieData.Year}</p>
                  <p>{movieData.imdbRating}</p>
                  <p>{movieData.Actors}</p>
                  <p>{movieData.Plot}</p>
                  <img className="w-full" src={movieData.Poster} alt={movieData.Title} />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="py-16">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div class="md:5/12 lg:w-5/12">
                <img
                  src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" loading="lazy"
                  alt="cinema photography"
                  width=""
                  height="">
                  </img>
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Welcome to CrudeMovieDb</h2>
                <p className="mt-6 text-gray-600"> Browse through our library and collect movies at home or while traveling
                  on tablet, phone or TV.
                </p>
                <p className="mt-4 text-gray-600">Create an Account and collect your favorite Movies!</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Home;
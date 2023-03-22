import React, { useState } from 'react';

function MovieSearch({ handleSelect }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value) {
      fetch(`http://www.omdbapi.com/?apikey=38ae7047&s=${event.target.value}`)
        .then((response) => response.json())
        .then((data) => {
            setMovies(data.Search || []);
        })
        .catch((error) => {
          console.error('Error fetching movies:', error);
        });
    } else {
      setMovies([]);
    }
  };

  return (
    <form>
      <div class="flex flex-col p-14 py-2 m-h-screen">
        <input
          onChange={handleSearchChange}
          class="font-bold rounded-full w-full py-5 pl-8 text-white-600 bg-blue-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
          type="text"
          value={searchQuery}
          placeholder="Enter Movie Title">
        </input>

        <ul className={movies.length > 0 ? 'autocomplete-items' : ''}>
          {movies.map((movie) => (
            <li key={movie.imdbID} onClick={() => {
              handleSelect(movie);
              setSearchQuery('');
              setMovies([]);
            }}
            >
              {movie.Title}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default MovieSearch;

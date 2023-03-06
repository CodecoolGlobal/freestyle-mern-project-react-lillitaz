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
      <div className="autocomplete">
        <input
          id="searchInput"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter movie title"
        />
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

import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const user = localStorage.getItem("user");

  useEffect(() => {
    console.log(user);
    fetch(`http://localhost:5000/api/users?userName=${user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setMovies(data);
        setActiveIndex(0);
      })
      .catch((error) => console.error(error));
  }, [user]);

  const handleRemove = (id) => {
    const userName = user
    fetch(`http://localhost:5000/api/users/${userName}/favorites/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setMovies((prevState) => {
          const updatedFavorites = prevState.filter((fav) => fav._id !== id);
          return updatedFavorites;
        });
        setActiveIndex(0);
      })
      .catch((error) => console.error(error));
  };

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
      <div id="carousel">
        {movies.length > 0 ? (
          <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            {movies.map((fav) => (
              <Carousel.Item key={fav._id}>
                <img className="d-block w-100" id="carousel-item" src={fav.poster} alt="Movie Poster" />
                <Carousel.Caption>
                  <h3>{fav.title}</h3>
                  <p>{fav.year}</p>
                  <button
                    id="remove-button"
                    type="button"
                    onClick={() => handleRemove(fav._id)}
                  >
                    Remove
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p id="error">No favorite movies found.</p>
        )}
      </div>
    </div>
  );
  
}

export default FavoriteMovies;

import React, { useEffect, useState } from "react";
import Button from "../components/Button";

function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const user = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:5000/api/user/favorites/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.error(error));
  }, [user]);

  const handleRemove = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/users/${user}/favorites/${id}`, {
        method: "DELETE",
      });
      setMovies((prevState) => {
        const updatedFavorites = prevState.filter((fav) => fav._id !== id);
        return updatedFavorites;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="holder max-w-screen-lg grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3" style={{ margin: "5vw 5%" }}>
      {movies.length > 0 ? (
        movies.map((fav) => (
          <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative" key={fav._id} style={{ width: "90%" }}>
            <img className="d-block w-100" src={fav.poster} alt="Movie Poster" />
            <h3>{fav.title}</h3>
            <p>{fav.year}</p>
            <Button
              type="button"
              onClick={() => handleRemove(fav._id)}
              innerText="Remove"
            >
            </Button>
          </div>
        ))
      ) : (
        <div className="holder max-w-screen-lg grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1" style={{ margin: "5vw 1vw" }}>
            <div className="mb-10 m-2 text-5xl shadow-lg border-gray-800 bg-gray-100 relative" style={{ width: "85vw" }}>
              <p>No favorite movies found.</p>
            </div>
          </div>
      )}
    </div>
  );
}

export default FavoriteMovies;

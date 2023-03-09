import React, { useEffect } from "react";
import { useState } from "react";




function FavoriteMovies() {
  const [movies, setMovies] = useState([]); 

  useEffect(()=>{
    fetch('http://localhost:5000/api/users')
    .then((response)=> response.json())
    .then((data)=> setMovies(data))
    .catch((error)=>console.error(error))
},[]);

const handleRemove = (id) => {
  const userId = movies[0]._id;
  fetch(`http://localhost:5000/api/users/${userId}/favorites/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      setMovies((prevState) => {
        const updatedFavorites = prevState[0].favorites.filter(
          (fav) => fav._id !== id
        );
        return [{ ...prevState[0], favorites: updatedFavorites }];
      });
    })
    .catch((error) => console.error(error));
};
  return (
    <div id="movie-showcase">
      <h2>My favorite Movies:</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Poster</th>
              
            </tr>
          </thead>
          <tbody>   
            {movies.length > 0 && movies[0].favorites.map((fav)=>(
              <tr key={fav._id}>
              <td>{fav.title}</td>
              <td>{fav.year}</td>
              <td><img src={fav.poster} alt="Movie Poster"/></td>
              
              <td>
                <button
                type="button"
                onClick={() => handleRemove(fav._id)}
                 
                  >
                  Remove
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
export default FavoriteMovies;

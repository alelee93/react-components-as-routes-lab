import React from 'react';
import { movies } from '../data';

const renderGenres = (genres) => {
 const gen = genres.map((genre) => {
    return <li>{genre}</li>
  })

  return gen
}


const renderMovies = () => {
  const showMovies = movies.map((movie) => {
    return(
      <div>
        <h4>Name: {movie.title} </h4>
        <br />
        Time: {movie.time}
        <br />
        Genres: 
      <ul>
       {renderGenres(movie.genres)}
      </ul>
      </div>
    )
  })

  return showMovies
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;

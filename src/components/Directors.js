import React from 'react';
import { directors } from '../data';

const renderMovies = (movies) => {
  const movie = movies.map((movie) => {
    return <li>{movie}</li>
  })

  return movie
}


const renderDirectors = () => {
  const showDirectors = directors.map((director) => {
    return(
      <div>
        <h4>{director.name}</h4>
        <ul>{renderMovies(director.movies)}</ul>
      </div>
    )
  })

  return showDirectors
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors

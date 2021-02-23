import React from 'react';
import { actors } from '../data';


const renderMovies = (movies) => {
  const mov = movies.map((movie) => {
    return <li>{movie}</li>
  })

  return mov
}

const renderActors = () => {
  const showActors = actors.map((actor) => {
    return(
      <div>
        <h4>{actor.name}</h4>
        <ul>{renderMovies(actor.movies)}</ul>
      </div>
    )
  })

  return showActors
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;

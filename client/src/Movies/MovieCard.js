import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {

  // const saveHandler = () => {
  //   console.log(props.saveMovie);
  // }

  if (!props.movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
      <Link to={`/movies/${props.movie.id}`} key={props.movie.id}><h2>{title}</h2></Link>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button" onClick={props.saveMovie}>Save</div>
    </div>
  );
};

export default MovieCard;

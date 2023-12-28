// MovieCard.js
import React from 'react';

function MovieCard({ title, image, rating, genres, officialWebsite, summary }) {
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={image} alt={title} />
      </div>

      <h3 className="movie-heading">{title}</h3>

      <p className="movie-rating">Rating: {rating}</p>

      <p className="movie-genres">Genres: {genres.join(', ')}</p>


      <a className="movie-website" href={officialWebsite} target="_blank" rel="noopener noreferrer">
        Official Website
      </a>
    </div>
  );
}

export default MovieCard;

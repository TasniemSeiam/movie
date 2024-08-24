import { memo } from "react";

const MovieItem = ({ movie }) => {
  const { title, poster_path, vote_average } = movie;
  return (
      <div className="movie-item">
          <div className="dots">
              <span></span>
              <span></span>
              <span></span>
          </div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div className="bluerDiv">
        <h4>{title}</h4>
        <p>{vote_average}</p>
      </div>
    </div>
  );
};

export default memo(MovieItem);

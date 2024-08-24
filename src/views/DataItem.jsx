import { memo } from "react";

const DataItem = ({ data }) => {
//   const {id, title, poster_path, vote_average } = data;

    return (
        <div className="movie-item">
            <div className="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.name} />
        <div className="bluerDiv">
          <h4>{data.name}</h4>
          <p>{data.vote_average}</p>
        </div>
      </div>
    );
}

export default memo(DataItem);
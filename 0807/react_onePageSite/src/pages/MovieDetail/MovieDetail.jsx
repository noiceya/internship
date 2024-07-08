import React, { useContext, useEffect } from "react";
import "./MovieDetail.css";
import { myContext } from "../../app/context";

function MovieDetail() {
  const { state } = useContext(myContext);

  useEffect(() => {
    console.log(state);
  }, [state]);

  // Check if state.global.movie exists to prevent errors
  if (!state.global.movie) {
    return <div>Loading...</div>;
  }

  const { title, original_title, release_date, vote_average, vote_count, poster_path } = state.global.movie;

  return (
    <div className="detail-design">
      <div className="info">
        <h1>{title}</h1>
        <p><b>Release date</b><br />{release_date}</p>
        <p><b>Original title</b><br />{original_title}</p>
        <p><b>Average note</b><br />{vote_average}</p>
        <p id="votes"><b>Votes</b><br />{vote_count}</p>
      </div>
      <img
        id="main"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="movie-poster"
      />
    </div>
  );
}

export default MovieDetail;

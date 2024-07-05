import { useState, useEffect, useContext } from "react";
import { bringMovies } from "../../services/api-calls";
import { myContext } from "../../app/context";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const { state, SetAuth } = useContext(myContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (movies.length === 0) {
      const getMovies = async () => {
        try {
          const res = await bringMovies();
          setMovies(res.results);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };
      getMovies();
    }
  }, [movies]);

  const selectMovie = (movie) => {
    SetAuth("movie", movie);
    navigate("/moviedetail");
  };

  return (
    <div className="home-design">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="movie-item" onClick={() => selectMovie(movie)}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Home;

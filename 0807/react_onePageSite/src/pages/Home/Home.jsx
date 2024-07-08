import { useState, useEffect, useContext } from "react";
import { bringMovies, searchMovieCriteria } from "../../services/api-calls";
import { myContext } from "../../app/context";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const {state, SetAuth} = useContext(myContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (movies.length === 0) {
      const getMovies = async () => {
        bringMovies()
          .then((res) => {
            setMovies(res.results);
          })
          .catch((error) => console.log(error));
      };
        getMovies();
    }

    console.log(movies);
  }, [movies]);

  useEffect(()=>{
    //The trick here consists in the fact that we are following the state with the useEffect,
    //so every time we change the state we alter the movies data hook, not the state hook.

    if(state !== ""){

      const bringSearchedMovies = async () => {

        searchMovieCriteria(state.global.search)
          .then(res => {
            setMovies(res.results)
          })
          .catch(error => console.log(error))

      }

      bringSearchedMovies()
    }

  }, [state])

  const selectMovie = (movie) => {
    SetAuth("movie", movie)
    navigate("/moviedetail")
  }

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
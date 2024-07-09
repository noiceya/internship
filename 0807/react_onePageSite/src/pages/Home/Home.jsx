import { useState, useEffect, useContext } from "react";
import { bringMovies, searchMovieCriteria } from "../../services/api-calls";
import { myContext } from "../../app/context";
import { useNavigate } from "react-router-dom";
import "./Home.css";

//React Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import { CCard } from "../../common/CCard/CCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const { state, SetAuth } = useContext(myContext);
  const navigate = useNavigate();

  const getMovies = async () => {
    bringMovies()
      .then((res) => {
        setMovies(res.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (movies.length === 0) {
      getMovies();
    }

    console.log(movies);
  }, [movies]);

  useEffect(() => {
    if (state.global.search !== "") {
      const bringSearchedMovies = async () => {
        searchMovieCriteria(state.global.search)
          .then((res) => {
            setMovies(res.results);
          })
          .catch((error) => console.log(error));
      };
      const bring = setTimeout(() => {
        bringSearchedMovies();
      }, 275);

      return () => clearTimeout(bring);
    } else if (state.global.search === "") {
      getMovies();
    }
  }, [state]);

  const selectMovie = (movie) => {
    SetAuth("movie", movie);
    navigate("/moviedetail");
  };

  return (
    <div className="home-design">
      {movies.length > 0 ? (
        //I have got the movies
        <Container>
          <Row>
            {movies.map((movie) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={movie.id}>
                  <div className="card-container" onClick={() => selectMovie(movie)}>
                    <CCard className="ccard" movie={movie} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
        <div id="load">LOADING.......</div>
      )}
    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { Answer, Champion } from "../../interfaces";
import bringCats from "../../services/api-calls";
import "./Home.css";

function Home() {
  const [characters, setCharacters] = useState<Champion[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>("");

  useEffect(() => {
    if (characters.length === 0) {
      const fetchData = async (): Promise<void> => {
        try {
          const fetched: Answer = await bringCats();
  
          if (fetched.success && fetched.data.leagueData) {
            setFlag(true);
            setCharacters(Object.values(fetched.data.leagueData.data)); // Assuming data is an object with champions as values
          } else {
            setMsgError(fetched.message);
          }
        } catch (error: any) {
          setMsgError(error.message);
        }
      };
  
      if (!flag) {
        fetchData();
      }
    }
  }, [characters, flag]);

  return (
    <div className="container">
      <div className="card-columns">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div key={character.id} className="card">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${character.id}_0.jpg`}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.title}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      {msgError && <div className="alert alert-danger mt-3">{msgError}</div>}
    </div>
  );
}

export default Home;

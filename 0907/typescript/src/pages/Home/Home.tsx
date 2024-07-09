import { useEffect, useState } from "react";
import { Answer, CharacterResult } from "../../interfaces";
import bringCharacters from "../../services/api-calls";
import "./Home.css";

function Home() {
  const [characters, setCharacters] = useState<CharacterResult[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [msgError, setMsgError] = useState<string>("");

  useEffect(() => {
    if (characters?.length === 0) {
      const fetchDataRickMorty = async (): Promise<any> => {
        const fetched: Answer = await bringCharacters();

        if (fetched.success) {
          setFlag(true);
          setCharacters(fetched.data.results);
        } else {
          setMsgError(fetched.message);
        }
      };

      if (!flag) {
        fetchDataRickMorty();
      }
    }
  }, [characters, flag]);

  return (
    <>
      {characters?.length > 0 ? (
        <div className="characters-container">
          {characters.slice(0, 6).map((character) => {
            return (
              <div key={character.id} className="character-card">
                <img src={character.image} alt={character.name} className="character-image" />
                <div className="character-name">{character.name}</div>
                <div className="character-species">{character.species}</div>
                <div className="character-type">{character.type}</div>
                <div className="character-gender">{character.gender}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="error-message">{msgError}</div>
      )}
    </>
  );
}

export default Home;

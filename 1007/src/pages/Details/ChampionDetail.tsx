import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Champion, Answer } from "../../interfaces";
import "./ChampionDetail.css";

const championApiRoot: string = "https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/";

function ChampionDetail() {
  const { id } = useParams<{ id?: string }>();
  const [champion, setChampion] = useState<Champion | null>(null);
  const [msgError, setMsgError] = useState<string>("");

  useEffect(() => {
    const fetchChampionDetail = async () => {
      try {
        if (id) {
          const response = await fetch(`${championApiRoot}champion/${id}.json`);
          if (!response.ok) {
            throw new Error(`Error ${response.status}: Problem encountered retrieving champion data`);
          }
          const data: Answer = await response.json();

          if (!data.success || !data.data || !data.data.leagueData || !data.data.leagueData.data) {
            throw new Error(`Invalid data structure received`);
          }

          const championsData = data.data.leagueData.data;
          if (id in championsData) {
            setChampion(championsData[id]);
          } else {
            throw new Error(`Champion with id ${id} not found`);
          }
        }
      } catch (error: any) {
        setMsgError(error.message);
      }
    };

    fetchChampionDetail();
  }, [id]);

  if (msgError) {
    return <div className="error-message">{msgError}</div>;
  }

  if (!champion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="champion-detail-container">
      <h2>{champion.name}</h2>
      <h3>{champion.title}</h3>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        alt={champion.name}
        className="champion-image"
      />
      <p>{champion.blurb}</p>
    </div>
  );
}

export default ChampionDetail;

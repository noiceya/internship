// services/api-calls.ts
import { Answer, LeagueData } from "../interfaces";

const leagueApiRoot: string = "https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/";

async function bringChampions(): Promise<Answer> {
  try {
    const response = await fetch(`${leagueApiRoot}champion.json`);

    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: Problem encountered retrieving League of Legends data`
      );
    }

    const leagueData: LeagueData = await response.json();
    console.log(leagueData);
    const data: Answer = {
      message: "Data properly fetched",
      success: true,
      data: {
        leagueData
      }
    };

    return data;
  } catch (error: any) {
    const errorAnswer: Answer = {
      message: error.message,
      success: false,
      data: {
        leagueData: {
          type: '',
          format: '',
          version: '',
          data: {}
        }
      },
    };

    return errorAnswer;
  }
}

export default bringChampions;

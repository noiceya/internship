// interfaces.ts

export interface Champion {
  id: string;
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
  };
}

export interface LeagueData {
  type: string;
  format: string;
  version: string;
  data: { [key: string]: Champion };
}

export interface Answer {
  message: string;
  success: boolean;
  data: {
    leagueData?: LeagueData;
  };
}

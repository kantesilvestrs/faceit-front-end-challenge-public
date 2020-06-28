export type TournamentGamesType =
  | 'Counter-Strike: Global Offensive'
  | 'Dota 2'
  | 'Rocket League'
  | 'Battalion 1944'
  | 'League of Legends';

export interface ITournamentResponse {
  id: string;
  name: string;
  organizer: string;
  game: TournamentGamesType;
  participants: {
    current: number;
    max: number;
  };
  startDate: string;
}

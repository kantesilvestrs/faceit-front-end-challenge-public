import { AnyAction } from 'redux';
import { ITournamentResponse } from '../../core/api/responseTypes';

export enum TournamentActionTypes {
  INITIALIZE_TOURNAMENTS = '[TOURNAMENTS_MODULE][TOURNAMENTS] Initialize tournaments state',
  INITIALIZE_TOURNAMENTS_SUCCESS = '[TOURNAMENTS_MODULE][TOURNAMENTS] Successfully initialized tournament state',
  INITIALIZE_TOURNAMENTS_ERROR = '[TOURNAMENTS_MODULE][TOURNAMENTS] Failed to initialize tournament state'
}

export class InitializeTournaments implements AnyAction {
  public readonly type = TournamentActionTypes.INITIALIZE_TOURNAMENTS;
}

export class InitializeTournamentsSuccess implements AnyAction {
  public readonly type = TournamentActionTypes.INITIALIZE_TOURNAMENTS_SUCCESS;
  constructor(
    public payload: {
      tournaments: Array<ITournamentResponse>;
    }
  ) {}
}

export class InitializeTournamentsError implements AnyAction {
  public readonly type = TournamentActionTypes.INITIALIZE_TOURNAMENTS_ERROR;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export type TournamentActions =
  | InitializeTournaments
  | InitializeTournamentsSuccess
  | InitializeTournamentsError;

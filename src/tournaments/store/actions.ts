import { AnyAction } from 'redux';
import { ITournamentResponse } from '../../core/api/responseTypes';
import { IGetTournamentsQuery } from '../../core/api/api';

export enum TournamentActionTypes {
  INITIALIZE_TOURNAMENTS = '[TOURNAMENTS_MODULE][TOURNAMENTS] Initialize tournaments state',
  INITIALIZE_TOURNAMENTS_SUCCESS = '[TOURNAMENTS_MODULE][TOURNAMENTS] Successfully initialized tournament state',
  INITIALIZE_TOURNAMENTS_ERROR = '[TOURNAMENTS_MODULE][TOURNAMENTS] Failed to initialize tournament state',
  SEARCH_TOURNAMENTS = '[TOURNAMENTS_MODULE][TOURNAMENTS] New search request for tournaments',
  SEARCH_TOURNAMENTS_SUCCESS = '[TOURNAMENTS_MODULE][TOURNAMENTS] Successfully searched tournaments',
  SEARCH_TOURNAMENTS_ERROR = '[TOURNAMENTS_MODULE][TOURNAMENTS] Failed to search tournaments',
  CREATE_NEW_TOURNAMENT = '[TOURNAMENTS_MODULE][TOURNAMENTS] Create new tournament',
  CREATE_NEW_TOURNAMENT_SUCCESS = '[TOURNAMENTS_MODULE][TOURNAMENTS] Successfully created new tournament',
  CREATE_NEW_TOURNAMENT_ERROR = '[TOURNAMENTS_MODULE][TOURNAMENTS] Failed to create new tournament',
  DELETE_TOURNAMENT = '[TOURNAMENTS_MODULE][TOURNAMENTS] Delete existing tournament',
  DELETE_TOURNAMENT_SUCCESS = '[TOURNAMENTS_MODULE][TOURNAMENTS] Successfully delete tournament',
  DELETE_TOURNAMENT_ERROR = '[TOURNAMENTS_MODULE][TOURNAMENTS] Failed to delete tournament'
}

export class DeleteTournament implements AnyAction {
  public readonly type = TournamentActionTypes.DELETE_TOURNAMENT;
  constructor(
    public payload: {
      tournamentId: string;
    }
  ) {}
}

export class DeleteTournamentSuccess implements AnyAction {
  public readonly type = TournamentActionTypes.DELETE_TOURNAMENT_SUCCESS;
}

export class DeleteTournamentError implements AnyAction {
  public readonly type = TournamentActionTypes.DELETE_TOURNAMENT_ERROR;
}

export class CreateNewTournament implements AnyAction {
  public readonly type = TournamentActionTypes.CREATE_NEW_TOURNAMENT;
  constructor(
    public payload: {
      name: string;
    }
  ) {}
}

export class CreateNewTournamentSuccess implements AnyAction {
  public readonly type = TournamentActionTypes.CREATE_NEW_TOURNAMENT_SUCCESS;
}

export class CreateNewTournamentError implements AnyAction {
  public readonly type = TournamentActionTypes.CREATE_NEW_TOURNAMENT_ERROR;
}

export class SearchTournaments implements AnyAction {
  public readonly type = TournamentActionTypes.SEARCH_TOURNAMENTS;
  constructor(
    public payload: {
      query: IGetTournamentsQuery;
    }
  ) {}
}

export class SearchTournamentsSuccess implements AnyAction {
  public readonly type = TournamentActionTypes.SEARCH_TOURNAMENTS_SUCCESS;
  constructor(
    public payload: {
      tournaments: Array<ITournamentResponse>;
    }
  ) {}
}

export class SearchTournamentsError implements AnyAction {
  public readonly type = TournamentActionTypes.SEARCH_TOURNAMENTS_ERROR;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
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
  | InitializeTournamentsError
  | SearchTournaments
  | SearchTournamentsSuccess
  | SearchTournamentsError
  | CreateNewTournament
  | CreateNewTournamentSuccess
  | CreateNewTournamentError
  | DeleteTournament
  | DeleteTournamentSuccess
  | DeleteTournamentError;

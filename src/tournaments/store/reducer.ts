import { TournamentActions, TournamentActionTypes } from './actions';
import { ITournamentResponse } from '../../core/api/responseTypes';

export class TournamentsState {
  tournaments: Array<ITournamentResponse> = [];
  error: string | null = null;
  fetching: boolean = false;
  deleting: boolean = false;
  updating: boolean = false;
}

const initialState = { ...new TournamentsState() };

export function tournamentsReducer(
  state: TournamentsState = initialState,
  action: TournamentActions
): TournamentsState {
  switch (action.type) {
    case TournamentActionTypes.SEARCH_TOURNAMENTS: {
      return {
        ...state,
        fetching: true,
        tournaments: []
      };
    }

    case TournamentActionTypes.SEARCH_TOURNAMENTS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        error: null,
        tournaments: action.payload.tournaments
      };
    }

    case TournamentActionTypes.SEARCH_TOURNAMENTS_ERROR: {
      return {
        ...state,
        fetching: false,
        error: action.payload.error
      };
    }

    case TournamentActionTypes.INITIALIZE_TOURNAMENTS: {
      return {
        ...state,
        fetching: true
      };
    }

    case TournamentActionTypes.INITIALIZE_TOURNAMENTS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        error: null,
        tournaments: action.payload.tournaments
      };
    }

    case TournamentActionTypes.INITIALIZE_TOURNAMENTS_ERROR: {
      return {
        ...state,
        fetching: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}

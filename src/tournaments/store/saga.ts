import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import {
  TournamentActionTypes,
  InitializeTournamentsSuccess,
  InitializeTournamentsError,
  SearchTournamentsError,
  SearchTournaments,
  SearchTournamentsSuccess,
  CreateNewTournament,
  CreateNewTournamentError,
  CreateNewTournamentSuccess,
  DeleteTournament,
  DeleteTournamentError,
  DeleteTournamentSuccess
} from './actions';
import { log } from '../../core/utils/logging/logService';
import { API } from '../../core/api/api';
import { AxiosResponse } from 'axios';
import { ITournamentResponse } from '../../core/api/responseTypes';
import { DEFAULT_PAGE_SIZE } from '../constants/api';

function* deleteTournament(action: DeleteTournament) {
  try {
    const reponse = yield call(
      API.deleteTournament,
      action.payload.tournamentId
    );
    yield put({ ...new DeleteTournamentSuccess() });
  } catch (e) {
    yield put({ ...new DeleteTournamentError() });
    log.error(e);
  }
}

function* createNewTournament(action: CreateNewTournament) {
  try {
    const reponse = yield call(API.createTournament, action.payload.name);
    yield put({ ...new CreateNewTournamentSuccess() });
  } catch (e) {
    yield put({ ...new CreateNewTournamentError() });
    log.error(e);
  }
}

function* searchTournaments(action: SearchTournaments) {
  try {
    const response: AxiosResponse<Array<ITournamentResponse>> = yield call(
      API.getTournaments,
      action.payload.query
    );
    yield put({
      ...new SearchTournamentsSuccess({
        tournaments: response.data
      })
    });
  } catch (e) {
    yield put({ ...new SearchTournamentsError({ error: e }) });
    log.error(e);
  }
}

function* initializeTournaments() {
  try {
    const response: AxiosResponse<Array<
      ITournamentResponse
    >> = yield call(API.getTournaments, { page: 1, limit: DEFAULT_PAGE_SIZE });
    yield put({
      ...new InitializeTournamentsSuccess({
        tournaments: response.data
      })
    });
  } catch (e) {
    yield put({ ...new InitializeTournamentsError({ error: e }) });
    log.error(e);
  }
}

export function* tournamentsSaga() {
  yield takeEvery(
    TournamentActionTypes.INITIALIZE_TOURNAMENTS,
    initializeTournaments
  );
  yield takeLatest(TournamentActionTypes.SEARCH_TOURNAMENTS, searchTournaments);
  yield takeEvery(
    TournamentActionTypes.CREATE_NEW_TOURNAMENT,
    createNewTournament
  );
  yield takeEvery(TournamentActionTypes.DELETE_TOURNAMENT, deleteTournament);
}

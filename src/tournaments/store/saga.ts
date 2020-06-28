import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import {
  TournamentActionTypes,
  InitializeTournamentsSuccess,
  InitializeTournamentsError,
  SearchTournamentsError,
  SearchTournaments,
  SearchTournamentsSuccess
} from './actions';
import { log } from '../../core/utils/logging/logService';
import { API } from '../../core/api/api';
import { AxiosResponse } from 'axios';
import { ITournamentResponse } from '../../core/api/responseTypes';
import { DEFAULT_PAGE_SIZE } from '../constants/api';

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
}

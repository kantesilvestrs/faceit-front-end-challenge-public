import { takeEvery, call, put } from 'redux-saga/effects';
import {
  TournamentActionTypes,
  InitializeTournamentsSuccess,
  InitializeTournamentsError
} from './actions';
import { log } from '../../core/utils/logging/logService';
import { API } from '../../core/api/api';
import { AxiosResponse } from 'axios';
import { ITournamentResponse } from '../../core/api/responseTypes';
import { DEFAULT_PAGE_SIZE } from '../constants/api';

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
}

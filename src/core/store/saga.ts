import { takeEvery, put } from 'redux-saga/effects';
import { ApplicationActionType, InitializeApplicationSuccess } from './actions';
import { log } from '../utils/logging/logService';

function* initializeApplication() {
  try {
    yield put({ ...new InitializeApplicationSuccess() });
  } catch (e) {
    log.error(e);
  }
}

export function* applicationSaga() {
  yield takeEvery(
    ApplicationActionType.INITIALIZE_APPLICATION,
    initializeApplication
  );
}

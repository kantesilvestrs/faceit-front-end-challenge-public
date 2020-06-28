import { ISagaModule } from 'redux-dynamic-modules-saga';
import { MODULE_NAME } from '..';
import { TournamentsState, tournamentsReducer } from './reducer';
import { InitializeTournaments } from './actions';
import { tournamentsSaga } from './saga';

interface TournamentsStoreModule {
  TOURNAMENTS: TournamentsState;
}

export function getTournamentsStoreModule(): ISagaModule<
  TournamentsStoreModule
> {
  return {
    id: MODULE_NAME,
    reducerMap: {
      TOURNAMENTS: tournamentsReducer
    },
    initialActions: [{ ...new InitializeTournaments() }],
    sagas: [tournamentsSaga]
  };
}

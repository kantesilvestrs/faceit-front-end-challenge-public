import { MODULE_NAME } from '../constants/module';
import { ISagaModule } from 'redux-dynamic-modules-saga';
import { applicationReducer, ApplicationState } from './reducer';
import { InitializeApplication } from './actions';
import { applicationSaga } from './saga';

export interface ICoreApplicationModule {
  APPLICATION_STATE: ApplicationState;
}

export function getCoreApplicationStoreModule(): ISagaModule<
  ICoreApplicationModule
> {
  return {
    id: MODULE_NAME,
    reducerMap: {
      APPLICATION_STATE: applicationReducer
    },
    initialActions: [{ ...new InitializeApplication() }],
    sagas: [applicationSaga]
  };
}

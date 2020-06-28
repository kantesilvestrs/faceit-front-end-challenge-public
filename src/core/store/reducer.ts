import { ApplicationActions, ApplicationActionType } from './actions';

export class ApplicationState {
  initialized: boolean = false;
  error: string | null = null;
}

const initApplicationState = { ...new ApplicationState() };

export const applicationReducer = (
  state: ApplicationState = initApplicationState,
  action: ApplicationActions
): ApplicationState => {
  switch (action.type) {
    case ApplicationActionType.INITIALIZE_APPLICATION_SUCCESS: {
      return {
        ...state,
        initialized: true,
        error: null
      };
    }

    case ApplicationActionType.INITIALIZE_APPLICATION_ERROR: {
      return {
        ...state,
        initialized: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
};

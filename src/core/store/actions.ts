import { AnyAction } from 'redux';

export enum ApplicationActionType {
  INITIALIZE_APPLICATION = '[CORE_APPLICATION_MODULE][APPLICATION] Start initializing application',
  INITIALIZE_APPLICATION_SUCCESS = '[CORE_APPLICATION_MODULE][APPLICATION] Successfully initialized application',
  INITIALIZE_APPLICATION_ERROR = '[CORE_APPLICATION_MODULE][APPLICATION] Failed to initialize application'
}

export class InitializeApplication implements AnyAction {
  public readonly type = ApplicationActionType.INITIALIZE_APPLICATION;
}

export class InitializeApplicationSuccess implements AnyAction {
  public readonly type = ApplicationActionType.INITIALIZE_APPLICATION_SUCCESS;
}

export class InitializeApplicationError implements AnyAction {
  public readonly type = ApplicationActionType.INITIALIZE_APPLICATION_ERROR;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export type ApplicationActions =
  | InitializeApplication
  | InitializeApplicationSuccess
  | InitializeApplicationError;

import { AnyAction } from 'redux';

class TournamentsState {}

const initialState = { ...new TournamentsState() };

export function tournamentsReducer(
  state: TournamentsState = initialState,
  action: AnyAction
): TournamentsState {
  return state;
}

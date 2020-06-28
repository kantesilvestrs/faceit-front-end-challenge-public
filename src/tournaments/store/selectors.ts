import { TournamentsStoreModule } from './storeModule';

/**
 * Returns current list of tournaments retrieved from API
 *
 * @export
 * @param {TournamentsStoreModule} state
 * @returns
 */
export function getCurrentTournamentList(state: TournamentsStoreModule) {
  return state.TOURNAMENTS.tournaments;
}

/**
 * Get current fetch status for tournament list
 *
 * @export
 * @param {TournamentsStoreModule} state
 * @returns
 */
export function getTournamentFetchStatus(state: TournamentsStoreModule) {
  return state.TOURNAMENTS.fetching;
}

/**
 * Get error message
 *
 * @export
 * @param {TournamentsStoreModule} state
 * @returns
 */
export function getTournamentError(state: TournamentsStoreModule) {
  return state.TOURNAMENTS.error;
}

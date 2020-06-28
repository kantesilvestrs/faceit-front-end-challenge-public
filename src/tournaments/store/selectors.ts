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

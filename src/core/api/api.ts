import axios from 'axios';
import { ITournamentResponse } from './responseTypes';
import { API_TOURNAMENTS_URL } from '../constants/api';

export interface IGetTournamentsQuery {
  name?: string;
  page?: number;
  limit?: number;
}

export class API {
  /**
   * Get latest tournaments from API
   *
   * @static
   * @param {IGetTournamentsQuery} query - Filtering and pagination
   * @returns
   * @memberof API
   */
  public static getTournaments(query: IGetTournamentsQuery) {
    const queryBuilder = [];

    if (query.name) {
      queryBuilder.push(`name_like=${query.name}`);
    }

    if (query.page) {
      queryBuilder.push(`_page=${query.page}`);
    }

    if (query.limit) {
      queryBuilder.push(`_limit=${query.limit}`);
    }

    const requestQuery =
      queryBuilder.length > 0 ? `?${queryBuilder.join('&')}` : '';

    return axios.get<Array<ITournamentResponse>>(
      `${API_TOURNAMENTS_URL}${requestQuery}`
    );
  }

  /**
   * Delete specific tournament
   *
   * @static
   * @param {string} id - Tournament id
   * @returns
   * @memberof API
   */
  public static deleteTournament(id: string) {
    return axios.delete(`${API_TOURNAMENTS_URL}/${id}`);
  }

  /**
   * Create a new tournament
   *
   * @static
   * @param {string} name - Tournament name
   * @returns
   * @memberof API
   */
  public static createTournament(name: string) {
    return axios.post(`${API_TOURNAMENTS_URL}`, { name });
  }
}

import axios from 'axios';
import { ITournamentResponse } from './responseTypes';
import { API_BASE_URL } from '../constants/api';

interface IGetTournamentsQuery {
  name?: string;
  page?: number;
  limit?: number;
}

export class API {
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
      `${API_BASE_URL}/tournaments${requestQuery}`
    );
  }
}

import React, { useState, useCallback, useEffect } from 'react';
import { Button, PageContainer, PageRow, Input } from '../../ui/components';
import { TournamentsList } from './TournamentsList';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import {
  SearchTournaments,
  DeleteTournament,
  CreateNewTournament,
  UpdateTournament
} from '../store';
import { DEFAULT_PAGE_SIZE } from '../constants/api';

export const TournamentsContainer = () => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const dispatch = useDispatch();

  const searchTournaments = useCallback(
    (name: string) => {
      dispatch({
        ...new SearchTournaments({
          query: {
            name,
            page: 1,
            limit: DEFAULT_PAGE_SIZE
          }
        })
      });
    },
    [dispatch]
  );

  const handleItemEdit = useCallback(
    (id: string, name: string) => {
      const tournamentName = window.prompt('Tournament Name:', name);

      if (tournamentName !== null && tournamentName !== '') {
        dispatch({
          ...new UpdateTournament({
            id,
            name: tournamentName
          })
        });
      }
    },
    [dispatch]
  );

  const handleItemDelete = useCallback(
    (tournamentId: string) => {
      if (window.confirm('Do you really want to delete this tournament?')) {
        dispatch({
          ...new DeleteTournament({
            tournamentId
          })
        });
      }
    },
    [dispatch]
  );

  const handleItemCreate = useCallback(() => {
    const tournamentName = window.prompt('Tournament Name:');

    if (tournamentName !== null && tournamentName !== '') {
      dispatch({
        ...new CreateNewTournament({
          name: tournamentName
        })
      });
    }
  }, [dispatch]);

  const handleSearchInputOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInputValue(e.target.value);
    },
    []
  );

  const handleSearchFilterChange = useCallback(
    debounce((searchFilter: string) => {
      searchTournaments(searchFilter);
    }, 300),
    [searchTournaments]
  );

  const handleRetrySearch = useCallback(() => {
    searchTournaments(searchInputValue);
  }, [searchTournaments, searchInputValue]);

  useEffect(() => {
    handleSearchFilterChange(searchInputValue);
  }, [searchInputValue, handleSearchFilterChange]);

  return (
    <PageContainer>
      <PageRow>
        <Input
          placeholder="Search tournament..."
          value={searchInputValue}
          onChange={handleSearchInputOnChange}
        />
        <Button onClick={handleItemCreate}>Create Tournament</Button>
      </PageRow>
      <PageRow>
        <TournamentsList
          onRetry={handleRetrySearch}
          handleItemDelete={handleItemDelete}
          handleItemEdit={handleItemEdit}
        />
      </PageRow>
    </PageContainer>
  );
};

import React, { useState, useCallback, useEffect } from 'react';
import { Button, PageContainer, PageRow, Input } from '../../ui/components';
import { TournamentsList } from './TournamentsList';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { SearchTournaments } from '../store';
import { DEFAULT_PAGE_SIZE } from '../constants/api';
//import { IGetTournamentsQuery } from '../../core/api/api';

export const TournamentsContainer = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  //const [query, setQuery] = useState<IGetTournamentsQuery>({});

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
        <Button>Create Tournament</Button>
      </PageRow>
      <PageRow>
        <TournamentsList />
      </PageRow>
    </PageContainer>
  );
};

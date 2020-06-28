import React from 'react';
import { SearchBar } from './SearchBar';
import { Button, PageContainer, PageRow } from '../../ui/components';
import { TournamentsList } from './TournamentsList';

export const TournamentsContainer = () => (
  <PageContainer>
    <PageRow>
      <SearchBar />
      <Button>Create Tournament</Button>
    </PageRow>
    <PageRow>
      <TournamentsList />
    </PageRow>
  </PageContainer>
);

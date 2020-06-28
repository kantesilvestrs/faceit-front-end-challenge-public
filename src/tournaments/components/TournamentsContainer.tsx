import React from 'react';
import { SearchBar } from './SearchBar';
import { Button, PageContainer, PageRow } from '../../ui/components';

export const TournamentsContainer = () => (
  <PageContainer>
    <PageRow>
      <SearchBar />
      <Button>Create Tournament</Button>
    </PageRow>
    <PageRow>Tournaments...</PageRow>
  </PageContainer>
);

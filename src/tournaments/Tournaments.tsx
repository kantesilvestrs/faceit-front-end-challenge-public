import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getTournamentsStoreModule } from './store';
import { TournamentsContainer } from './components/TournamentsContainer';

const TournamentsWrapper = () => (
  // Load tournament store only when TournamentWrapper component is loaded
  <DynamicModuleLoader modules={[getTournamentsStoreModule()]}>
    <TournamentsContainer />
  </DynamicModuleLoader>
);

export default TournamentsWrapper;

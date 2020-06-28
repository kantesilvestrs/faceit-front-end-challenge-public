import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getTournamentsStoreModule } from './store';

const Tournaments = () => (
  <DynamicModuleLoader modules={[getTournamentsStoreModule()]}>
    hmmm...
  </DynamicModuleLoader>
);

export default Tournaments;

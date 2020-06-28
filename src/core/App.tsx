import React from 'react';
import { Container, H4 } from '../ui/components';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { store } from './store';
import { theme } from '../ui/theme/theme';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getCoreApplicationStoreModule } from './store/storeModule';

const coreApplicationModule = getCoreApplicationStoreModule();

const App = () => (
  <DynamicModuleLoader modules={[coreApplicationModule]}>
    <Container>
      <H4>FACEIT Tournaments</H4>
    </Container>
  </DynamicModuleLoader>
);

const AppWrapper = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);

export { AppWrapper as App };

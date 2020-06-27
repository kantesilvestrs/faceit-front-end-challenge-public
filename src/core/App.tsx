import React from 'react';
import { Container, H4 } from '../ui/components';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { store } from './store';
import { theme } from '../ui/theme/theme';

const App = () => (
  <Container>
    <H4>FACEIT Tournaments</H4>
  </Container>
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

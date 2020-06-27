import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './ui/GlobalStyle';
import { store } from './core/store';
import { Container } from './ui/components';
import { H4 } from './ui/components';
import { ThemeProvider } from 'styled-components';
import theme from './ui/theme/theme';

const App: React.FC = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
    </Container>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

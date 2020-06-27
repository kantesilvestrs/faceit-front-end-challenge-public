import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './ui/GlobalStyle';
import { store } from './core/store';
import { ThemeProvider } from 'styled-components';
import theme from './ui/theme/theme';
import { App } from './core/App';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

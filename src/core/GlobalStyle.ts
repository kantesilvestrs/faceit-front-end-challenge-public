import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  body {
    font-family: 'Play';
    background: ${({ theme }) => theme.palette.background.body};
    color: ${({ theme }) => theme.palette.text.primary};
    ${({ theme }) => theme.typography.body};
  }
`;

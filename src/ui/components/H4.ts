import styled from 'styled-components';
import theme from '../theme/theme';

interface H4Props {
  spacing?: number;
}

const H4 = styled.h4<H4Props>`
  ${theme.typography.h4};
  margin: 0;
  margin-bottom: ${({ spacing = 6, theme }) => theme.spacing(spacing)};
`;

export default H4;

import styled from 'styled-components';
import theme from '../theme/theme';

interface H6Props {
  spacing?: number;
}

const H6 = styled.h6<H6Props>`
  ${theme.typography.h6};
  margin: 0;
  margin-bottom: ${({ spacing = 4, theme }) => theme.spacing(spacing)};
`;

export default H6;

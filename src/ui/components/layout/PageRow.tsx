import styled from 'styled-components';
import Row from './Row';

interface PageRowProps {
  spacing?: number;
}

const PageRow = styled(Row)<PageRowProps>`
  justify-content: space-between;
  margin-bottom: ${({ spacing = 6, theme }) => theme.spacing(spacing)};
`;

export default PageRow;

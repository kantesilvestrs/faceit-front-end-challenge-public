import styled from 'styled-components';

interface ContainerProps {
  spacing?: number;
}

const Container = styled.div<ContainerProps>`
  max-width: 960px;
  margin-top: ${({ spacing = 6, theme }) => theme.spacing(spacing)};
  margin-left: auto;
  margin-right: auto;
`;

export default Container;

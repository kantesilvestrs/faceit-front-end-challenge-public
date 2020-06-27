import styled from 'styled-components';

interface ButtonProps {
  spacing?: number;
}

const Button = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.typography.button};

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.secondary.light};
    color: ${({ theme }) => theme.palette.primary.light};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.palette.secondary.dark};
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export default Button;

import styled from 'styled-components';

interface InputProps {
  spacing?: number;
}

const Input = styled.input<InputProps>`
  background: ${({ theme }) => theme.palette.background.base};
  padding: ${({ spacing = 2, theme }) => theme.spacing(spacing)};
  border: none;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export default Input;

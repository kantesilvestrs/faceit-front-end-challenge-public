import styled from 'styled-components';
import theme from '../theme/theme';

interface InputProps {
  spacing?: number;
}

const Input = styled.input<InputProps>`
  background: ${theme.palette.background.base};
  padding: ${({ spacing = 2, theme }) => theme.spacing(spacing)};
  border: none;
  color: ${theme.palette.text.primary};
`;

export default Input;

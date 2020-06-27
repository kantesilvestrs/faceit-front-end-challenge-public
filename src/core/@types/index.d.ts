import { Theme } from '../../ui/theme/theme.interface';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

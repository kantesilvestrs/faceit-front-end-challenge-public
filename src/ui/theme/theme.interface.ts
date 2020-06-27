export interface Theme {
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
    };
    attention: {
      main: string;
      light: string;
      dark: string;
    };
    background: {
      body: string;
      base: string;
      alt1: string;
      alt2: string;
    };
    text: {
      primary: string;
    };
  };
  spacing: (multiplier: number) => string;
  typography: Record<
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'button',
    { [k: string]: string }
  >;
}

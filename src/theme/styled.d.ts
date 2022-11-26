import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      basicWhite: string;
      basicLight: string;
      basicDark: string;
      basicDarkRGB: string;
      basicGrey: string;
      basicBlue: string;
      specialBlue: string;
      specialPink: string;
    };
  }
}
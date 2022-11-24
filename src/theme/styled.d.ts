import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      basicLight: string;
      basicDark: string;
      basicDarkRGB: string;
    };
  }
}
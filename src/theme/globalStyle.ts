import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    background-color: ${({ theme }) => theme.color.basicLight};
    color: ${({ theme }) => theme.color.basicDark};
  }
`;

export default GlobalStyle;

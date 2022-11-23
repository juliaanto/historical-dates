import GlobalStyle from './theme/globalStyle';
import Main from './components/main/main';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
}

export default App;

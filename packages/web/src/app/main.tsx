import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import 'jest-styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Main: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <main>
      <GlobalStyle />
      {children}
    </main>
  </ThemeProvider>
);

export default Main;

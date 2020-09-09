import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  * {
    font-family: "Poppins";
  }
  ::placeholder {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    color: #b6b6b6;
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

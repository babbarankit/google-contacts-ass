import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  * {
    font-family: "Poppins";
    letter-spacing: 0.08em;
  }
  ::placeholder {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #b6b6b6;
  }
`;

const Main: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <section>
      <GlobalStyle />
      {children}
    </section>
  </ThemeProvider>
);

export default Main;

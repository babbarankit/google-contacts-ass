import styled from 'styled-components';
import Main from './Main';
import { renderToStaticMarkup } from 'react-dom/server';
import SvgBackground from './SvgBackground';

const Section = styled.section<{ bgImgSrc: string; bgColor: string }>`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  font-family: 'Poppins';
  background: ${(props) => props.bgColor};
  background-image: ${(props) => props.bgImgSrc};
`;

const App: React.SFC<{ bgColor: string }> = ({ children, bgColor }) => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<SvgBackground />));
  const bgImgSrc = `url("data:image/svg+xml,${svgString}")`;
  return (
    <Main>
      <Section bgImgSrc={bgImgSrc} bgColor={bgColor}>
        {children}
      </Section>
    </Main>
  );
};

export default App;

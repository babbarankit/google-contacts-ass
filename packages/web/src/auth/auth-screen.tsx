import Main from '../app/Main';
import styled from 'styled-components';
import SvgBackground from './SvgBackground';
import { renderToStaticMarkup } from 'react-dom/server';

const Wrapper = styled.section`
  background: #eff7f9;

  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

export const AuthScreen = () => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<SvgBackground />));
  const dataUri = `url("data:image/svg+xml,${svgString}")`;
  return (
    <Main>
      <Wrapper style={{ backgroundImage: dataUri }}></Wrapper>
    </Main>
  );
};

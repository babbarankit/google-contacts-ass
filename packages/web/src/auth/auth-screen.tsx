import Main from '../app/Main';
import styled from 'styled-components';
import SvgBackground from '../app/SvgBackground';
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../app/App';

const Wrapper = styled.div`
  background: #eff7f9;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const AuthScreen = () => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<SvgBackground />));
  const dataUri = `url("data:image/svg+xml,${svgString}")`;
  return (
    <Main>
      <App>
        <Wrapper style={{ backgroundImage: dataUri, background: '#eff7f9' }}></Wrapper>
      </App>
    </Main>
  );
};

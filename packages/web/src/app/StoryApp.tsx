import styled from 'styled-components';
import Main from './Main';
import { ToastContainer } from 'react-toastify';

const Section = styled.section`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  font-family: 'Poppins';
`;

const StoryApp: React.SFC = ({ children }) => {
  return (
    <Main>
      <ToastContainer />
      <Section>{children}</Section>
    </Main>
  );
};

export default StoryApp;

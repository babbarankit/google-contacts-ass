import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import googleIcon from '../assets/googleIcon';

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(5, 62, 209, 0.19);
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  margin: auto;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 450px) {
    width: fit-content;
  }
`;

const AuthForm = () => (
  <div style={{ height: '100%', display: 'flex', maxWidth: '90vw', margin: 'auto' }}>
    <Box>
      <div style={{ marginBottom: 12 }}>{googleIcon}</div>
      <div style={{ marginBottom: 48 }}>
        <p style={{ letterSpacing: '0.08em', fontWeight: 600, fontSize: 20 }}>Sign in with Google</p>
      </div>
      <div style={{ marginBottom: 24 }}>
        <Input placeholder='Email' />
      </div>
      <div style={{ marginBottom: 44 }}>
        <Input placeholder='Password' />
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </Box>
  </div>
);

export default AuthForm;

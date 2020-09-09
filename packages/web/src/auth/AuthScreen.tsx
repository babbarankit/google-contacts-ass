import Main from '../app/Main';
import App from '../app/App';
import AuthForm from './AuthForm';

export const AuthScreen = () => {
  return (
    <Main>
      <App bgColor='#eff7F9'>
        <AuthForm />
      </App>
    </Main>
  );
};

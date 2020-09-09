import Main from '../app/Main';
import App from '../app/App';
import AuthForm from './AuthForm';
let scopes = ['email', 'profile', 'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcontacts.readonly'].join('+');
let GoogleOAuth2Url = 'https://accounts.google.com/o/oauth2/v2/auth';

export const AuthScreen = () => {
  const REDIRECT_URL = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL;
  console.log(REDIRECT_URL);
  const GOOGLE_OAUTH2_CLIENT = process.env.NEXT_PUBLIC_GOOGLE_OAUTH2_CLIENT;
  return (
    <Main>
      <App bgColor='#eff7F9'>
        <AuthForm
          onClick={() => {
            let reqParams = [
              `redirect_uri=${REDIRECT_URL}`,
              'response_type=code',
              `client_id=${GOOGLE_OAUTH2_CLIENT}`,
              `scope=${scopes}`,
              'access_type=offline',
            ].join('&');
            const url = `${GoogleOAuth2Url}?${reqParams}`;
            console.log(url);
            window.location.assign(url);
          }}
        />
      </App>
    </Main>
  );
};

import App from '../app/App';
import AuthForm from './AuthForm';
import { useMutation } from '@apollo/client';
import { getGoogleOAuthUrl } from './graphql';
import { GetGoogleOAuthUrl } from './__generated__/GetGoogleOAuthUrl';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const AuthScreen: React.SFC<{ onLogin?: () => void }> = ({ onLogin }) => {
  useEffect(() => {
    toast.info('Directly Click on Sign In Button!', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }, []);
  const [mutation] = useMutation<GetGoogleOAuthUrl>(getGoogleOAuthUrl, {
    onCompleted: (result) => {
      toast.success('Redirecting!', {
        position: toast.POSITION.TOP_CENTER,
      });
      window.location.assign(result.getGoogleOAuthUrl);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <App bgColor='#eff7F9'>
      <AuthForm
        onClick={() => {
          mutation();
          onLogin && onLogin();
        }}
      />
    </App>
  );
};

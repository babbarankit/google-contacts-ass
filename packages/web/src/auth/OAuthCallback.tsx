import React, { FC, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { signInGoogle } from './graphql';
import { SignInGoogle, SignInGoogleVariables } from './__generated__/SignInGoogle';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import App from '../app/App';

const OAuth2Callback: FC = ({}) => {
  const router = useRouter();
  const [mutation] = useMutation<SignInGoogle, SignInGoogleVariables>(signInGoogle, {
    onCompleted: (result) => {
      if (result.signInGoogle) {
        toast.success('Yay. Logged In!', {
          position: toast.POSITION.TOP_CENTER,
        });
        router.replace('/');
      } else {
        toast.error('So Sorry!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    },
    onError: (error) => {
      //@TODO: Implement Error Display
      console.error('Op Not Succesful:', error.message);
      toast.error('So Sorry!', {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });
  useEffect(() => {
    const authCode = (window.location.search.match(/code=([^&]+)/) || [])[1];
    console.log(authCode);
    mutation({ variables: { authCode } });
  }, []);
  return <App bgColor='#fbfdfe'></App>;
};

export default OAuth2Callback;

import { gql } from '@apollo/client';

export const getGoogleOAuthUrl = gql`
  mutation GetGoogleOAuthUrl {
    getGoogleOAuthUrl
  }
`;

export const signInGoogle = gql`
  mutation SignInGoogle($authCode: String!) {
    signInGoogle(authCode: $authCode)
  }
`;

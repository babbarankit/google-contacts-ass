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

export const logout = gql`
  mutation Logout {
    logout
  }
`;

export const getViewer = gql`
  query GetViewer {
    getViewer {
      id
      name
      email
      phoneNo
      profileSrc
    }
  }
`;

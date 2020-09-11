import { gql } from '@apollo/client';

export const getContactRelationshipsConnection = gql`
  query GetContactRelationshipsConnection($limit: Int, $cursor: String) {
    getContactRelationshipsConnection(limit: $limit, cursor: $cursor) {
      total
      cursor
      edges {
        id
        name
        email
        phoneNo
        profileSrc
      }
    }
  }
`;

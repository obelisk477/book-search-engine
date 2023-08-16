import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($name: String!) {
    user(name: $name) {
      _id
      name
    }
  }
`;


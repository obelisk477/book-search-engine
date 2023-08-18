import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      name
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

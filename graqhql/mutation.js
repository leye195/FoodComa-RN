import { gql } from "apollo-boost";

export const SIGNUP = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      success
      user {
        _id
        email
        token
      }
    }
  }
`;

export const SIGNIN_BY_EMAIL = gql`
  mutation signInEmail($email: String!, $password: String!) {
    signInEmail(email: $email, password: $password) {
      success
      user {
        _id
        email
        token
      }
    }
  }
`;

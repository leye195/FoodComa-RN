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

export const SUBMIT_REVIEW = gql`
  mutation submitReview($uid: ID!, $fid: ID!, $content: String!, $rate: Int!) {
    submitReview(uid: $uid, fid: $fid, content: $content, rate: $rate)
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($fid: ID!) {
    deleteReview(fid: $fid)
  }
`;

export const LIKE_FOOD = gql`
  mutation likeFood($uid: ID!, $fid: ID!) {
    likeFood(uid: $uid, fid: $fid)
  }
`;

export const UPLOAD_PROFILE = gql`
  mutation uploadProfileImage($id: ID!, $file: String!) {
    uploadProfileImage(id: $id, file: $file)
  }
`;

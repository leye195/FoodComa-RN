import { gql } from "apollo-boost";

export const CURRENT_USER = gql`
  query currentUser {
    currentUser {
      _id
      email
      image
    }
  }
`;

export const GET_FOODS = gql`
  query getFoods($typeName: String!) {
    foods(type: $typeName) {
      _id
      name
      type
      imgUrl
      longitude
      latitude
      address
      rate
      avg_rate
      like {
        _id
      }
    }
  }
`;

export const GET_FOOD = gql`
  query getFood($id: ID!) {
    food(id: $id) {
      _id
      name
      imgUrl
      longitude
      latitude
      address
      rate
      avg_rate
      reviews {
        _id
        writer {
          email
        }
        content
        rate
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      name
    }
  }
`;

export const GET_SEARCH = gql`
  query getSearch($keyword: String!) {
    foods(keyword: $keyword) {
      _id
      name
      type
      imgUrl
      longitude
      latitude
      address
      rate
      avg_rate
      like {
        _id
      }
    }
  }
`;

export const USER_REVIEWS_AND_LIKE = gql`
  query userReviewsAndLike($uid: ID!) {
    userReviews(uid: $uid) {
      _id
      content
      rate
    }
    like(uid: $uid) {
      _id
      name
      imgUrl
      avg_rate
    }
  }
`;

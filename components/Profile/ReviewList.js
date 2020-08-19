import React from "react";
import styled from "styled-components";
import Review from "./Review";
import Empty from "../Review/Empty";

const Container = styled.View`
  min-height: 400px;
`;
const Cards = styled.View`
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
`;

const ReviewList = ({ reviews }) => {
  return (
    <Container>
      {reviews.length === 0 && <Empty text={"리뷰가 없습니다."} />}
      {reviews.length > 0 && (
        <Cards>
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </Cards>
      )}
    </Container>
  );
};
export default ReviewList;

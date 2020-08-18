import React from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import { GREY_COLOR } from "../../constants/color";

const Container = styled.View``;
const Card = styled.View``;

const ReviewList = ({ reviews }) => {
  return (
    <Container>
      <Card>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </Card>
    </Container>
  );
};
export default ReviewList;

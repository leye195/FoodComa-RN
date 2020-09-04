import React, { useState } from "react";
import styled from "styled-components";
import Review from "./Review";
import Empty from "../Review/Empty";
import ReviewModal from "./ReviewModal";
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
  const [isVisible, setIsVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});
  const toggleModal = (flag = true, review = {}) => {
    if (flag) {
      setSelectedReview(review);
    } else {
      setSelectedReview({});
    }
    setIsVisible(flag);
  };
  const handleDelete = () => {};
  const handleEdit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      {reviews.length === 0 && <Empty text={"리뷰가 없습니다."} />}
      {reviews.length > 0 && (
        <Cards>
          {reviews.map((review) => (
            <Review
              key={review._id}
              review={review}
              toggleModal={toggleModal}
            />
          ))}
        </Cards>
      )}
      <ReviewModal
        isVisible={isVisible}
        toggleModal={toggleModal}
        handleEdit={handleEdit}
        review={selectedReview}
      />
    </Container>
  );
};
export default ReviewList;

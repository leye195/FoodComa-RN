import React, { useState } from "react";
import ReviewPresenter from "./ReviewPresenter";

const ReviewContainer = ({ route: { params } }) => {
  const [foodId, setFoodId] = useState(params.id);
  const [foodName, setFoodName] = useState(params.name);
  const [starCount, setStarCount] = useState(0);
  const onStarRatingPress = (rating) => {
    setStarCount(rating);
  };
  return (
    <ReviewPresenter
      foodId={foodId}
      foodName={foodName}
      starCount={starCount}
      onStarRatingPress={onStarRatingPress}
    />
  );
};
export default ReviewContainer;

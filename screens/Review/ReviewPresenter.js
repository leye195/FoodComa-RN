import React from "react";
import { KeyboardAvoidingView } from "react-native";
import Form from "../../components/Review/Form";

const ReviewPresenter = ({
  foodName,
  content,
  starCount,
  onStarRatingPress,
  onSubmitReview,
  onChangeReview,
  pickImages,
}) => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <Form
        name={foodName}
        count={starCount}
        onSubmitReview={onSubmitReview}
        onChangeReview={onChangeReview}
        onStarRatingPress={onStarRatingPress}
        content={content}
        pickImages={pickImages}
      />
    </KeyboardAvoidingView>
  );
};
export default ReviewPresenter;

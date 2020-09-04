import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import StarRating from "react-native-star-rating";
import {
  DARK_YELLOW,
  ACTIVE_COLOR,
  YELLOW_COLOR,
  GREY_COLOR,
  SILVER_COLOR,
} from "../../constants/color";
import DismissKeyboard from "../DissmissKeyboard";
import { TouchableOpacity } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("screen");
const Container = styled.View`
  height: ${height}px;
`;
const FoodTitleContainer = styled.View`
  background-color: white;
  flex: 0.5;
`;
const Text = styled.Text`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.color};
`;
const RateSection = styled.View`
  padding: 15px;
  background-color: white;
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  flex: 0.5;
`;
const TextAreaSection = styled.View`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  height: 350px;
  flex: 2.5;
  align-items: center;
  justify-content: center;
`;
const TextArea = styled.TextInput`
  max-height: 350px;
  height: 65%;
  width: 100%;
  background-color: white;
  border: 3px solid ${ACTIVE_COLOR};
  border-radius: 10px;
  padding: 10px;
`;
const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  margin-bottom: 10px;
  background-color: white;
`;
const ImageButton = styled(TouchableOpacity)`
  border: 3px solid ${GREY_COLOR};
  height: 70%;
  width: ${width / 5}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
`;
const ButtonContainer = styled.View`
  width: 100%;
  padding: 10px;
  background-color: white;
  margin: 0 auto;
  flex: 1;
`;
const Button = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  padding: 5px;
  margin: 5px;
`;
const Form = ({
  name,
  count,
  content,
  onSubmitReview,
  onStarRatingPress,
  onChangeReview,
  pickImages,
}) => {
  return (
    <DismissKeyboard>
      <Container>
        <FoodTitleContainer>
          <Text color="black">{name}</Text>
        </FoodTitleContainer>
        <RateSection>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={count}
            selectedStar={(rating) => onStarRatingPress(rating)}
            fullStarColor={DARK_YELLOW}
          />
        </RateSection>
        <TextAreaSection>
          <TextArea
            value={content}
            placeholder={"방문 리뷰"}
            multiline
            numberOfLines={4}
            maxLength={500}
            editable
            onChangeText={(text) => onChangeReview(text)}
          />
        </TextAreaSection>
        <ImageContainer>
          <ImageButton onPress={() => pickImages()}>
            <Text color={SILVER_COLOR}>+</Text>
          </ImageButton>
        </ImageContainer>
        <ButtonContainer>
          <TouchableOpacity onPress={onSubmitReview}>
            <Button color={YELLOW_COLOR}>제출</Button>
          </TouchableOpacity>
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
export default Form;

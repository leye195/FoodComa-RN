import React from "react";
import styled from "styled-components";
import StarRating from "react-native-star-rating";
import { DARK_YELLOW, ACTIVE_COLOR, YELLOW_COLOR } from "../../constants/color";
import { KeyboardAvoidingView } from "react-native";
//import Scroll from "../../components/Scroll";
import { TouchableOpacity } from "react-native-gesture-handler";
import DismissKeyboard from "../../components/DissmissKeyboard";

const Container = styled.View``;
const FoodTitleContainer = styled.View`
  background-color: white;
`;
const Text = styled.Text`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const RateSection = styled.View`
  padding: 15px;
  background-color: white;
  margin-top: 10px;
`;
const TextAreaSection = styled.View`
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
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
const ButtonContainer = styled.View`
  width: 100%;
  padding: 10px;
  background-color: white;
  margin: 0 auto;
`;
const Button = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
  background-color: ${YELLOW_COLOR};
  border-radius: 20px;
  padding: 10px;
`;

const ReviewPresenter = ({
  foodId,
  foodName,
  starCount,
  onStarRatingPress,
}) => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <DismissKeyboard>
        <Container>
          <FoodTitleContainer>
            <Text>{foodName}</Text>
          </FoodTitleContainer>
          <RateSection>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={starCount}
              selectedStar={(rating) => onStarRatingPress(rating)}
              fullStarColor={DARK_YELLOW}
            />
          </RateSection>
          <TextAreaSection>
            <TextArea
              placeholder={"방문 리뷰"}
              multiline
              numberOfLines={4}
              maxLength={500}
              editable
            />
          </TextAreaSection>
          <ButtonContainer>
            <TouchableOpacity>
              <Button>제출</Button>
            </TouchableOpacity>
          </ButtonContainer>
        </Container>
      </DismissKeyboard>
    </KeyboardAvoidingView>
  );
};
export default ReviewPresenter;

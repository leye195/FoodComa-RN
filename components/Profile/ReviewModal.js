import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import styled from "styled-components";
import { Dimensions } from "react-native";
import {
  YELLOW_COLOR,
  INACTIVE_COLOR,
  ACTIVE_COLOR,
  GREY_COLOR,
} from "../../constants/color";
import { getImage } from "../../utils";
const { width, height } = Dimensions.get("screen");

const Container = styled.View``;
const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  width: ${width}px;
  height: ${height / 1.01}px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  border: 1px solid #e3e3e3;
`;
const TitleContainer = styled.View`
  width: 100%;
`;
const Text = styled.Text`
  padding: 10px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;
const TextAreaSection = styled.View`
  margin-top: 0px;
  margin-left: 10px;
  margin-right: 10px;
  flex-direction: column;
  justify-content: flex-end;
`;
const TextArea = styled.TextInput`
  height: 60%;
  width: 100%;
  background-color: white;
  border: 3px solid ${ACTIVE_COLOR};
  border-radius: 10px;
  padding: 10px;
`;
const ImageContainer = styled.View`
  flex-direction: row;
  width: 90%;
  margin: 20px auto;
  margin-top: 50px;
`;

const Image = styled.Image`
  width: ${width / 5}px;
  height: 80px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${GREY_COLOR};
`;
const ImageCounter = styled.View`
  width: ${width / 5}px;
  height: 80px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${GREY_COLOR};
`;
const Count = styled.Text`
  color: black;
  font-weight: bold;
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
  background-color: ${(props) => props.color};
  border-radius: 20px;
  padding: 5px;
  margin: 5px;
`;
const ReviewModal = ({
  isVisible,
  toggleModal,
  handleEdit,
  review: { food = {}, content = "" },
  review,
}) => {
  const [userReview, setUserReview] = useState("");
  const handleChange = (text) => {
    setUserReview(text);
  };
  useEffect(() => {
    setUserReview(content);
  }, [content]);
  return (
    <Container>
      <Modal
        animationType="slide"
        visible={isVisible}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          width: width,
          height: height,
          left: -20,
          top: 5,
        }}
      >
        <ItemContainer>
          <TextAreaSection>
            <TitleContainer>
              <Text>{food?.name ? food.name : ""}</Text>
            </TitleContainer>
            <TextArea
              value={userReview}
              placeholder={"방문 리뷰"}
              multiline
              numberOfLines={4}
              maxLength={500}
              editable
              onChangeText={handleChange}
            />
          </TextAreaSection>
          <ImageContainer>
            {food?.imgUrl ? (
              <>
                {food.imgUrl.map((url, idx) => (
                  <Image
                    key={idx}
                    source={{
                      uri: getImage(url),
                    }}
                  />
                ))}
                {food.imgUrl.length > 4 && (
                  <ImageCounter>
                    <Count>{`+${food.imgUrl.length - 4}`}</Count>
                  </ImageCounter>
                )}
              </>
            ) : (
              <></>
            )}
          </ImageContainer>
          <ButtonContainer>
            <Button
              color={YELLOW_COLOR}
              onPress={() => handleEdit({ ...review, content: userReview })}
            >
              수정
            </Button>
            <Button color={INACTIVE_COLOR} onPress={() => toggleModal(false)}>
              삭제
            </Button>
            <Button color={INACTIVE_COLOR} onPress={() => toggleModal(false)}>
              취소
            </Button>
          </ButtonContainer>
        </ItemContainer>
      </Modal>
    </Container>
  );
};
export default ReviewModal;

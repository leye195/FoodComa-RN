import React from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import { GREY_COLOR } from "../../constants/color";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Rate from "../Rate";
import Line from "../Line";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getImage } from "../../utils";

const Container = styled.View`
  padding: 5px;
  margin-bottom: 5px;
`;
const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`;
const ProfileContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const RateContainer = styled.View``;
const EditContainer = styled.View`
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const HeaderText = styled.Text`
  font-weight: bold;
  margin-left: 5px;
`;
const ContentSection = styled.View`
  margin: 0 5px;
  padding: 10px;
`;
const ImageSection = styled.View`
  height: 200px;
  width: 95%;
  margin: 0 auto;
`;
const Name = styled.Text`
  margin-bottom: 5px;
  font-weight: bold;
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
`;
const TextSection = styled.View`
  margin: 0 5px;
  background-color: ${GREY_COLOR};
  padding: 10px;
  border-radius: 5px;
`;
const Content = styled.Text``;

const Review = ({
  review: {
    writer: { email, image },
    rate,
    content,
    food,
  },
  review,
  toggleModal,
}) => {
  //console.log(food);
  return (
    <>
      <Container>
        <Header>
          <ProfileContainer>
            <ProfileImage image={image} email={email} />
            <HeaderText>{email && email.split("@")[0]}</HeaderText>
          </ProfileContainer>
          <RateContainer>
            <Rate rate={rate} />
          </RateContainer>
          <EditContainer>
            <TouchableOpacity onPress={() => toggleModal(true, review)}>
              <FontAwesome5
                name={"edit"}
                size={20}
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          </EditContainer>
        </Header>
        <ContentSection>
          {food && food?.imgUrl ? (
            <ImageSection>
              <Name>{food.name}</Name>
              <Image source={{ uri: getImage(food.imgUrl[0]) }} />
            </ImageSection>
          ) : (
            <></>
          )}
          <TextSection>
            <Content>{content}</Content>
          </TextSection>
        </ContentSection>
      </Container>
      <Line />
    </>
  );
};
export default Review;

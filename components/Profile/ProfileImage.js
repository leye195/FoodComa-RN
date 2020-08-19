import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { GREY_COLOR } from "../../constants/color";
import { getImage } from "../../utils";
const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  border-radius: 50px;
  width: ${width * 0.1}px;
  height: ${width * 0.1}px;
  background-color: ${GREY_COLOR};
  margin-bottom: 10px;
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 50px;
`;
const DefaultImage = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
const Text = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;

const ProfileImage = ({ image, email }) => {
  return (
    <Container>
      {image ? (
        <Image source={{ uri: getImage(image) }} />
      ) : (
        <DefaultImage>
          <Text>{email && email.split("@")[0][0]}</Text>
        </DefaultImage>
      )}
    </Container>
  );
};
export default ProfileImage;

import React from "react";
import styled from "styled-components";
import { Animated } from "react-native";
import { GREY_COLOR } from "../../constants/color";
import { getImage } from "../../utils";

const Container = styled.View`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  background-color: ${GREY_COLOR};
  margin-bottom: 10px;
`;
const AnimatedImage = styled(Animated.Image)`
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
  font-size: 20px;
`;
const UserImage = ({ image, email }) => {
  let imageAnimated = new Animated.Value(0);
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Container>
      {image ? (
        <AnimatedImage
          source={{ uri: getImage(image) }}
          style={{ opacity: imageAnimated }}
          onLoad={onImageLoad}
        />
      ) : (
        <DefaultImage>
          <Text>{email && email.split("@")[0][0]}</Text>
        </DefaultImage>
      )}
    </Container>
  );
};
export default UserImage;

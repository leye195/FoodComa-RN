import React from "react";
import styled from "styled-components";
import { Animated } from "react-native";
import { getImage } from "../utils";
const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const AnimatedImage = styled(Animated.Image)`
  width: 100%;
  height: 100%;
`;
const Slide = ({ url }) => {
  let imageAnimated = new Animated.Value(0);
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Container>
      <AnimatedImage
        source={{
          uri: getImage(url),
        }}
        style={{ opacity: imageAnimated }}
        onLoad={onImageLoad}
      />
    </Container>
  );
};
export default Slide;

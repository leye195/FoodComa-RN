import React from "react";
import styled from "styled-components";
import { Animated } from "react-native";
import { getImage } from "../utils";
import { GREY_COLOR } from "../constants/color";

const Container = styled.View`
  margin: 5px;
  background-color: ${GREY_COLOR};
  border-radius: 10px;
`;
const AnimatedImage = styled(Animated.Image)`
  width: ${(props) => (props.isWeb ? "180px" : "120px")};
  height: ${(props) => (props.isWeb ? "220px" : "180px")};
  border-radius: 10px;
`;

/*const Image = styled.Image`
  width: ${(props) => (props.isWeb ? "180px" : "120px")};
  height: ${(props) => (props.isWeb ? "220px" : "180px")};
  border-radius: 10px;
`;*/
const Poster = ({ url }) => {
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
        resizeMode={"stretch"}
        style={{ opacity: imageAnimated }}
        onLoad={onImageLoad}
      />
    </Container>
  );
};
export default Poster;

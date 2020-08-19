import React from "react";
import styled from "styled-components";
import { Dimensions, Animated } from "react-native";

import { GREY_COLOR } from "../../constants/color";
import { getImage } from "../../utils";
const { height } = Dimensions.get("screen");
const Container = styled.View`
  padding: 10px;
  margin-bottom: 5px;
`;
const Header = styled.View`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;
const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;
const Content = styled.View`
  background-color: ${GREY_COLOR};
  height: ${height * 0.3}px;
  border-radius: 10px;
`;
const AnimatedImage = styled(Animated.Image)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const Food = ({ food: { name, imgUrl } }) => {
  let imageAnimated = new Animated.Value(0);
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Container>
      <Header>
        <Text>{name}</Text>
      </Header>
      <Content>
        <AnimatedImage
          source={{ uri: getImage(imgUrl[0]) }}
          style={{ opacity: imageAnimated }}
          onLoad={onImageLoad}
        />
      </Content>
    </Container>
  );
};
export default Food;

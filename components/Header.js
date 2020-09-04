import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { Dimensions, Animated } from "react-native";
import { ACTIVE_COLOR } from "../constants/color";

const { height } = Dimensions.get("screen");
const Container = styled(Animated.View)`
  width: 100%;
  height: ${height * 0.1}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  ${(props) =>
    props.type === "normal" &&
    css`
      background-color: ${ACTIVE_COLOR};
      position: relative;
    `}
  ${(props) =>
    props.type === "animation" &&
    css`
      background-color: ${ACTIVE_COLOR};
      position: absolute;
    `}
  top: 0;
  left: 0;
  z-index: 10;
`;
const Text = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-top: 20px;
`;

const Header = ({ text = "", type = "normal", posY = 0, children }) => {
  const scrollY = new Animated.Value(posY);
  const newOpacity = scrollY.interpolate({
    inputRange: [0, height * 0.3],
    outputRange: [0, 1],
    extrapolateRight: "clamp",
  });
  return (
    <Container
      type={type}
      style={type === "animation" && { opacity: newOpacity }}
    >
      {text.length > 0 && <Text>{text}</Text>}
      {children}
    </Container>
  );
};
export default Header;

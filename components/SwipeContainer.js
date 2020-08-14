import React from "react";
import styled from "styled-components";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import { ACTIVE_COLOR } from "../constants/color";
const { height } = Dimensions.get("window");
const Container = styled.View`
  height: ${height / 3}px;
  width: 100%;
  margin-bottom: 0px;
`;
const SwipeContainer = ({ children }) => {
  return (
    <Container>
      <Swiper loop={true} timeout={3} activeDotColor={ACTIVE_COLOR}>
        {children}
      </Swiper>
    </Container>
  );
};
export default SwipeContainer;

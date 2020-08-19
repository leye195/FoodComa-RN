import React from "react";
import styled from "styled-components";
import { Bounce } from "react-native-animated-spinkit";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`;

const Loading = ({ size = 40, color = "black" }) => {
  return (
    <Container>
      <Bounce color={color} size={size} />
    </Container>
  );
};
export default Loading;

import React from "react";
import styled from "styled-components";
import { DARK_YELLOW, YELLOW_COLOR } from "../../constants/color";

const Container = styled.View`
  height: 80%;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: ${YELLOW_COLOR};
`;
const Text = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  color: white;
`;
const Empty = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};
export default Empty;

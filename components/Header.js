import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import { ACTIVE_COLOR } from "../constants/color";

const { height } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  background-color: ${ACTIVE_COLOR};
  height: ${height * 0.1}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;
const Text = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-top: 20px;
`;
const Header = ({ text = "", children }) => {
  return (
    <Container>
      {text.length > 0 && <Text>{text}</Text>}
      {children}
    </Container>
  );
};
export default Header;

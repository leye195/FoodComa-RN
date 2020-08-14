import React from "react";
import styled from "styled-components";
import { width } from "../constants/layout";

const Container = styled.View`
  display: flex;
  height: 30px;
  width: ${`${width}px`};
`;
const Text = styled.Text`
  color: white;
  font-size: 20px;
`;
const Header = () => {
  return (
    <Container>
      <Text>FoodComa</Text>
    </Container>
  );
};
export default Header;

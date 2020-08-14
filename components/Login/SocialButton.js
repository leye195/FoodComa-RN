import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 90px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 3px;
  margin: 5px;
`;

const SocialButton = ({ children, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Container>{children}</Container>
    </TouchableOpacity>
  );
};
export default SocialButton;

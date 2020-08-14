import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 280px;
  margin: 0 auto;
  background-color: ${(props) => (props.color ? props.color : "#2ecc71")};
  padding: 15px;
  margin-top: 20px;
  border-radius: 10px;
`;
const Text = styled.Text`
  text-align: center;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

const SubmitButton = ({ title, color, handlePress }) => {
  return (
    <Container color={color}>
      <TouchableOpacity onPress={handlePress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </Container>
  );
};
export default SubmitButton;

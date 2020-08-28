import React, { useRef } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
`;
const Title = styled.Text`
  color: black;
`;
const IconButton = ({ children, title, id, name, onPressButton }) => {
  return (
    <ButtonContainer>
      <Button onPress={onPressButton}>
        {children}
        <Title>{title}</Title>
      </Button>
    </ButtonContainer>
  );
};
export default IconButton;

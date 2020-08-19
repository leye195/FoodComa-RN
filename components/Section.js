import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import Line from "./Line";
const Container = styled.View`
  margin-top: 10px;
  display: flex;
`;
const TextContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
`;
const Title = styled.Text`
  padding: 5px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;
const Section = ({ title, children }) => {
  return (
    <Container>
      <TextContainer>
        <TouchableOpacity>
          <Title>{title}</Title>
        </TouchableOpacity>
        <Line />
      </TextContainer>
      {children}
    </Container>
  );
};
export default Section;

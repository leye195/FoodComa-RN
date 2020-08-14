import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
const Container = styled.View`
  margin-top: 10px;
`;
const TextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.Text`
  padding: 5px;
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
      </TextContainer>
      {children}
    </Container>
  );
};
export default Section;

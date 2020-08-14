import React from "react";
import styled from "styled-components";

const Container = styled.View``;
const Text = styled.Text``;

const Content = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};
export default Content;

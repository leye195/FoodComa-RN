import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
const Container = styled.View`
  background-color: white;
  box-shadow: 0px 0px 5px #e3e3e3;
`;
const HorizontalScroll = ({ children }) => {
  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 20 }}
        contentContainerStyle={{
          flexDirection: "row",
          paddingLeft: 10,
        }}
      >
        {children}
      </ScrollView>
    </Container>
  );
};
export default HorizontalScroll;

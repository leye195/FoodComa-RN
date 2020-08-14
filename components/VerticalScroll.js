import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
const Container = styled.View``;
const VerticalScroll = ({ children }) => {
  return (
    <Container>
      <ScrollView
        horizontal={false}
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
export default VerticalScroll;

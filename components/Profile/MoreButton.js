import React, { useState } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  position: absolute;
  right: 0;
  padding-top: 20px;
  margin-right: 30px;
`;
const More = ({ toggleModal }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => toggleModal()}>
        <Ionicons
          name={Platform.OS === "ios" ? "ios-more" : "md-more"}
          color={"white"}
          size={20}
        />
      </TouchableOpacity>
    </Container>
  );
};
export default More;

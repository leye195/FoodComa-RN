import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  position: absolute;
  right: 0;
  padding-top: 20px;
  margin-right: 30px;
`;
const Filter = ({ toggleFilter }) => {
  return (
    <Container>
      <TouchableOpacity onPress={toggleFilter}>
        <FontAwesome5 name="filter" color={"white"} size={20} />
      </TouchableOpacity>
    </Container>
  );
};
export default Filter;

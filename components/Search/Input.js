import React from "react";
import styled from "styled-components";
import { GREY_COLOR } from "../../constants/color";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const TextInput = styled.TextInput`
  background-color: white;
  width: 80%;
  height: 60px;
  margin: 5px auto;
  font-size: 20px;
  padding: 10px 0px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    maxLength={20}
    returnKeyType={"search"}
  />
);

export default Input;

import React from "react";
import styled from "styled-components";
import { GREY_COLOR } from "../../constants/color";

const TextInput = styled.TextInput`
  background-color: white;
  width: 90%;
  margin: 5px auto;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 1px 5px 4px #d0d0d0;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    maxLength={20}
    numberOfLines={1}
    returnKeyType={"search"}
  />
);

export default Input;

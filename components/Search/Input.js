import React from "react";
import styled from "styled-components";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 20px;
  height: 50px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    returnKeyType={"search"}
  />
);

export default Input;

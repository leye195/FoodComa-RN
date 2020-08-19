import React from "react";
import styled from "styled-components";
import { GREY_COLOR } from "../constants/color";

const Container = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${GREY_COLOR};
  margin: 10px 0;
`;

const Line = () => {
  return <Container />;
};
export default Line;

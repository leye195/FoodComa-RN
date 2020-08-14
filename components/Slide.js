import React from "react";
import styled from "styled-components";
import { getImage } from "../api";
const Container = styled.View`
  width: 100%;
  height: 100%;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const Slide = ({ url }) => {
  return (
    <Container>
      <Image
        source={{
          uri: getImage(url),
        }}
      />
    </Container>
  );
};
export default Slide;

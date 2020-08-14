import React from "react";
import styled from "styled-components";
import { getImage } from "../api";
import { GREY_COLOR } from "../constants/color";

const Container = styled.View`
  margin: 5px;
  background-color: ${GREY_COLOR};
  border-radius: 10px;
`;
const Image = styled.Image`
  width: ${(props) => (props.isWeb ? "180px" : "120px")};
  height: ${(props) => (props.isWeb ? "220px" : "180px")};
  border-radius: 10px;
`;
const Poster = ({ url }) => {
  return (
    <Container>
      <Image
        source={{
          uri: getImage(url),
        }}
        resizeMode={"stretch"}
      />
    </Container>
  );
};
export default Poster;

import React from "react";
import styled from "styled-components";
import { GREY_COLOR } from "../../constants/color";

const Container = styled.View`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  background-color: ${GREY_COLOR};
  margin-bottom: 10px;
`;
const Image = styled.Image``;

const UserImage = () => {
  return (
    <Container>
      <Image />
    </Container>
  );
};
export default UserImage;

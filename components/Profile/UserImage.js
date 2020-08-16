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
const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 50px;
`;
const DefaultImage = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
const UserImage = ({ image, email }) => {
  return (
    <Container>
      {image ? (
        <Image />
      ) : (
        <DefaultImage>
          <Text>{email.split("@")[0][0]}</Text>
        </DefaultImage>
      )}
    </Container>
  );
};
export default UserImage;

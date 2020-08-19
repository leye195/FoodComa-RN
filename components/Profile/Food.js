import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { GREY_COLOR } from "../../constants/color";
import { getImage } from "../../utils";
const { height, width } = Dimensions.get("screen");
const Container = styled.View`
  padding: 10px;
  margin-bottom: 5px;
`;
const Header = styled.View`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;
const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;
const Content = styled.View`
  background-color: ${GREY_COLOR};
  height: ${height * 0.3}px;
  border-radius: 10px;
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
const Food = ({ food: { name, imgUrl } }) => {
  return (
    <Container>
      <Header>
        <Text>{name}</Text>
      </Header>
      <Content>
        <Image source={{ uri: getImage(imgUrl[0]) }} />
      </Content>
    </Container>
  );
};
export default Food;

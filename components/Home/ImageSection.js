import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";
import { YELLOW_COLOR, ACTIVE_COLOR } from "../../constants/color";
import { getImage } from "../../utils";
const { height, width } = Dimensions.get("screen");

const Container = styled.View`
  width: ${width}px;
  height: ${height * 0.3}px;
  margin-bottom: 10px;
`;
const View = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${YELLOW_COLOR};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0px 5px 10px ${YELLOW_COLOR};
`;
const Text = styled.Text`
  position: absolute;
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 5px 0px 10px black;
  text-align: center;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const ImageSection = () => {
  return (
    <Container>
      <View>
        <Image
          source={{
            uri: getImage(
              "https://images.unsplash.com/photo-1576488446152-22e9a7ea2f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            ),
          }}
        />
        <Text>먹을땐 입이 즐거워야되지 않을까?</Text>
      </View>
    </Container>
  );
};
export default ImageSection;

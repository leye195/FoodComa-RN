import React from "react";
import styled from "styled-components";
import { Dimensions, Animated } from "react-native";

import { GREY_COLOR } from "../../constants/color";
import { getImage } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Rate from "../Rate";
const { height } = Dimensions.get("screen");
const Container = styled.View`
  padding: 10px;
  margin-bottom: 5px;
  background-color: white;
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
const AnimatedImage = styled(Animated.Image)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
const RateContainer = styled.View`
  flex-direction: row;
`;
const RateText = styled.Text`
  margin-left: 5px;
`;
const Food = ({
  item: { _id: id, latitude, longitude, name, imgUrl, avg_rate, address },
}) => {
  const navigation = useNavigation();
  let imageAnimated = new Animated.Value(0);
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          id,
          latitude,
          longitude,
          name,
          imgUrl,
          avg_rate,
          address,
        })
      }
    >
      <Container>
        <Header>
          <Text>{name}</Text>
          <RateContainer>
            <Rate rate={avg_rate} />
            <RateText>{avg_rate.toFixed(2)}</RateText>
          </RateContainer>
        </Header>
        <Content>
          <AnimatedImage
            source={{ uri: getImage(imgUrl[0]) }}
            style={{ opacity: imageAnimated }}
            onLoad={onImageLoad}
          />
        </Content>
      </Container>
    </TouchableOpacity>
  );
};
export default Food;

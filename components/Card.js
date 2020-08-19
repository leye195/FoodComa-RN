import React from "react";
import styled from "styled-components";
import Rate from "./Rate";
import { Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getImage } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { GREY_COLOR } from "../constants/color";

const Container = styled.View`
  height: 180px;
  width: 43%;
  border-radius: 10px;
  margin: 6px;
  box-shadow: 3px 3px 3px #e3e3e3;
`;
const ImageContainer = styled.View`
  height: 55%;
  background: ${GREY_COLOR};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const AnimatedImage = styled(Animated.Image)`
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
const InfoSection = styled.View`
  background-color: white;
  height: 45%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
const Name = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin: 10px;
`;
const Card = ({ id, name, url, longitude, latitude, address, avg_rate }) => {
  let imageAnimated = new Animated.Value(0);
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            id,
            name,
            imgUrl: url,
            latitude,
            longitude,
            address,
            avg_rate,
          })
        }
      >
        <ImageContainer>
          <AnimatedImage
            source={{ uri: getImage(url[0]) }}
            style={{ opacity: imageAnimated }}
            onLoad={onImageLoad}
          />
        </ImageContainer>
        <InfoSection>
          <Name>{name}</Name>
          <Rate rate={4.0} />
        </InfoSection>
      </TouchableOpacity>
    </Container>
  );
};
export default Card;

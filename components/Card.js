import React from "react";
import styled from "styled-components";
import Rate from "./Rate";
import { Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getImage } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { GREY_COLOR, YELLOW_COLOR } from "../constants/color";

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
const RateView = styled.View`
  margin-left: 10px;
`;
const Type = styled.Text`
  margin-top: 5px;
  margin-left: 10px;
  color: black;
  font-weight: 500;
`;

const Card = ({
  item: {
    _id: id,
    name,
    imgUrl: url,
    longitude,
    latitude,
    address,
    avg_rate,
    type,
  },
}) => {
  const navigation = useNavigation();

  let imageAnimated = new Animated.Value(0);
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  //console.log(item);
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
          <RateView>
            <Rate rate={avg_rate} />
          </RateView>
          <Type>{type.join("/")}</Type>
        </InfoSection>
      </TouchableOpacity>
    </Container>
  );
};
export default Card;

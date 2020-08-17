import React from "react";
import styled, { css } from "styled-components";
import { TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { DARK_YELLOW } from "../../constants/color";
import Section from "../../components/Section";
import HorizontalScroll from "../../components/HorizontalScroll";
import Scroll from "../../components/Scroll";
import Poster from "../../components/Poster";
import { Bounce } from "react-native-animated-spinkit";

const Container = styled.View`
  ${(props) =>
    props.type === "loading" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
    `}
`;
const LocationContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 10px 0;
`;
const Location = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${DARK_YELLOW};
  padding: 5px 20px;
  border-radius: 20px;
`;
const LocationText = styled.Text`
  color: white;
  font-weight: 800;
  margin-right: 5px;
`;
const Title = styled.Text`
  text-align: center;
`;

const HomePresenter = ({
  navigation,
  location,
  locationLoading,
  moveToMap,
  moveToDetail,
  loading,
  data,
}) => {
  return loading ? (
    <Container type={"loading"}>
      <Bounce size={45} />
    </Container>
  ) : (
    <Scroll>
      <Container>
        <LocationContainer>
          <TouchableOpacity onPress={moveToMap}>
            <Location>
              {locationLoading ? (
                <MaterialCommunityIcons name="loading" size={20} />
              ) : (
                <LocationText>
                  {location.region} {location.city} {location.street}
                </LocationText>
              )}
              <FontAwesome5 name="location-arrow" size={20} color="white" />
            </Location>
          </TouchableOpacity>
        </LocationContainer>
        <Section title={"맛있는 한식?"}>
          <HorizontalScroll>
            {data &&
              data.foods
                .filter((food) => food.type.includes("한식"))
                .map((content) => (
                  <TouchableOpacity
                    key={content._id}
                    onPress={() => moveToDetail(content)}
                  >
                    <Poster url={content.imgUrl[0]} />
                    <Title>{content.name}</Title>
                  </TouchableOpacity>
                ))}
          </HorizontalScroll>
        </Section>
        <Section title={"아니면 일식?"}>
          <HorizontalScroll>
            {data &&
              data.foods
                .filter((food) => food.type.includes("일식"))
                .map((content) => (
                  <TouchableOpacity
                    key={content._id}
                    onPress={() => moveToDetail(content)}
                  >
                    <Poster url={content.imgUrl[0]} />
                    <Title>{content.name}</Title>
                  </TouchableOpacity>
                ))}
          </HorizontalScroll>
        </Section>
        <Section title={"푸짐한 양식?"}>
          <HorizontalScroll>
            {data &&
              data.foods
                .filter((food) => food.type.includes("양식"))
                .map((content) => (
                  <TouchableOpacity
                    key={content._id}
                    onPress={() => moveToDetail(content)}
                  >
                    <Poster url={content.imgUrl[0]} />
                    <Title>{content.name}</Title>
                  </TouchableOpacity>
                ))}
          </HorizontalScroll>
        </Section>
        <Section title={"간단하게 햄버거?"}>
          <HorizontalScroll>
            {data &&
              data.foods
                .filter((food) => food.type.includes("햄버거"))
                .map((content) => (
                  <TouchableOpacity
                    key={content._id}
                    onPress={() => moveToDetail(content)}
                  >
                    <Poster url={content.imgUrl[0]} />
                    <Title>{content.name}</Title>
                  </TouchableOpacity>
                ))}
          </HorizontalScroll>
        </Section>
      </Container>
    </Scroll>
  );
};
export default HomePresenter;

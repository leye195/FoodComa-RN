import React from "react";
import styled, { css } from "styled-components";
import { TouchableOpacity } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { DARK_YELLOW, GREY_COLOR } from "../../constants/color";
import Section from "../../components/Section";
import HorizontalScroll from "../../components/HorizontalScroll";
import Scroll from "../../components/Scroll";
import Poster from "../../components/Poster";
import { Bounce } from "react-native-animated-spinkit";
import ImageSection from "../../components/Home/ImageSection";

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
  width: 100%;
  margin: 10px 0;
`;
const Location = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${DARK_YELLOW};
  padding: 10px 40px;
  border-radius: 20px;
  width: 100%;
  box-shadow: 1px 1px 10px ${GREY_COLOR};
`;
const LocationText = styled.Text`
  color: white;
  font-weight: 800;
  margin-right: 5px;
`;
const Card = styled(TouchableOpacity)`
  background-color: white;
  box-shadow: 5px 5px 5px ${GREY_COLOR};
  border-radius: 10px;
  border: 1px solid ${GREY_COLOR};
  margin: 5px;
  padding: 5px;
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
        <ImageSection></ImageSection>
        <Section title={"맛있는 한식?"}>
          <HorizontalScroll>
            {data &&
              data.foods
                .filter((food) => food.type.includes("한식"))
                .map((content) => (
                  <Card key={content._id} onPress={() => moveToDetail(content)}>
                    <Poster url={content.imgUrl[0]} />
                    <Title>{content.name}</Title>
                  </Card>
                ))}
          </HorizontalScroll>
        </Section>
        <Section title={"아니면 일식?"}>
          <HorizontalScroll>
            {data &&
              data.foods
                .filter((food) => food.type.includes("일식"))
                .map((content) => (
                  <Card key={content._id} onPress={() => moveToDetail(content)}>
                    <Poster url={content.imgUrl[0]} />
                    <Title>{content.name}</Title>
                  </Card>
                ))}
          </HorizontalScroll>
        </Section>
        <Section title={"푸짐한 양식?"}>
          <HorizontalScroll>
            {data &&
              data.foods
                .filter((food) => food.type.includes("양식"))
                .map((content) => (
                  <Card key={content._id} onPress={() => moveToDetail(content)}>
                    <Poster url={content.imgUrl[0]} />
                    <Title>{content.name}</Title>
                  </Card>
                ))}
          </HorizontalScroll>
        </Section>
        <Section title={"간단하게 햄버거?"}>
          <HorizontalScroll>
            {data &&
              data.foods
                .filter((food) => food.type.includes("햄버거"))
                .map((content) => (
                  <Card key={content._id} onPress={() => moveToDetail(content)}>
                    <Poster url={content.imgUrl[0]} />
                    <Title>{content.name}</Title>
                  </Card>
                ))}
          </HorizontalScroll>
        </Section>
      </Container>
    </Scroll>
  );
};
export default HomePresenter;

import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import Slider from "@react-native-community/slider";
import Card from "../../components/Card";
import Scroll from "../../components/Scroll";
import MenuScroll from "../../components/MenuScroll";
import Header from "../../components/Header";
import FilterButton from "../../components/FilterButton";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  display: flex;
`;
const FoodScroll = styled(Scroll)``;
const FoodSection = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex: 1;
  padding-bottom: ${(props) => (props.isVisible ? "230px" : "150px")};
  margin-top: 20px;
  margin-left: 20px;
`;
const FilterContainer = styled.View`
  padding: 10px 0;
  align-items: center;
`;

const FilterSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${width * 0.8}px;
  margin: 0 auto;
`;
const FilterSlider = styled(Slider)`
  margin: 0 auto;
  width: 90%;
`;
const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const FoodPresenter = ({
  selected,
  handleSelect,
  foods,
  category,
  loading,
  getData,
  isVisible,
  toggleFilter,
  value,
  onValueChange,
}) => {
  return (
    <Container>
      <Header text={selected.type === "all" ? "전체" : selected.type}>
        <FilterButton toggleFilter={toggleFilter} />
      </Header>
      {isVisible && (
        <FilterContainer>
          <Text>평점: {value}</Text>
          <FilterSection>
            <Text>0</Text>
            <FilterSlider
              minimumValue={0}
              maximumValue={5}
              step={0.1}
              value={value}
              onSlidingComplete={onValueChange}
            />
            <Text>5</Text>
          </FilterSection>
        </FilterContainer>
      )}
      <MenuScroll
        handleSelect={handleSelect}
        selected={selected}
        category={category}
      />
      <FoodScroll getData={getData}>
        <FoodSection isVisible={isVisible}>
          {foods &&
            foods
              .filter((food) => food.avg_rate <= value)
              .sort((x, y) => y.avg_rate - x.avg_rate)
              .map((food) => <Card key={food._id} item={food} />)}
        </FoodSection>
      </FoodScroll>
    </Container>
  );
};
export default FoodPresenter;

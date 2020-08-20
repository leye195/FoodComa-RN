import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Scroll from "../../components/Scroll";
import MenuScroll from "../../components/MenuScroll";
import Header from "../../components/Header";
import FlatScroll from "../../components/FlatScroll";
const Container = styled.View`
  display: flex;
`;
const FoodScroll = styled(Scroll)``;
const FoodSection = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex: 1;
  padding-bottom: 150px;
  margin-top: 20px;
  margin-left: 20px;
`;
const FoodPresenter = ({
  selected,
  handleSelect,
  foods,
  category,
  loading,
  getData,
}) => {
  return (
    <Container>
      <Header text={selected.type === "all" ? "전체" : selected.type} />
      <MenuScroll
        handleSelect={handleSelect}
        selected={selected}
        category={category}
      />
      <FoodScroll getData={getData}>
        <FoodSection>
          {foods && foods.map((food) => <Card key={food._id} item={food} />)}
        </FoodSection>
      </FoodScroll>
    </Container>
  );
};
export default FoodPresenter;

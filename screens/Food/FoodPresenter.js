import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Scroll from "../../components/Scroll";
import MenuScroll from "../../components/MenuScroll";
const Container = styled.View`
  display: flex;
`;
const FoodScroll = styled(Scroll)``;
const FoodSection = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex: 1;
  padding-bottom: 100px;
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
      <MenuScroll
        handleSelect={handleSelect}
        selected={selected}
        category={category}
      />
      <FoodScroll getData={getData}>
        <FoodSection>
          {foods &&
            foods.map((food) => (
              <Card
                key={food._id}
                id={food._id}
                name={food.name}
                url={food.imgUrl}
                latitude={food.latitude}
                longitude={food.longitude}
                address={food.address}
                avg_rate={food.avg_rate}
              />
            ))}
        </FoodSection>
      </FoodScroll>
    </Container>
  );
};
export default FoodPresenter;

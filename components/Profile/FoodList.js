import React from "react";
import styled from "styled-components";
import Food from "./Food";

const Container = styled.View``;
const Cards = styled.View`
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
`;
const FoodList = ({ foods }) => {
  return (
    <Container>
      {foods.length > 0 ? (
        <Cards>
          {foods.map((food) => (
            <Food key={food._id} food={food} />
          ))}
        </Cards>
      ) : (
        <></>
      )}
    </Container>
  );
};
export default FoodList;

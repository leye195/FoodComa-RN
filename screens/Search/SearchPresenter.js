import React from "react";
import styled from "styled-components";
import Input from "../../components/Search/Input";
import Header from "../../components/Header";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import FoodList from "../../components/Profile/FoodList";
import Scroll from "../../components/Scroll";
import FlatScroll from "../../components/FlatScroll";
import Food from "../../components/Profile/Food";
const Container = styled.View``;
const InputSection = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 5px 4px #d0d0d0;
`;

const ContentSection = styled.View``;
const SearchPresenter = ({
  navigation,
  handleChange,
  handleSubmit,
  keyword,
  result,
  refetch,
}) => {
  //console.log(result);
  return (
    <Container>
      <Header text={"검색"} />
      <InputSection>
        <Ionicons
          name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          size={30}
          style={{ marginLeft: 10, marginRight: 10 }}
        />
        <Input
          placeholder={"음식,식당명을 입력하세요."}
          value={keyword}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </InputSection>
      <FlatScroll getData={refetch} data={result} Item={Food}></FlatScroll>
    </Container>
  );
};
export default SearchPresenter;

import React from "react";
import styled from "styled-components";
import Input from "../../components/Search/Input";
import Header from "../../components/Header";
const Container = styled.View``;
const InputSection = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
const Text = styled.Text``;
const SearchPresenter = ({
  navigation,
  handleChange,
  handleSubmit,
  keyword,
}) => {
  return (
    <Container>
      <Header text={"검색"} />
      <InputSection>
        <Input
          placeholder={"음식,식당명을 입력해보세요."}
          value={keyword}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </InputSection>
    </Container>
  );
};
export default SearchPresenter;

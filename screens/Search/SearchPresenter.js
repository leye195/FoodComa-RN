import React from "react";
import styled from "styled-components";
import Input from "../../components/Search/Input";
const Container = styled.View``;
const InputSection = styled.View`
  margin-bottom: 10px;
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

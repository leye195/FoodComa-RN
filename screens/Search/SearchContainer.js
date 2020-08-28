import React, { useEffect, useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { useLazyQuery } from "@apollo/react-hooks";
import { SEARCH_FOOD } from "../../graqhql/query";

const SearchContainer = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [searchFood, { loading }] = useLazyQuery(SEARCH_FOOD, {
    onCompleted: (data) => {
      const { searchFood } = data;
      setResult(searchFood);
    },
  });
  const handleChange = (text) => {
    setKeyword(text);
  };
  const handleSubmit = () => {
    searchFood({ variables: { keyword: keyword.trim() } });
  };
  const refetchingData = () => {
    handleSubmit();
  };
  return (
    <SearchPresenter
      navigation={navigation}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      keyword={keyword}
      result={result}
      loading={loading}
      refetch={refetchingData}
    />
  );
};
export default SearchContainer;

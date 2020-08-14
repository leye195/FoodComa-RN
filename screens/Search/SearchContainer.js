import React, { useEffect, useState } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const handleChange = (text) => {
    setKeyword(text);
  };
  const handleSubmit = () => {};
  useEffect(() => {}, []);
  return (
    <SearchPresenter
      navigation={navigation}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      keyword={keyword}
      result={result}
    />
  );
};
export default SearchContainer;

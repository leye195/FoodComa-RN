import React, { useState, useEffect, useLayoutEffect } from "react";
import FoodPresenter from "./FoodPresenter";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { GET_FOODS, GET_CATEGORIES } from "../../graqhql/query";

const FoodContainer = () => {
  const [selected, setSelected] = useState({ idx: 0, type: "all" });
  const [foods, setFoods] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(5);
  const {
    loading: categoryLoading,
    error: categoryError,
    data: categoryData,
  } = useQuery(GET_CATEGORIES);
  const { loading: foodLoading, error, data: foodsData } = useQuery(GET_FOODS, {
    variables: { typeName: selected.type },
  });
  const [getFoods] = useLazyQuery(GET_FOODS, {
    onCompleted: (data) => setFoods(data.foods),
  });
  const handleSelect = (idx, type) => {
    getFoods({ variables: { typeName: type } });
    setSelected({ idx, type });
  };
  const onValueChange = (v) => {
    const rate = parseFloat(v.toFixed(1), 10);
    setValue(rate);
  };
  const toggleFilter = () => {
    setIsVisible((cur) => !cur);
  };
  useLayoutEffect(() => {
    setFoods(foodsData && foodsData.foods);
  }, [foodsData]);
  return (
    <FoodPresenter
      handleSelect={handleSelect}
      selected={selected}
      loading={categoryLoading || foodLoading}
      foods={foods || []}
      category={(categoryData && categoryData.categories) || []}
      getData={getFoods}
      value={value}
      isVisible={isVisible}
      toggleFilter={toggleFilter}
      onValueChange={onValueChange}
    />
  );
};
export default FoodContainer;

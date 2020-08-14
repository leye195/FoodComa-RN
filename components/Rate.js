import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { ACTIVE_COLOR } from "../constants/color";
const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`;
const Rate = ({ rate }) => {
  const [rateArr, setRateArr] = useState([0, 0, 0, 0, 0]);
  useEffect(() => {
    let arr = [0, 0, 0, 0, 0];
    let tmp = rate;
    if (rate % 1 !== 0) {
      arr[4] = tmp % 1;
      tmp = Math.floor(tmp);
    }
    for (let i = 0; i < tmp; i++) arr[i] = 1;
    setRateArr([...arr]);
  }, []);
  return (
    <Container>
      {rateArr.map((v, idx) => {
        return (
          <Ionicons
            key={idx}
            name={
              Platform.OS === "ios"
                ? v === 1
                  ? "ios-star"
                  : v > 0 && v < 1
                  ? "ios-star-half"
                  : "ios-star-outline"
                : v === 1
                ? "md-star"
                : v > 0 && v < 1
                ? "md-star-half"
                : "md-star-outline"
            }
            size={15}
            color={ACTIVE_COLOR}
          />
        );
      })}
    </Container>
  );
};
export default Rate;

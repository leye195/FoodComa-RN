import React from "react";
import styled, { css } from "styled-components";
import HorizontalScroll from "./HorizontalScroll";
import { TouchableOpacity } from "react-native";
import { ACTIVE_COLOR } from "../constants/color";
const MenuContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-right: 20px;
`;
const Menu = styled.View`
  padding: 5px;
  height: 40px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 0px 10px;
  border-radius: 10px;
  ${(props) =>
    props.active &&
    css`
      background-color: ${ACTIVE_COLOR};
    `}
  ${(props) =>
    !props.active &&
    css`
      background-color: #e3e3e3;
    `}
`;
const Text = styled.Text`
  font-weight: 800;
  color: white;
  ${(props) =>
    props.active
      ? css`
          color: white;
        `
      : css`
          color: black;
        `}
`;
const MenuScroll = ({ selected, handleSelect, category }) => {
  return (
    <HorizontalScroll>
      <MenuContainer>
        <TouchableOpacity key={0} onPress={() => handleSelect(0, "all")}>
          <Menu active={selected.idx === 0}>
            <Text active={selected.idx === 0}>전체</Text>
          </Menu>
        </TouchableOpacity>
        {category.map((item, idx) => (
          <TouchableOpacity
            key={item._id}
            onPress={() => handleSelect(idx + 1, item.name)}
          >
            <Menu active={selected.idx === idx + 1}>
              <Text active={selected.idx === idx + 1}>{item.name}</Text>
            </Menu>
          </TouchableOpacity>
        ))}
      </MenuContainer>
    </HorizontalScroll>
  );
};
export default MenuScroll;

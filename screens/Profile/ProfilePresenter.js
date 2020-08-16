import React from "react";
import styled, { css } from "styled-components";
import Scroll from "../../components/Scroll";
import { Dimensions } from "react-native";
import UserImage from "../../components/Profile/UserImage";
import { DARK_YELLOW, ACTIVE_COLOR, GREY_COLOR } from "../../constants/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserModal from "../../components/Profile/UserModal";
import HeaderMore from "../../components/Profile/HeaderMore";
const { height } = Dimensions.get("screen");
const Container = styled.View``;
const Header = styled.View`
  width: 100%;
  background-color: ${ACTIVE_COLOR};
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const HeaderText = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-top: 20px;
`;
const UserSection = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${`${height * 0.25}px`};
  background-color: ${DARK_YELLOW};
  opacity: 0.8;
`;
const Text = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 20px;
`;
const ButtonContainer = styled.View`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  box-shadow: 0px 5px 1px ${GREY_COLOR};
`;
const CategoryWrapper = styled.View`
  flex: 1;
  border-radius: 30px;
  margin: 5px;
  ${(props) =>
    props.selected
      ? css`
          background-color: ${ACTIVE_COLOR};
          border: 1px solid ${GREY_COLOR};
        `
      : css`
          border: 1px solid ${ACTIVE_COLOR};
        `}
`;
const Category = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  margin: 5px;
  text-align: center;
  ${(props) =>
    props.selected
      ? css`
          color: white;
        `
      : css`
          color: ${ACTIVE_COLOR};
        `}
`;
const ContentSection = styled.View``;

const ProfilePresenter = ({
  selected,
  handleSelect,
  isVisible,
  toggleModal,
  handleLogout,
}) => {
  return (
    <Container>
      <Header>
        <HeaderText>Me</HeaderText>
        <HeaderMore toggleModal={toggleModal} />
      </Header>
      <UserSection>
        <UserImage />
        <Text>User Name</Text>
      </UserSection>
      <ButtonContainer>
        <CategoryWrapper selected={selected === 0}>
          <TouchableOpacity onPress={() => handleSelect(0)}>
            <Category selected={selected === 0}>리뷰</Category>
          </TouchableOpacity>
        </CategoryWrapper>
        <CategoryWrapper
          selected={selected === 1}
          onPress={() => handleSelect(1)}
        >
          <TouchableOpacity onPress={() => handleSelect(1)}>
            <Category selected={selected === 1}>Like</Category>
          </TouchableOpacity>
        </CategoryWrapper>
      </ButtonContainer>
      <ContentSection></ContentSection>
      <UserModal
        isVisible={isVisible}
        toggleModal={toggleModal}
        handleLogout={handleLogout}
      />
    </Container>
  );
};
export default ProfilePresenter;

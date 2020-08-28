import React from "react";
import styled, { css } from "styled-components";
import Scroll from "../../components/Scroll";
import { Dimensions } from "react-native";
import UserImage from "../../components/Profile/UserImage";
import { DARK_YELLOW, ACTIVE_COLOR, GREY_COLOR } from "../../constants/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserModal from "../../components/Profile/UserModal";
import MoreButton from "../../components/Profile/MoreButton";
import ReviewList from "../../components/Profile/ReviewList";
import FoodList from "../../components/Profile/FoodList";
import Loading from "../../components/Loading";
import Header from "../../components/Header";

const { height } = Dimensions.get("screen");
const Container = styled.View``;
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
const ContentSection = styled.View`
  padding-bottom: 300px;
  padding-top: 10px;
`;
const ContentScroll = styled(Scroll)`
  margin-top: 10px;
`;
const ProfilePresenter = ({
  selected,
  handleSelect,
  isVisible,
  toggleModal,
  handleLogout,
  pickImage,
  user,
  like,
  reviews,
  image,
  refetch,
  loading,
}) => {
  //console.lot(loading);
  return (
    <Container>
      <Header text={"내 프로필"}>
        <MoreButton toggleModal={toggleModal} />
      </Header>
      <UserSection>
        <UserImage
          image={image === null && user ? user.image : image}
          email={user && user.email}
        />
        <Text>{user && user.email}</Text>
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
      <ContentScroll getData={refetch}>
        <ContentSection>
          {loading && <Loading />}
          {!loading && selected === 0 && <ReviewList reviews={reviews} />}
          {!loading && selected === 1 && <FoodList foods={like} />}
        </ContentSection>
      </ContentScroll>
      <UserModal
        isVisible={isVisible}
        toggleModal={toggleModal}
        handleLogout={handleLogout}
        pickImage={pickImage}
      />
    </Container>
  );
};
export default ProfilePresenter;

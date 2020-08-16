import React, { useState, useEffect } from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { changeLoginStatus } from "../../reducers/user";
import { signOut } from "../../utils";
import { useLazyQuery } from "@apollo/react-hooks";
import { USER_REVIEWS_AND_LIKE } from "../../graqhql/query";
const ProfileContainer = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [getUserReviewsAndLike, { data: itemData }] = useLazyQuery(
    USER_REVIEWS_AND_LIKE,
    {
      variables: { uid: user._id },
    }
  );
  const handleSelect = (idx) => {
    setSelected(idx);
  };
  const toggleModal = () => {
    setIsVisible((cur) => !cur);
  };
  const handleLogout = () => {
    dispatch(
      changeLoginStatus({
        loggedIn: false,
      })
    );
    signOut();
    navigation.replace("Login");
  };
  useEffect(() => {
    if (user) {
      getUserReviewsAndLike({
        variables: { uid: user._id },
      });
    }
  }, []);
  return (
    <ProfilePresenter
      isVisible={isVisible}
      selected={selected}
      handleSelect={handleSelect}
      toggleModal={toggleModal}
      handleLogout={handleLogout}
      user={user}
      like={(itemData && itemData.like) || []}
      reviews={(itemData && itemData.userReviews) || []}
    />
  );
};
export default ProfileContainer;

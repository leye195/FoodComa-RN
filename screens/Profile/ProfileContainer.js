import React, { useState } from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeLoginStatus } from "../../reducers/user";
import { signOut } from "../../utils";
const ProfileContainer = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();
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

  return (
    <ProfilePresenter
      isVisible={isVisible}
      selected={selected}
      handleSelect={handleSelect}
      toggleModal={toggleModal}
      handleLogout={handleLogout}
    />
  );
};
export default ProfileContainer;

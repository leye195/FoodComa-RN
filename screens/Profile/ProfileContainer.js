import React, { useState, useEffect, useLayoutEffect } from "react";
import ProfilePresenter from "./ProfilePresenter";
import { useNavigation } from "@react-navigation/native";
const ProfileContainer = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const handleSelect = (idx) => {
    setSelected(idx);
  };
  const toggleModal = () => {
    setIsVisible((cur) => !cur);
  };
  console.log(isVisible);
  return (
    <ProfilePresenter
      isVisible={isVisible}
      selected={selected}
      handleSelect={handleSelect}
      toggleModal={toggleModal}
    />
  );
};
export default ProfileContainer;

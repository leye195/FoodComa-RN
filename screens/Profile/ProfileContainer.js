import React, { useState, useEffect } from "react";
import ProfilePresenter from "./ProfilePresenter";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginStatus } from "../../reducers/user";
import { signOut, uploadToFirebase } from "../../utils";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { USER_REVIEWS_AND_LIKE } from "../../graqhql/query";
import { Platform } from "react-native";
import { UPLOAD_PROFILE } from "../../graqhql/mutation";
const ProfileContainer = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const {
    data: itemData,
    loading: itemLoading,
    refetch: itemRefetch,
  } = useQuery(USER_REVIEWS_AND_LIKE, {
    variables: { uid: user._id },
  });
  const [uploadProfileImage] = useMutation(UPLOAD_PROFILE);
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
  const uploadFile = async (uri) => {
    const filename = uri.split("/").pop();
    const response = await fetch(uri);
    const blob = await response.blob();
    uploadToFirebase(blob, filename).then((url) => {
      uploadProfileImage({ variables: { id: user._id, file: url } }).then(
        ({ data: { uploadProfileImage } }) => {
          if (uploadProfileImage) {
            setIsVisible(false);
          }
        }
      );
    });
  };
  const pickImage = async () => {
    try {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL,
        Permissions.CAMERA
      );
      if (status === "granted") {
        let {
          cancelled,
          uri: pickedUri,
        } = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
        });
        if (!cancelled) {
          const uri =
            Platform.OS === "ios"
              ? pickedUri.replace("file://", "")
              : pickedUri;
          setImage(uri);
          uploadFile(uri);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ProfilePresenter
      isVisible={isVisible}
      selected={selected}
      handleSelect={handleSelect}
      toggleModal={toggleModal}
      handleLogout={handleLogout}
      pickImage={pickImage}
      image={image}
      user={user}
      like={(itemData && itemData.like) || []}
      reviews={(itemData && itemData.userReviews) || []}
      refetch={itemRefetch}
      loading={itemLoading}
    />
  );
};
export default ProfileContainer;

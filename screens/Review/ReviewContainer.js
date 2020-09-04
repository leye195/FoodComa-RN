import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReviewPresenter from "./ReviewPresenter";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/react-hooks";
import { SUBMIT_REVIEW } from "../../graqhql/mutation";
import { useDispatch } from "react-redux";
import { checkReview } from "../../reducers/user";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ReviewContainer = ({ route: { params } }) => {
  const navigation = useNavigation();
  const [foodId, setFoodId] = useState(params.id);
  const [foodName, setFoodName] = useState(params.name);
  const [rate, setRate] = useState(0);
  const [content, setContent] = useState("");
  const { user } = useSelector((state) => state.user);
  const [submitUserReview] = useMutation(SUBMIT_REVIEW);
  const dispatch = useDispatch();

  const onStarRatingPress = (rating) => {
    setRate(rating);
  };
  const onChangeReview = (text) => {
    setContent(text);
  };
  const onSubmitReview = () => {
    const { _id } = user;
    //console.log(_id, content, foodId, foodName, rate);
    submitUserReview({
      variables: { uid: _id, fid: foodId, content, rate },
    }).then(({ data }) => {
      const { submitReview } = data;
      if (submitReview) {
        dispatch(checkReview({ flag: true }));
        navigation.goBack();
      } else {
        alert("리뷰 제출을 실패했습니다. 다시 시도해주세요");
      }
    });
  };
  const pickImages = async () => {
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
          allsowsMultipleSelection: true,
        });
        if (!cancelled) {
          console.log(pickedUri);
          /*Platform.OS === "ios"
              ? pickedUri.replace("file://", "")
              : pickedUri;*/

          //setImage(uri);
          //uploadFile(uri);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ReviewPresenter
      foodId={foodId}
      foodName={foodName}
      content={content}
      starCount={rate}
      onStarRatingPress={onStarRatingPress}
      onChangeReview={onChangeReview}
      onSubmitReview={onSubmitReview}
      pickImages={pickImages}
    />
  );
};
export default ReviewContainer;

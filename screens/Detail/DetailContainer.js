import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_FOOD } from "../../graqhql/query";
import { LIKE_FOOD } from "../../graqhql/mutation";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import user, { checkReview } from "../../reducers/user";

const DetailContainer = ({ route: { params } }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: params.id,
    name: params.name,
    imgUrl: params.imgUrl,
    longitude: params.longitude,
    latitude: params.latitude,
    address: params.address,
    avg_rate: params.avg_rate,
    reviews: [],
  });
  const [isLiked, setIsLiked] = useState(false);
  const { loading, data: foodData, refetch } = useQuery(GET_FOOD, {
    variables: { id: params.id },
  });
  const [likeFood] = useMutation(LIKE_FOOD);
  const { user, isReviewSubmitted } = useSelector((state) => state.user);
  const onPressReview = () => {
    navigation.navigate("Review", {
      id: params.id,
      name: params.name,
    });
  };
  const onPressLike = async () => {
    await likeFood({
      variables: {
        uid: user._id,
        fid: params.id,
      },
    }).then(({ data }) => {
      const { likeFood } = data;
      if (likeFood) setIsLiked(true);
      else setIsLiked(false);
    });
    await refetch();
  };
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
    if (isReviewSubmitted) {
      refetch();
      dispatch(checkReview({ flag: false }));
    }
    if (foodData) {
      const {
        food: { like, reviews },
      } = foodData;
      const isInclude = like.find((item) => item._id === user._id);
      //console.log(isInclude);
      if (isInclude) setIsLiked(true);
      else setIsLiked(false);
      setData({ ...data, reviews, like });
    }
  }, [foodData, isReviewSubmitted]);
  return (
    <DetailPresenter
      loading={loading}
      data={data}
      getData={refetch}
      onPressLike={onPressLike}
      onPressReview={onPressReview}
      isLiked={isLiked}
    />
  );
};
export default DetailContainer;

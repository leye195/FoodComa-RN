import React, { useState, useEffect, useCallback, useRef } from "react";
import HomePresenter from "./HomePresenter";
import * as Location from "expo-location";
import { useQuery } from "@apollo/react-hooks";
import { GET_FOODS, CURRENT_USER } from "../../graqhql/query";
import { useDispatch } from "react-redux";
import { checkUser } from "../../reducers/user";
import Animated from "react-native-reanimated";

const HomeContainer = ({ navigation }) => {
  const [coords, setCoords] = useState({});
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [posY, setPosY] = useState(0);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const dispatch = useDispatch();
  const { loading, error, data, refetch } = useQuery(GET_FOODS, {
    variables: { typeName: "all" },
  });
  const { loading: userLoading, error: userError, data: userData } = useQuery(
    CURRENT_USER
  );

  const moveToDetail = (content) => {
    const {
      _id,
      name,
      imgUrl,
      avg_rate,
      longitude,
      latitude,
      address,
    } = content;
    //console.log(content);
    navigation.navigate("Detail", {
      id: _id,
      name,
      imgUrl,
      avg_rate,
      longitude,
      latitude,
      address,
    });
  };
  const onScroll = useCallback((e) => {
    const { contentOffset } = e.nativeEvent;
    setPosY(contentOffset.y);
  }, []);
  useEffect(() => {
    if (userData) {
      const { currentUser } = userData;
      dispatch(
        checkUser({
          _id: currentUser._id,
          email: currentUser.email,
          image: currentUser.image,
        })
      );
    }
  }, [userData]);
  return (
    <HomePresenter
      navigation={navigation}
      location={location}
      coords={coords}
      moveToDetail={moveToDetail}
      onScroll={onScroll}
      posY={posY}
      loading={loading}
      data={data}
      refetch={refetch}
      scrollY={scrollY}
    />
  );
};
export default HomeContainer;

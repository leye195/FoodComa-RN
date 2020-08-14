import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import * as Location from "expo-location";
import { useQuery } from "@apollo/react-hooks";
import { GET_FOODS } from "../../query";

const HomeContainer = ({ navigation }) => {
  const [coords, setCoords] = useState({});
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const { loading, error, data } = useQuery(GET_FOODS, {
    variables: { typeName: "all" },
  });
  const loadLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let {
      coords: { longitude, latitude },
    } = await Location.getCurrentPositionAsync({});
    const location = await Location.reverseGeocodeAsync({
      longitude,
      latitude,
    });
    if (location.length > 0) {
      setCoords({ longitude, latitude });
      setLocation(location[0]);
    }
    setLocationLoading(false);
  };
  const moveToMap = () => {
    navigation.navigate("Map", {
      coords,
    });
  };
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
    console.log(content);
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
  useEffect(() => {
    loadLocation();
  }, []);
  //console.log(detailError, detailData);
  return (
    <HomePresenter
      navigation={navigation}
      location={location}
      coords={coords}
      locationLoading={locationLoading}
      moveToMap={moveToMap}
      moveToDetail={moveToDetail}
      loading={loading || locationLoading}
      data={data}
    />
  );
};
export default HomeContainer;

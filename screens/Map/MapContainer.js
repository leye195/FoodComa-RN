import React, { useState, useLayoutEffect } from "react";
import MapPresenter from "./MapPresenter";

const MapContainer = ({ navigation, route: { params } }) => {
  const [region, setRegion] = useState({
    latitude: params.coords.latitude,
    longitude: params.coords.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.008,
  });
  useLayoutEffect(() => {
    const { latitude, longitude } = params.coords;
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.008,
    });
  }, []);
  return <MapPresenter region={region} />;
};
export default MapContainer;

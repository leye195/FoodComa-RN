import React, { useState, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import MapView, { Marker } from "react-native-maps";

const MapPaper = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const Map = ({ latitude, longitude, title }) => {
  const [region, setRegion] = useState({
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
    latitude,
    longitude,
  });
  return (
    <MapPaper
      region={region}
      zoomEnabled={false}
      zoomTapEnabled={false}
      showsUserLocation={true}
      rotateEnabled={false}
      scrollEnabled={false}
    >
      <Marker coordinate={{ latitude, longitude }} title={title} />
    </MapPaper>
  );
};
export default Map;

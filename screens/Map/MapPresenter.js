import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import styled from "styled-components";
import MapView from "react-native-maps";
const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const MapPresenter = ({ region }) => {
  return (
    <Container>
      <MapView
        style={styles.mapStyle}
        region={region}
        zoomEnabled={true}
        zoomTapEnabled={true}
        showsUserLocation={true}
      ></MapView>
    </Container>
  );
};
const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapPresenter;

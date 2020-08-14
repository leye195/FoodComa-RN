import React, { useState, useRef } from "react";
import { Animated } from "react-native";
import { getImage } from "../api";
const ImageLoader = ({ url }) => {
  const fadeAnim = useRef(new Animated.Value(1));
  const onLoad = () => {
    console.log("load");
    Animated.timing(fadeAnim.current, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  return <Animated.Image source={{ uri: getImage(url) }} />;
};
export default ImageLoader;

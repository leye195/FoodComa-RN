import React, { useState } from "react";
import { Image, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";
import store from "./store";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import "./firebase";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigations/StackNavigation";
//images
const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      //url
      return Image.prefetch(image);
    } else {
      //asset
      return Asset.fromModule(image).downloadAsync();
    }
  });
//icon fonts
const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      require("./assets/splash.png"),
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
    ]); // preload 할 이미지들
    const fonts = cacheFonts([
      Ionicons.font,
      MaterialCommunityIcons.font,
      FontAwesome5.font,
      MaterialIcons.font,
    ]); //활용할 font preload
    return Promise.all([...images, ...fonts]);
  };
  const handleFinish = () => {
    setIsReady(true);
  };

  return isReady ? (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StatusBar barStyle="white-content" />
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  ) : (
    <AppLoading startAsync={loadAssets} onFinish={handleFinish} />
  );
}

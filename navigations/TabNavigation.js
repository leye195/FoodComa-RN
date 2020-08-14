import React, { useState, useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import FoodScreen from "../screens/Food";
import ProfileScreen from "../screens/Profile";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Platform, Text } from "react-native";
import { ACTIVE_COLOR, INACTIVE_COLOR, YELLOW_COLOR } from "../constants/color";
import HeaderMore from "../components/Profile/HeaderMore";
import UserModal from "../components/Profile/UserModal";
const Tab = createBottomTabNavigator();

export default ({ navigation, route }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => {
    setIsVisible((cur) => !cur);
  };
  const getHeaderName = (state) => {
    if (state !== undefined) {
      return state.index === 3 ? state.routeNames[state.index] : "FoodComa";
    }
    return "FoodComa";
  };
  const getHeaderRight = (state) => {
    if (state !== undefined) {
      return state.index === 3 ? (
        <HeaderMore toggleModal={toggleModal} />
      ) : (
        <></>
      );
    }
    return <></>;
  };
  const getHeaderShown = (state) => {
    if (state !== undefined) {
      return state.index === 3 ? false : true;
    }
    return true;
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route.state),
      headerRight: () => {
        return getHeaderRight(route.state);
      },
      headerStyle: {
        backgroundColor: ACTIVE_COLOR,
      },
      headerShown: getHeaderShown(route.state),
    });
  }, [route]);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: ACTIVE_COLOR,
        inactiveTintColor: INACTIVE_COLOR,
        size: 20,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        id={0}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === "ios" ? "ios-home" : "md-home"}
              size={26}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={26}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              size={26}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={26}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
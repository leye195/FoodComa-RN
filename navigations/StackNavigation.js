import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/Detail";
import SearchScreen from "../screens/Search";
import MapScreen from "../screens/Map";
import ReviewScreen from "../screens/Review";
import LoginScreen from "../screens/Login";
import Tabs from "./TabNavigation";
import { ACTIVE_COLOR } from "../constants/color";

const Stack = createStackNavigator();
export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: ACTIVE_COLOR,
        borderBottomColor: ACTIVE_COLOR,
        shadowColor: ACTIVE_COLOR,
      },
      headerBackTitleVisible: false,
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="FoodComa" component={Tabs} />
    <Stack.Screen name="Detail" component={DetailScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    <Stack.Screen name="Map" component={MapScreen} />
    <Stack.Screen name="Review" component={ReviewScreen} />
  </Stack.Navigator>
);

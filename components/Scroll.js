import React, { useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
//import { height } from "../constants/layout";
const Scroll = ({ children, getData }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await getData();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          tintColor={"white"}
          onRefresh={onRefresh}
        />
      }
    >
      {children}
    </ScrollView>
  );
};
export default Scroll;

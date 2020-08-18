import React, { useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
//import { height } from "../constants/layout";
const Scroll = ({ children, getData }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await getData();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
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

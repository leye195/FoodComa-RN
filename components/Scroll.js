import React, { useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
const Scroll = ({ children, getData, onScroll = null }) => {
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
      onScroll={onScroll !== null && onScroll}
      //onScroll={onScroll !== null && onScroll}
      scrollEventThrottle={16}
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

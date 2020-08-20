import React, { useState } from "react";
import { FlatList } from "react-native";
import Food from "./Profile/Food";

const FlatScroll = ({ data, getData, Item }) => {
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
    <FlatList
      keyExtractor={(item) => item._id}
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      refreshing={refreshing}
      onRefresh={onRefresh}
      contentContainerStyle={{ paddingBottom: 150 }}
      windowSize={2}
    />
  );
};
export default FlatScroll;

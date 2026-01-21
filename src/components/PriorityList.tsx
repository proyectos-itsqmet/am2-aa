import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { priorityMenu } from "../constants/priorityMenu";
import PriorityItemList from "./PriorityItemList";

export default function PriorityList() {
  return (
    <FlatList
      horizontal={true}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      data={priorityMenu}
      renderItem={({ item }) => <PriorityItemList item={item} />}
    />
  );
}

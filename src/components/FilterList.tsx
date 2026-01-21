import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FilterMenuOptions } from "../constants/filterMenu";
import FilterButton from "./FilterButton";

export default function FilterList() {
  return (
    <FlatList
      data={FilterMenuOptions}
      horizontal={true}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      renderItem={({ item }) => <FilterButton title={item} selected="Todas" />}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexGrow: 0,
    alignSelf: "flex-start",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});

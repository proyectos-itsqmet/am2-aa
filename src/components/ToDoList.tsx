import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { ToDoType } from "../types/ToDoType";
import ToDoItem from "./ToDoItem";

interface ToDoListProps {
  data?: ToDoType[];
  onCompleteItem?: (item: ToDoType) => void;
}

export default function ToDoList({ data, onCompleteItem }: ToDoListProps) {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => (
        <ToDoItem item={item} onCompleteItem={onCompleteItem} />
      )}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
});

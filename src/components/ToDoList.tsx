import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { ToDoType } from "../types/ToDoType";
import ToDoItem from "./ToDoItem";

const data: ToDoType[] = [
  {
    id: "1",
    title: "Comprar víveres",
    completed: false,
    createdAt: new Date(),
    priority: "Media",
  },
  {
    id: "2",
    title: "Llevar el auto al taller",
    completed: true,
    createdAt: new Date(),
    completedAt: new Date(),
    priority: "Alta",
  },
  {
    id: "3",
    title: "Ir al cine con amigos",
    completed: false,
    createdAt: new Date(),
    priority: "Baja",
  },
];

export default function ToDoList() {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={({ item }) => <ToDoItem item={item} />}
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

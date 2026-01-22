import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { priorityMenu } from "../constants/priorityMenu";
import PriorityItemList from "./PriorityItemList";

interface PriorityListProps {
  onSelectPriority?: (priority: string) => void;
  selectedPriority?: string;
}

export default function PriorityList({
  onSelectPriority,
  selectedPriority,
}: PriorityListProps) {
  return (
    <FlatList
      horizontal={true}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      data={priorityMenu}
      renderItem={({ item }) => (
        <PriorityItemList
          item={item}
          isSelected={selectedPriority === item.type}
          onPress={() => onSelectPriority?.(item.type)}
        />
      )}
    />
  );
}

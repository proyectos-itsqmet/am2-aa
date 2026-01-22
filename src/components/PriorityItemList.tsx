import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { PriorityType } from "../types/PriorityType";

interface PriorityItemListProps {
  item: PriorityType;
  isSelected?: boolean;
  onPress?: () => void;
}

export default function PriorityItemList({
  item,
  isSelected,
  onPress,
}: PriorityItemListProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: item.backgroundColor,
          borderColor: item.borderColor,
        },
        isSelected && styles.selected,
      ]}
    >
      {item.priority === "Alta" ? (
        <MaterialIcons
          name="notifications-active"
          size={16}
          color={Colors.red}
        />
      ) : item.priority === "Media" ? (
        <MaterialIcons name="priority-high" size={16} color={Colors.orange} />
      ) : (
        <Octicons name="dot-fill" size={16} color={Colors.blue} />
      )}
      <Text style={{ color: Colors.textSecondary, fontWeight: "semibold" }}>
        {item.priority}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    paddingVertical: 6,
    paddingLeft: 12,
    paddingRight: 16,
  },
  selected: {
    borderWidth: 2,
  },
});

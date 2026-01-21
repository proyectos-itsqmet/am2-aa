import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

interface FilterButtonProps {
  title: string;
  selected: string;
}

export default function FilterButton({ title, selected }: FilterButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            selected === title ? Colors.primary : Colors.secondary,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: selected === title ? Colors.white : Colors.textSecondary,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
});

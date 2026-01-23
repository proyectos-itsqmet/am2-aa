import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";

interface FilterButtonProps {
  title: string;
  selected: string;
  onPress?: () => void;
}

export default function FilterButton({
  title,
  selected,
  onPress,
}: FilterButtonProps) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor:
            selected === title ? colors.primary : colors.secondary,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: selected === title ? colors.white : colors.textSecondary,
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

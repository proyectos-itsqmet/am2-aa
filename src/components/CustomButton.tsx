import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

interface ButtonProps {
  title?: string;
  onPress: () => void;
  backgroundColor?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export default function CustomButton({
  title,
  onPress,
  backgroundColor,
  icon,
  disabled,
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled ?? false}
      onPress={onPress}
      style={[
        styles.container,
        disabled && { backgroundColor: Colors.softGray },
        backgroundColor && { backgroundColor },
      ]}
    >
      {icon}
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default function CustomButton({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  title: {
    textAlign: "center",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

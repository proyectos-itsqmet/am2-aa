import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

interface FloatingButtonProps {
  onPress: () => void;
}

export default function FloatingButton({ onPress }: FloatingButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons name="add" size={32} color={Colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 50,
    width: 50,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

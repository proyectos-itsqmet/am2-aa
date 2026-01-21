import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "../constants/colors";

export default function Logo() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="task-alt" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    padding: 16,
    borderRadius: 16,
    marginVertical: 50,
  },
  icon: {
    color: Colors.primary,
    fontSize: 24,
  },
});

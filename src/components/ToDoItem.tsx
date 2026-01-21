import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { ToDoType } from "../types/ToDoType";

interface ToDoItemProps {
  item: ToDoType;
}

export default function ToDoItem({ item }: ToDoItemProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: item.completed ? "#fdfdfd" : Colors.secondary,
          borderColor: item.completed ? "#eeecec" : "#f0b0005d",
        },
      ]}
    >
      <TouchableOpacity disabled={item.completed} onPress={() => {}}>
        {item.completed ? (
          <Octicons name="check-circle-fill" size={24} color={Colors.green} />
        ) : (
          <Octicons name="circle" size={24} color={Colors.softGray} />
        )}
      </TouchableOpacity>
      <View>
        <Text
          style={{
            textDecorationLine: item.completed ? "line-through" : "none",
            textDecorationColor: Colors.textSecondary,
            color: item.completed ? Colors.textSecondary : Colors.textPrimary,
            fontWeight: "400",
            fontSize: 16,
          }}
        >
          {item.title}
        </Text>
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <Text style={{ color: Colors.textSecondary }}>
            {item.createdAt.toLocaleDateString()}
          </Text>
          <Octicons name="dot-fill" size={12} color={Colors.textSecondary} />
          <Text
            style={{
              color:
                item.priority === "Alta"
                  ? Colors.red
                  : item.priority === "Media"
                    ? Colors.orange
                    : Colors.green,
              fontWeight: "400",
            }}
          >
            {item.priority}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});

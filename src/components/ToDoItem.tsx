import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { ToDoType } from "../types/ToDoType";
import { useTheme } from "../context/ThemeContext";

interface ToDoItemProps {
  item: ToDoType;
  onCompleteItem?: (item: ToDoType) => void;
}

export default function ToDoItem({ item, onCompleteItem }: ToDoItemProps) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: item.completed
            ? colors.background
            : colors.secondary,
          borderColor: item.completed ? colors.softGray : "#f0b0005d",
        },
      ]}
    >
      <TouchableOpacity
        disabled={item.completed}
        onPress={() => onCompleteItem?.(item)}
      >
        {item.completed ? (
          <Octicons name="check-circle-fill" size={24} color={colors.green} />
        ) : (
          <Octicons name="circle" size={24} color={colors.softGray} />
        )}
      </TouchableOpacity>
      <View>
        <Text
          style={{
            textDecorationLine: item.completed ? "line-through" : "none",
            textDecorationColor: colors.textSecondary,
            color: item.completed ? colors.textSecondary : colors.textPrimary,
            fontWeight: "400",
            fontSize: 16,
          }}
        >
          {item.title}
        </Text>
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <Text style={{ color: colors.textSecondary }}>
            {new Date(item.createdAt).toISOString().split("T")[0]}
          </Text>
          <Octicons name="dot-fill" size={12} color={colors.textSecondary} />
          <Text
            style={{
              color:
                item.priority === "Alta"
                  ? colors.red
                  : item.priority === "Media"
                    ? colors.orange
                    : colors.green,
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

import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

interface AvatarProps {
  size: number;
  onPress?: () => void;
}

export default function Avatar({ size, onPress }: AvatarProps) {
  return (
    <TouchableOpacity
      style={[styles.avatar, { width: size, height: size }]}
      disabled={!onPress}
      onPress={onPress}
    >
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://4kwallpapers.com/images/walls/thumbs_3t/4409.jpg",
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 9999,
    backgroundColor: Colors.secondary,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

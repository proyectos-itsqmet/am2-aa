import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import { Colors } from "../constants/colors";
import CustomButton from "./CustomButton";

interface ProfileCardProps {
  navigation?: any;
}

export default function ProfileCard({ navigation }: ProfileCardProps) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <Avatar size={80} navigation={navigation} />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: Colors.textPrimary,
            }}
          >
            John Doe
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: Colors.textPrimary,
            }}
          >
            Correo: jdoe@correo.com
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: Colors.textPrimary,
            }}
          >
            Edad: 32 Años
          </Text>
        </View>
      </View>
      <CustomButton
        title="Restablecer contraseña"
        onPress={() => {}}
        backgroundColor={Colors.blue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    backgroundColor: Colors.secondary,
    padding: 20,
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});

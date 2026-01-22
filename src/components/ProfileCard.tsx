import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import { Colors } from "../constants/colors";
import CustomButton from "./CustomButton";
import { UserType } from "../types/User";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";

interface ProfileCardProps {
  navigation?: any;
  user: UserType | undefined;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  function passwordReset() {
    if (user?.email === undefined) {
      Alert.alert(
        "Error",
        "No se pudo restablecer la contraseña. Correo electrónico no disponible.",
      );
      return;
    }

    sendPasswordResetEmail(auth, user?.email)
      .then(() => {
        Alert.alert(
          "Éxito",
          "Por favor revisa tu correo para restablecer tu contraseña.",
        );
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <Avatar size={80} />
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: Colors.textPrimary,
            }}
          >
            {user?.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: Colors.textPrimary,
            }}
          >
            Correo: {user?.email}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "300",
              color: Colors.textPrimary,
            }}
          >
            Edad: {user?.age} Años
          </Text>
        </View>
      </View>
      <CustomButton
        title="Restablecer contraseña"
        onPress={passwordReset}
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

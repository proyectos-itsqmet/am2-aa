import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../css/styles";
import Logo from "../components/Logo";
import { Colors } from "../constants/colors";
import LoginForm from "../components/LoginForm";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={[globalStyles.mainContainer, styles.container]}>
      <Logo />
      <Text style={styles.title}>TaskHub</Text>
      <Text style={styles.subtitle}>
        Gestión de tareas en tiempo real con autenticación y sincronización.
      </Text>
      <LoginForm navigation={navigation} />
      <View style={{ flexDirection: "row", gap: 5, marginTop: 20 }}>
        <Text style={{ color: Colors.textSecondary, fontWeight: "300" }}>
          No tienes una cuenta?
        </Text>
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ color: Colors.primary }}
        >
          Regístrate
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: "center",
    marginVertical: 20,
  },
});

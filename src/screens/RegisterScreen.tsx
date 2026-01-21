import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../css/styles";
import { Colors } from "../constants/colors";
import RegisterForm from "../components/RegisterForm";

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={[globalStyles.mainContainer, styles.container]}>
      <Text style={styles.title}>Crear una cuenta</Text>
      <Text style={styles.subtitle}>
        Crea tu cuenta y lleva el control de tus tareas.
      </Text>
      <RegisterForm navigation={navigation} />
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text style={{ color: Colors.textSecondary, fontWeight: "300" }}>
          ¿Ya tienes una cuenta?
        </Text>
        <Text
          onPress={() => navigation.replace("Login")}
          style={{ color: Colors.primary }}
        >
          Inicia sesión
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    alignSelf: "flex-start",
    paddingHorizontal: 40,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginVertical: 20,
    textAlign: "left",
    alignSelf: "flex-start",
    paddingHorizontal: 40,
  },
});

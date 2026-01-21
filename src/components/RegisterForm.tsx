import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { globalStyles } from "../css/styles";
import CustomButton from "./CustomButton";

interface RegisterProps {
  navigation: any;
}

export default function RegisterForm({ navigation }: RegisterProps) {
  return (
    <View style={styles.container}>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Nombre Completo</Text>
        <TextInput style={globalStyles.input} placeholder="Nombre Completo" />
      </View>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Email</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="usuario@correo.com"
        />
      </View>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Edad</Text>
        <TextInput style={globalStyles.input} placeholder="Edad" />
      </View>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Contraseña</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="* * * * * *"
          secureTextEntry={true}
        />
      </View>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Confirmar Contraseña</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="* * * * * *"
          secureTextEntry={true}
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <CustomButton
          title="Crear cuenta"
          onPress={() => navigation.replace("Login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 40,
    paddingHorizontal: 40,
    gap: 20,
  },
});

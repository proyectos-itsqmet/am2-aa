import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../css/styles";
import CustomButton from "./CustomButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { ref, set } from "firebase/database";

interface RegisterProps {
  navigation: any;
}

export default function RegisterForm({ navigation }: RegisterProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function register() {
    if (
      name.trim() === "" ||
      age.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      Alert.alert(
        "Advertencia",
        "Por favor completa todos los campos para crear una cuenta.",
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "Error",
        "Las contraseñas no coinciden. Por favor, inténtalo de nuevo.",
      );
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await createUserProfile(user.uid);

        navigation.replace("Login");
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  }

  async function createUserProfile(uid: string) {
    await set(ref(db, "todoUsers/" + uid), {
      name: name,
      age: age,
      email: email,
    });
  }

  return (
    <View style={styles.container}>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Nombre Completo</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Nombre Completo"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Edad</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="Edad"
          value={age}
          onChangeText={setAge}
        />
      </View>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Email</Text>
        <TextInput
          style={globalStyles.input}
          keyboardType="email-address"
          placeholder="usuario@correo.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Contraseña</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="* * * * * *"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Confirmar Contraseña</Text>
        <TextInput
          style={globalStyles.input}
          placeholder="* * * * * *"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <CustomButton
          disabled={
            password !== confirmPassword ||
            password === "" ||
            confirmPassword === ""
          }
          title="Crear cuenta"
          onPress={register}
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

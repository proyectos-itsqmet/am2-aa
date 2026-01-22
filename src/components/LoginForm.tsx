import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../css/styles";
import CustomButton from "./CustomButton";
import { Colors } from "../constants/colors";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/config";

interface LoginProps {
  navigation: any;
}

export default function LoginForm({ navigation }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert(
        "Advertencia",
        "Por favor ingresa tu correo electrónico y contraseña para iniciar sesión.",
      );

      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  }

  function passwordReset() {
    if (email.trim() === "") {
      Alert.alert(
        "Advertencia",
        "Por favor ingresa tu correo electrónico para restablecer tu contraseña.",
      );

      return;
    }

    sendPasswordResetEmail(auth, email)
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
      <TouchableOpacity onPress={passwordReset}>
        <Text style={{ textAlign: "right", color: Colors.textSecondary }}>
          ¿Olvidaste tu contraseña?
        </Text>
      </TouchableOpacity>
      <View style={{ marginVertical: 20 }}>
        <CustomButton title="Iniciar sesión" onPress={login} />
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

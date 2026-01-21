import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { globalStyles } from "../css/styles";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import { Colors } from "../constants/colors";
import ProfileCard from "../components/ProfileCard";

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={[globalStyles.mainContainer, styles.container]}>
      <View style={{ width: "100%" }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Octicons name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Perfil</Text>
        </View>
        <ProfileCard />
      </View>
      <View style={{ marginBottom: 40 }}>
        <CustomButton
          onPress={() => {}}
          title="Cerrar sesión"
          backgroundColor={Colors.red}
          icon={<MaterialIcons name="logout" size={24} color={Colors.white} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  backButton: {
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    position: "absolute",
    left: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});

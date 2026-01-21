import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { globalStyles } from "../css/styles";
import { Colors } from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import FilterList from "../components/FilterList";
import ToDoList from "../components/ToDoList";
import Avatar from "../components/Avatar";
import FloatingButton from "../components/FloatingButton";
import BottomSheetModal from "../components/BottomSheetModal";

export default function HomeScreen({ navigation }: any) {
  const modalRef = useRef<any>(null);
  return (
    <View style={[globalStyles.mainContainer, styles.container]}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Avatar
            navigation={navigation}
            size={50}
            onPress={() => navigation.navigate("Profile")}
          />
          <View>
            <Text style={{ color: Colors.textSecondary }}>Hola,</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: Colors.textSecondary,
              }}
            >
              Gerardo
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <MaterialIcons
            name="notifications-none"
            style={styles.notificationIcon}
          />
          <MaterialIcons name="dark-mode" style={styles.notificationIcon} />
          {/* <MaterialIcons name="light-mode" style={styles.notificationIcon} /> */}
        </View>
      </View>
      <FilterList />
      <ToDoList />
      <BottomSheetModal ref={modalRef} />
      <FloatingButton onPress={() => modalRef.current?.open()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationIcon: {
    fontSize: 24,
    color: Colors.textPrimary,
  },
});

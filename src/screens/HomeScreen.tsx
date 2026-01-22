import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { globalStyles } from "../css/styles";
import { Colors } from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import FilterList from "../components/FilterList";
import ToDoList from "../components/ToDoList";
import Avatar from "../components/Avatar";
import FloatingButton from "../components/FloatingButton";
import BottomSheetModal from "../components/BottomSheetModal";
import { onValue, ref } from "firebase/database";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { UserType } from "../types/User";
import { ToDoType } from "../types/ToDoType";

export default function HomeScreen({ navigation }: any) {
  const modalRef = useRef<any>(null);
  const [user, setUser] = useState<UserType>();
  const [todoList, setTodoList] = useState<ToDoType[]>();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        await getProfile(uid);
      } else {
        console.log("Error al cargar perfil");
      }
    });
  }

  async function getProfile(uid: string) {
    const starCountRef = ref(db, "todoUsers/" + uid);
    onValue(starCountRef, async (snapshot) => {
      const data = snapshot.val();

      setUser(data);

      await getTodoList(uid);
    });
  }

  async function getTodoList(uid: string) {
    try {
      const starCountRef = ref(db, "todoList/" + uid);

      onValue(starCountRef, (snapshot) => {
        const dataList = snapshot.val();

        console.log(dataList);

        // setTodoList(dataList);
      });
    } catch (error) {
      console.error("Error al obtener la lista de tareas: ", error);
    }
  }

  return (
    <View style={[globalStyles.mainContainer, styles.container]}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Avatar size={50} onPress={() => navigation.navigate("Profile")} />
          <View>
            <Text style={{ color: Colors.textSecondary }}>Hola,</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: Colors.textSecondary,
              }}
            >
              {user?.name}
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
      <ToDoList data={todoList} />
      <BottomSheetModal
        ref={modalRef}
        onClose={(data) => {
          if (data) {
            if (data) {
              getTodoList(user!.uid);
            }
          }
        }}
        uid={user?.uid}
      />
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

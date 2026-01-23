import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { globalStyles } from "../css/styles";
import { MaterialIcons } from "@expo/vector-icons";
import FilterList from "../components/FilterList";
import ToDoList from "../components/ToDoList";
import Avatar from "../components/Avatar";
import FloatingButton from "../components/FloatingButton";
import BottomSheetModal from "../components/BottomSheetModal";
import { onValue, ref, set } from "firebase/database";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { UserType } from "../types/User";
import { ToDoType } from "../types/ToDoType";
import { useTheme } from "../context/ThemeContext";

export default function HomeScreen({ navigation }: any) {
  const modalRef = useRef<any>(null);
  const [user, setUser] = useState<UserType>();
  const [todoList, setTodoList] = useState<ToDoType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("Todas");
  const { isDarkMode, toggleTheme, colors } = useTheme();

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

        if (dataList && dataList.todos) {
          // console.log(dataList.todos);
          setTodoList(dataList.todos);
        }
      });
    } catch (error) {
      console.error("Error al obtener la lista de tareas: ", error);
    }
  }

  async function completeItem(item: ToDoType): Promise<boolean> {
    try {
      if (!user?.uid) return false;

      const updatedTodos = todoList.map((todo) =>
        todo.id === item.id
          ? {
              ...todo,
              completed: true,
              completedAt: new Date().toString(),
            }
          : todo,
      );

      await set(ref(db, "todoList/" + user.uid), {
        todos: updatedTodos,
      });

      return true;
    } catch (error) {
      console.error("Error al completar la tarea: ", error);
      return false;
    }
  }

  const onCompleteItem = async (item: ToDoType) => {
    const success = await completeItem(item);
    if (success && user?.uid) {
      await getTodoList(user.uid);
    }
  };

  //! Filtrar
  const getFilteredTodos = () => {
    if (selectedFilter === "Completadas") {
      return todoList.filter((todo) => todo.completed);
    } else if (selectedFilter === "Pendientes") {
      return todoList.filter((todo) => !todo.completed);
    }
    return todoList;
  };

  return (
    <View
      style={[
        globalStyles.mainContainer,
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Avatar size={50} onPress={() => navigation.navigate("Profile")} />
          <View>
            <Text style={{ color: colors.textSecondary }}>Hola,</Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.textSecondary,
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
          {/* <MaterialIcons
            name="notifications-none"
            style={styles.notificationIcon}
          /> */}
          <TouchableOpacity onPress={toggleTheme}>
            <MaterialIcons
              name={isDarkMode ? "light-mode" : "dark-mode"}
              style={[styles.notificationIcon, { color: colors.textPrimary }]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FilterList
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      <ToDoList data={getFilteredTodos()} onCompleteItem={onCompleteItem} />
      <BottomSheetModal
        ref={modalRef}
        todos={todoList}
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
  },
});

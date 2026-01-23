import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import CustomButton from "./CustomButton";
import { Colors } from "../constants/colors";
import { globalStyles } from "../css/styles";
import { FontAwesome } from "@expo/vector-icons";
import PriorityList from "./PriorityList";
import { set, ref as dbRef } from "firebase/database";
import { db } from "../firebase/config";
import { ToDoType } from "../types/ToDoType";

interface BottomSheetModalProps {
  onPress?: () => void;
  onClose?: (value: true | null) => void;
  uid?: string;
  todos: ToDoType[];
}

const BottomSheetModal = forwardRef((props: BottomSheetModalProps, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Baja");

  useImperativeHandle(ref, () => ({
    open: () => setModalVisible(true),
    close: () => {
      setModalVisible(false);
      props.onClose?.(null);
      setTitle("");
      setPriority("Baja");
    },
  }));

  async function postTodo(uid: string): Promise<boolean> {
    try {
      await set(dbRef(db, "todoList/" + uid), {
        todos: [
          {
            id: props.todos.length,
            title: title,
            completed: false,
            createdAt: new Date().toString(),
            completedAt: null,
            priority: priority,
          },
          ...props.todos,
        ],
      });

      return true;
    } catch (error) {
      console.error("Error al agregar todo: ", error);
      return false;
    }
  }

  const onSubmit = async () => {
    if (title.trim() && props.uid) {
      const success = await postTodo(props.uid);

      if (success) {
        props.onClose?.(true);
        setModalVisible(false);
        setTitle("");
        setPriority("Baja");
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <View style={styles.modalView}>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <TextInput
                  style={[globalStyles.input, { flex: 1 }]}
                  placeholder="Agregar una tarea"
                  value={title}
                  onChangeText={setTitle}
                />
                <CustomButton
                  onPress={onSubmit}
                  backgroundColor={Colors.green}
                  icon={
                    <FontAwesome name="send" size={20} color={Colors.white} />
                  }
                />
              </View>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Text style={{ color: Colors.textPrimary, fontWeight: "bold" }}>
                  Prioridad:
                </Text>
                <PriorityList
                  onSelectPriority={setPriority}
                  selectedPriority={priority}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

BottomSheetModal.displayName = "BottomSheetModal";
export default BottomSheetModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#00000080",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

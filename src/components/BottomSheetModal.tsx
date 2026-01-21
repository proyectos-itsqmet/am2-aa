import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import CustomButton from "./CustomButton";
import { Colors } from "../constants/colors";
import { globalStyles } from "../css/styles";
import { FontAwesome } from "@expo/vector-icons";
import PriorityList from "./PriorityList";

const BottomSheetModal = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setModalVisible(true),
    close: () => setModalVisible(false),
  }));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <TextInput
              style={[globalStyles.input, { flex: 1 }]}
              placeholder="Agregar una tarea"
            />
            <CustomButton
              onPress={() => setModalVisible(false)}
              backgroundColor={Colors.green}
              icon={<FontAwesome name="send" size={20} color={Colors.white} />}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={{ color: Colors.textPrimary, fontWeight: "bold" }}>
              Prioridad:
            </Text>
            <PriorityList />
          </View>
        </View>
      </View>
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
    borderRadius: 20,
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

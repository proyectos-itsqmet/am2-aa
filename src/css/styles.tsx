import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const globalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    gap: 8,
  },
  input: {
    borderColor: Colors.softGray,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "400",
  },
});

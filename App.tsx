import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainNav from "./src/navigation/MainNavigator";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <MainNav />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

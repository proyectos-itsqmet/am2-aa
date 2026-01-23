import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainNav from "./src/navigation/MainNavigator";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "./src/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <MainNav />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

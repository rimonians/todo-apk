import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Main from "./components/Main";
import TodoProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoProvider>
        <StatusBar backgroundColor="#3908bf" style="auto" />
        <Main />
      </TodoProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

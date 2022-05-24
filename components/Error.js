import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useTodo from "../hooks/useTodo";

const Error = () => {
  const { error, getTodos } = useTodo();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.errorText}>{error}</Text>
      <TouchableOpacity onPress={() => getTodos()}>
        <Text style={styles.errorButton}>Reload App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  errorButton: {
    backgroundColor: "#3908bf",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

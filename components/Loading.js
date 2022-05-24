import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <Ionicons style={styles.loadingIcon} name="reload" />
      <Text style={styles.loadingText}>Please wait a bit</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingIcon: {
    color: "#3908bf",
    fontSize: 36,
    fontWeight: "bold",
  },
  loadingText: {
    marginTop: 10,
    fontWeight: "bold",
  },
});

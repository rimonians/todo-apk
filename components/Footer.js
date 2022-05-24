import { StyleSheet, View, Text } from "react-native";
import React from "react";
import * as Linking from "expo-linking";

const Footer = () => {
  const openLink = (href) => {
    Linking.openURL(href);
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Made with ❤️ by -{" "}
        <Text
          style={styles.author}
          onPress={() => openLink("https://www.facebook.com/rimonians")}
        >
          Rimon Ahmed
        </Text>
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    padding: 20,
  },
  footerText: {
    color: "#222",
  },
  author: {
    color: "#3908bf",
    fontWeight: "bold",
  },
});

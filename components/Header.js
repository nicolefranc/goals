import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
    // <Text style={styles.title}>alright</Text>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 20,
    backgroundColor: "#333"
  },
  title: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    paddingHorizontal: 20
  }
});

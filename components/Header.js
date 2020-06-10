import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Goals</Text>
    </View>
    // <Text style={styles.title}>alright</Text>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 130,
    paddingTop: 60,
    backgroundColor: "#333"
  },
  title: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    paddingHorizontal: 20
  }
});

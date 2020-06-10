import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function GoalDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Details" />
      <View style={styles.content}>
        <Text>{navigation.getParam("goal")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    padding: 20
  }
});

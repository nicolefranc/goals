import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default GoalItem = ({ item, delFn, editFn }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{item.goal}</Text>
      <TouchableOpacity style={styles.delete} onPress={() => delFn(item.key)}>
        <AntDesign name="close" size={24} color="#aaa" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#eee",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#eee",
    shadowOpacity: 0.5,
    shadowRadius: 2
  },
  title: {
    flex: 10,
    fontSize: 20,
    fontWeight: "500"
  },
  edit: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 10
  },
  delete: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 2
  }
});

import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Button,
  FlatList,
  TextInput
} from "react-native";
import Home from "./screens/Home";
import GoalItem from "./components/GoalItem";
import Navigator from "./routes/HomeStack";

export default function App() {
  return <Navigator />;
}

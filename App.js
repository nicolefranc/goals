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
import Header from "./components/Header";
import GoalItem from "./components/GoalItem";

const goalsList = [
  {
    key: "2",
    goal: "Create a React Native app"
  },
  {
    key: "1",
    goal: "Learn React Native"
  }
];

export default function App() {
  const [goals, setGoals] = useState(goalsList);
  const [triggerAddInp, setTriggerAddInp] = useState(false);
  const [input, setInput] = useState(null);

  const inputHandler = inp => {
    setInput(inp);
  };

  const addGoal = () => {
    let newKey = Math.random().toString();
    let newGoal = {
      key: newKey,
      goal: input
    };

    setGoals(prevGoals => {
      return [newGoal, ...prevGoals];
    });
    setTriggerAddInp(false);
  };

  const cancelAdd = () => {
    setTriggerAddInp(false);
  };

  const delGoal = key => {
    setGoals(prevGoals => {
      return prevGoals.filter(goal => goal.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {triggerAddInp && (
            <TextInput
              style={styles.textbox}
              placeholder="My new goal is..."
              onChangeText={inputHandler}
            />
          )}
          <View style={styles.addActions}>
            <View style={styles.addBtn}>
              <Button
                onPress={triggerAddInp ? addGoal : () => setTriggerAddInp(true)}
                title={triggerAddInp ? "Add Goal" : "New Goal"}
                color="#fff"
              />
            </View>
            {triggerAddInp && (
              <View style={styles.cancelBtn}>
                <Button onPress={cancelAdd} title="Cancel" color="#fff" />
              </View>
            )}
          </View>
          <View style={styles.goalList}>
            <FlatList
              data={goals}
              renderItem={({ item }) => {
                return <GoalItem item={item} delFn={delGoal} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  },
  textbox: {
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    fontSize: 16
  },
  addActions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  addBtn: {
    flex: 1,
    backgroundColor: "#029478",
    padding: 10
  },
  cancelBtn: {
    backgroundColor: "#ff605c",
    padding: 10
  },
  goalList: {
    // borderWidth: 1,
    // borderColor: "#333",
    flex: 1,
    marginTop: 30
  }
});

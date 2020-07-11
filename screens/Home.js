import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import Header from "../components/Header";
import GoalItem from "../components/GoalItem";

const goalsList = [
  {
    key: "2",
    goal: "Create a React Native app",
    category: "Work",
    achieveBy: "11 July 2020",
    notes: "This is the notes section",
    reminder: "Remind 3 days before"
  },
  {
    key: "1",
    goal: "Learn React Native",
    category: "Work",
    achieveBy: "11 July 2020",
    notes: "This is the notes section",
    reminder: "Remind 3 days before"
  }
];

export default function Home({ navigation }) {
  const [goals, setGoals] = useState(goalsList);
  const [triggerAddInp, setTriggerAddInp] = useState(false);
  const [input, setInput] = useState("");

  const inputHandler = inp => {
    setInput(inp);
  };

  const addGoal = () => {
    let newKey = Math.random().toString();
    let newGoal = {
      key: newKey,
      goal: input,
      category: "Work",
      achieveBy: "11 July 2020",
      notes: "This is the notes section",
      reminder: "Remind 3 days before"
    };

    if (input.length > 0) {
      setGoals(prevGoals => {
        return [newGoal, ...prevGoals];
      });
      setInput("");
      setTriggerAddInp(false);
    } else {
      Alert.alert("Oops!", "Goal item cannot be empty. Try again.", [
        { text: "Ok", onPress: () => console.log("Closing alert...") }
      ]);
    }
  };

  const cancelAdd = () => {
    setTriggerAddInp(false);
  };

  const editGoal = (key, valueToEdit, value) => {
    console.log("Editing key: " + key);
    // retrieve the goal based on key
    const index = goals.findIndex(goal => goal.key == key);
    const newGoals = [...goals];
    // make changes
    const goal = newGoals[index];
    goal[valueToEdit] = value;
    console.log("New Goal: ");
    console.log(goal);
    setGoals(newGoals);
    console.log("All GOals: ");
    console.log(goals);
  };

  const delGoal = key => {
    setGoals(prevGoals => {
      return prevGoals.filter(goal => goal.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Goals" />
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
                return (
                  // <TouchableOpacity
                  //   onPress={() => navigation.navigate("GoalDetail", item)}
                  // >
                  <GoalItem
                    key={item.key}
                    item={item}
                    funcs={[editGoal, delGoal]}
                    nav={navigation}
                  />
                  // </TouchableOpacity>
                );
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
    flex: 1,
    marginTop: 30
  }
});

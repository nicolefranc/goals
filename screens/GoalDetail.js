import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "../components/Header";

export default function GoalDetail({ navigation }) {
  const key = navigation.getParam("detail")["key"];
  const [goal, setGoal] = useState([
    navigation.getParam("detail")["goal"],
    false
  ]);
  const [category, setCategory] = useState(
    navigation.getParam("detail")["category"]
  );
  const [achieveBy, setAchieveBy] = useState(
    navigation.getParam("detail")["achieveBy"]
  );
  const [reminder, setReminder] = useState(
    navigation.getParam("detail")["reminder"]
  );
  const [notes, setNotes] = useState(navigation.getParam("detail")["notes"]);

  // Functions
  const editFunc = navigation.getParam("funcs")[0];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header title="Details" />
        <View style={styles.content}>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Goal Title</Text>
            {goal[1] ? (
              <TextInput
                style={styles.textInput}
                defaultValue={goal[0]}
                onChangeText={inp => setGoal([inp, true])}
                returnKeyType="done"
                onSubmitEditing={() => editFunc(key, "goal", goal[0])}
              />
            ) : (
              <Text
                style={styles.detailValue}
                onPress={() => setGoal([goal[0], true])}
              >
                {goal[0]}
              </Text>
            )}
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Category</Text>
            <Text style={styles.detailValue}>{category}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Achieve By</Text>
            <Text style={styles.detailValue}>{achieveBy}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Reminder</Text>
            <Text style={styles.detailValue}>{reminder}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>Notes</Text>
            <Text style={styles.detailValue}>{notes}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.buttons}>
            <Button style={styles.button} title="Delete" />
            <Button style={styles.button} title="Achieved" />
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
  detailRow: {
    // borderWidth: 2,
    // borderColor: "#000",
    paddingVertical: 20
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase"
  },
  detailValue: {
    fontSize: 20,
    marginTop: 10
  },
  textInput: {
    fontSize: 20,
    marginTop: 10
    // borderWidth: 2,
    // borderColor: "red",
    // paddingVertical: 10
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
    // marginBottom: 36 // this may not work in android.
    // in container: { paddingBottom: check.isAndroid ? 14 : 0 }
  },
  buttons: {
    // flex: 1
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15
  }
});

import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const goalInputHandler = (text) => {
    setEnteredText(text);
  };

  const addGoalHandler = () => {
    if (enteredText.trim().length === 0) {
      return;
    }
    const goalId = Math.random().toString();
    const newGoal = { id: goalId, text: enteredText };
    props.addGoal(newGoal);
    setEnteredText("");
  };

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredText}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonOrange}>
            <Button
              title="Cancel"
              onPress={props.onCloseModalHandler}
              color="whitesmoke"
            />
          </View>
          <View style={styles.buttonYellow}>
            <Button title="Add goal" onPress={addGoalHandler} color="whitesmoke" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 8
  },
  buttonOrange: {
    width: "30%",
    borderRadius: 6,
    margin: 8,
    backgroundColor: "#ff6f00"
  },
  buttonYellow: {
    width: "30%",
    borderRadius: 6,
    margin: 8,
    backgroundColor: "orange"
  }
});

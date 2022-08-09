import { useState } from "react";
import { View, TextInput, Button, StyleSheet} from 'react-native';

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
    setEnteredText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredText}
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "70%",
    marginRight: 8,
    padding: 8,
  }
})
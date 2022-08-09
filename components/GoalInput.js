import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          value={enteredText}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCloseModalHandler}
              color="#ff6f00"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color="orange"
            />
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
    backgroundColor: "#c8e0e4"
  },
  image: {
    width: 100, 
    height: 100,
    margin: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "100%",
    padding: 8,
    backgroundColor: "whitesmoke"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 8,
  },
  button: {
    width: "30%",
    margin: 8,
  },
  buttonOrange: {
    width: "30%",
    borderRadius: 6,
    margin: 8,
    backgroundColor: "#ff6f00",
  },
  buttonYellow: {
    width: "30%",
    borderRadius: 6,
    margin: 8,
    backgroundColor: "orange",
  },
});

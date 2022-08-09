import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  const deleteGoalHandler = () => {
    props.onDeleteGoal(props.item.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#a9d0d5"
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#212121",
    padding: 8,
  },
});

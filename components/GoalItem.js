import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {

  const deleteGoalHandler = () => {
    props.onDeleteGoal(props.itemData.item.id);
  }

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#e7e5e5",
  },
  goalText: {
    color: "#212121",
  },
});

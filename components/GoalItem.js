import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  const deleteGoalHandler = () => {
    props.onDeleteGoal(props.itemData.item.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={color='#cccccc'} onPress={deleteGoalHandler}>
        <Text style={styles.goalText}>{props.itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#e7e5e5",
  },
  goalText: {
    color: "#212121",
    padding: 8,
  },
});

import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (newGoal) => {
    setCourseGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const newGoalList = prevGoals.filter(item => item.id !== goalId)
      return newGoalList
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem itemData={itemData} onDeleteGoal={removeGoalHandler}/>
            );
          }}
          keyExtractor={(item, index) => {item.id}}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 6,
  }
});

import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const hasGoals = courseGoals.length > 0;

  const addGoalHandler = (newGoal) => {
    setCourseGoals((prevGoals) => [...prevGoals, newGoal]);
    setShowModal(false);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const newGoalList = prevGoals.filter(item => item.id !== goalId)
      return newGoalList
    })
  }

  const openModalHandler = () => {
    setShowModal(true);
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button onPress={openModalHandler} title="Add New Goal" color="orange" />
      <GoalInput showModal={showModal} addGoal={addGoalHandler} onCloseModalHandler={closeModalHandler}/>
      <View style={styles.goalsContainer}>
        {hasGoals && <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem item={itemData.item} onDeleteGoal={removeGoalHandler}/>
            );
          }}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
        ></FlatList>}
        {!hasGoals && <Text style={styles.noGoalsText}>No goals yet</Text>}
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
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: '#cccccc'
  },
  noGoalsText: {
    fontStyle: 'italic',
    color: '#acabab',
    alignSelf: "center",
    margin: 16
  }
});

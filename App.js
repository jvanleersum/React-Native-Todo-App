import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!'/>
        <Button title="Add goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of course goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%', 
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 6
  }
});

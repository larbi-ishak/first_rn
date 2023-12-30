import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text>up App.js to start working on your app!</Text>
      <Button title='Click it' onPress={() => Alert.alert('Simple Button pressed')}></Button>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

import React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FAQScreen from './screens/FAQScreen'; // Import the FAQScreen component
import SignupScreen from './screens/signup'; // Import the Signup component
import LoginScreen from './screens/login'; // Import the Login component
import Puzzle from './screens/puzzle'; // Import the Puzzle component
import Question from './screens/question'; // Import the Question component

const Stack = createStackNavigator();

const HomeScreenComponent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to FAQ"
          onPress={() => navigation.navigate('FAQ')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Signup"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Puzzle"
          onPress={() => navigation.navigate('Puzzle')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Question"
          onPress={() => navigation.navigate('Question')}
        />
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreenComponent} options={{ headerShown: false }} />
        <Stack.Screen name="FAQ" component={FAQScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Puzzle" component={Puzzle} options={{ headerShown: false }} />
        <Stack.Screen name="Question" component={Question} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBF05', // Adjust background color as needed
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10, // Add margin to separate buttons
  },
});

export default App;



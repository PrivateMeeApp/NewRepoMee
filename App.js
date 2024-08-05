import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './screens/start';
import signup from './screens/signup'; // Ensure you have a signup component in this path
import Home from './screens/Home';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={signup} options={{ headerShown: false  }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false  }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

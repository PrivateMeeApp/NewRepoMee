import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './screens/start';
import signup from './screens/signup'; // Ensure you have a signup component in this path
import Home from './screens/Home';
import Profile from './screens/Profile';
import Login from './screens/Login';
import IQ from './screens/IQ';
import Puzzle from './screens/puzzel';
import pay from './screens/pay';
import connect from './screens/connect';
import family from './screens/family';
import pq from'./screens/pq';
import studyfaq from './screens/studyfaq';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={signup} options={{ headerShown: false  }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false  }} />
        <Stack.Screen name='profile' component={Profile} options={{headerShown : false}}/>
        <Stack.Screen name='login' component={Login} options={{headerShown : false}}/>
        <Stack.Screen name='IQ' component={IQ} options={{headerShown: false}}/>
        <Stack.Screen name='puzzle' component={Puzzle} options={{headerShown: false}}/>
        <Stack.Screen name='pay' component={pay} options={{headerShown: false}}/>
        <Stack.Screen name='connect' component={connect} options={{headerShown: false}}/>
        <Stack.Screen name='family' component={family} options={{headerShown: false}}/>
        <Stack.Screen name='pq' component={pq} options={{headerShown: false}}/>
        <Stack.Screen name='studyfaq' component={studyfaq} options={{headerShown: false}}/>
  
        
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

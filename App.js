// import 'react-native-gesture-handler';
import React from 'react';
import FirstPage from './Screens/FirstPage'
// import LevelTwo from './Screens/LevelTwo';

//Navigation Packages Imports 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LevelTwo from './Screens/LevelTwo';
import { Text } from 'react-native';
const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="FirstPage" component={FirstPage} options={{title:"Give Me Five - Level 1"}}/>
      <Stack.Screen name="LevelTwo" component={LevelTwo} options={{title:"Level 2"}}/>
    </Stack.Navigator>

    </NavigationContainer>
  )
}


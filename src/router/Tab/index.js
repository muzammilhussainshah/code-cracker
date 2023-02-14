import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LevelScreen from '../../pages/LevelScreen/LevelScreen';
import MainScreen from '../../pages/MainScreen/MainScreen';


export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='LevelScreen'
    > 
      <Stack.Screen name="LevelScreen" component={LevelScreen} /> 
      <Stack.Screen name="MainScreen" component={MainScreen} />  
    </Stack.Navigator>
  );
}

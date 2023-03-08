import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LevelScreen from '../../pages/LevelScreen/LevelScreen';
import Splash from '../../pages/Splash/Splash';
import MainScreen from '../../pages/MainScreen/MainScreen';
import HelpScreen from '../../pages/HelpScreen/HelpScreen';


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
      initialRouteName='Splash'
    > 
      <Stack.Screen name="Splash" component={Splash} /> 
      <Stack.Screen name="HelpScreen" component={HelpScreen} /> 
      <Stack.Screen name="LevelScreen" component={LevelScreen} /> 
      <Stack.Screen name="MainScreen" component={MainScreen} />  
    </Stack.Navigator>
  );
}

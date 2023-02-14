import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LevelScreen from '../../pages/LevelScreen/LevelScreen';
import MainScreen from '../../pages/MainScreen/MainScreen';

// import MyTabs from './SCBottomTabNavigator';

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
      initialRouteName='MainScreen'
    >
      {/* <Stack.Screen name="MyTabs" component={MyTabs} /> */}
      <Stack.Screen name="LevelScreen" component={LevelScreen} /> 
      <Stack.Screen name="MainScreen" component={MainScreen} /> 

      {/* <Stack.Screen name="LevelScreen" component={LevelScreen} />
      <Stack.Screen name="TrendingNews" component={TrendingNews} />
      <Stack.Screen name="MatchNews" component={MatchNews} /> */}
    </Stack.Navigator>
  );
}

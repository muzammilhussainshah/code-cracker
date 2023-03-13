import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LevelScreen from '../../pages/LevelScreen/LevelScreen';
import Splash from '../../pages/Splash/Splash';
import MainScreen from '../../pages/MainScreen/MainScreen';
import HelpScreen from '../../pages/HelpScreen/HelpScreen';
import analytics from '@react-native-firebase/analytics';
import { useRef } from 'react';


export default function Navigation() {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        const trackScreenView = () => {
          // Your implementation of analytics goes here!
        };

        if (previousRouteName !== currentRouteName) {
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
          // Replace the line below to add the tracker from a mobile analytics SDK
          await trackScreenView(currentRouteName);
        }
      }}>
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

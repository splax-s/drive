/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import BottomTabNavigator from './BottomTabNavigator'
import AuthScreen from '../screens/AuthScreen'
import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen'
import OtpScreen from '../screens/OtpScreen'
import Login_Screen from '../screens/Login_Screen'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import AddWorkScreen from '../screens/AddWorkScreen'
import AddHomeScreen from '../screens/AddHomeScreen'
import ScheduleRideScreen from '../screens/ScheduleRideScreen'
import ProfileScreen from '../screens/ProfileScreen'


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <Stack.Navigator>
      {loggedIn ? null : (
        <>
          <Stack.Screen
          name= "AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name= "SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name= "Login"
          component={LoginScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name= "OtpScreen"
          component={OtpScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name= "IsSignUPScreen"
          component={Login_Screen}
          options={{ headerShown: false }}
          />
        </>
      )}

          <Stack.Screen
          name= "HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name= "SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name= "AddHome"
          component={AddHomeScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name= "AddWork"
          component={AddWorkScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name= "Schedule"
          component={ScheduleRideScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name= "Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
          />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

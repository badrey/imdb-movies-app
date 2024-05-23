import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {COLORS} from '../constants/colors.ts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailsScreen} from '../screens/DetailsScreen';

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: COLORS.primary,
    background: COLORS.background,
    card: COLORS.surface,
    text: COLORS.text,
    border: COLORS.divider,
  },
};

const Stack = createNativeStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
      <Stack.Screen component={DetailsScreen} name="DetailsScreen" />
    </Stack.Navigator>
  );
}

export function Router() {
  return (
    <NavigationContainer theme={MyDarkTheme}>
      <NavStack />
    </NavigationContainer>
  );
}

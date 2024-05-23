import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {COLORS} from '../constants/colors.ts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {RootStackParamList} from './types.ts';

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: COLORS.background,
    card: COLORS.background,
    text: COLORS.text,
    border: COLORS.border,
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={DetailsScreen}
        name="DetailsScreen"
        options={({route}) => ({
          headerTitle: route.params?.name || 'Details',
          headerBackTitle: 'Home',
        })}
      />
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

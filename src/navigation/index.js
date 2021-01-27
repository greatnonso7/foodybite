import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './onboarding';
import Account from './account';
import { Trending } from 'screens/home';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Trending" component={Trending} />
    </Stack.Navigator>
  );
};

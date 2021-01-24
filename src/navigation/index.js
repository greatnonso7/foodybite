import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './onboarding';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

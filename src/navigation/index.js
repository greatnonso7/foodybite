import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './onboarding';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

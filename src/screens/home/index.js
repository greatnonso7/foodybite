import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const HomeStack = createStackNavigator();

export const Auth = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

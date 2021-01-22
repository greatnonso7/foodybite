import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import Login from './login';
import Forgot from './forgot';
import Gps from './gps';

const AuthenticationStack = createStackNavigator();

export const Auth = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="Forgot" component={Forgot} />
      <AuthenticationStack.Screen name="Gps" component={Gps} />
    </AuthenticationStack.Navigator>
  );
};

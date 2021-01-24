import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import { Login, Register, Gps, Forgot } from 'screens/auth';

const AuthStack = createStackNavigator();

const Onboarding = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login" headerMode="none">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Forgot" component={Forgot} />
      <AuthStack.Screen name="Gps" component={Gps} />
    </AuthStack.Navigator>
  );
};

export default Onboarding;

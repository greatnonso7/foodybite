import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from 'screens/home';

const HomeStack = createStackNavigator();

const Dashboard = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default Dashboard;

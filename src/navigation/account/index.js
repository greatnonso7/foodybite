import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { Home } from '../../screens/home';

const AppTabs = createBottomTabNavigator();

const Account = () => {
  return (
    <AppTabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Bookmarks') {
            iconName = 'bookmarks';
          } else if (route.name === 'Review') {
            iconName = 'review';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications';
          } else if (route.name === 'Profile') {
            iconName = 'profile';
          }
          return (
            <Icon
              name={iconName}
              size={!focused ? 15 : 30}
              color={focused ? '#5663FF' : '#FFFFFF'}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5663FF',
        style: styles.root,
      }}>
      <AppTabs.Screen name="Home" component={Home} />
    </AppTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Account;

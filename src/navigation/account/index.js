import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Bookmark, Notification, Profile, Review } from '../../screens/home';
import Home from './home';

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
          } else if (route.name === 'Bookmark') {
            iconName = 'heart';
          } else if (route.name === 'Review') {
            iconName = 'send';
          } else if (route.name === 'Notification') {
            iconName = 'bell';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return (
            <Icon
              name={iconName}
              size={!focused ? 30 : 30}
              color={focused ? '#5663FF' : null}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#5663FF',
        style: styles.root,
        showLabel: false,
      }}>
      <AppTabs.Screen name="Home" component={Home} />
      <AppTabs.Screen name="Bookmark" component={Bookmark} />
      <AppTabs.Screen name="Review" component={Review} />
      <AppTabs.Screen name="Notification" component={Notification} />
      <AppTabs.Screen name="Profile" component={Profile} />
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

export default Account;

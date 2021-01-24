/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleGuide } from 'components';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.inputContainer}>
        <EvilIcons
          style={[styles.icon, { marginLeft: 5 }]}
          name="search"
          size={35}
        />
        <TextInput style={styles.inputValue} placeholder="Find Restaurants" />
        <Ionicons
          style={[styles.icon, { marginRight: 15 }]}
          name="filter-outline"
          size={35}
        />
      </View>
      <View style={styles.restaurantContainer}>
        <View style={styles.displayRestaurant}>
          <Text style={styles.restaurantTrendingText}>
            Trending Restaurants
          </Text>
          <Text style={styles.restaurantSeeAllText}>See all (45)</Text>
        </View>
        <FlatList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: StyleGuide.spacing * 2,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: StyleGuide.spacing * 2,
    height: StyleGuide.spacing * 6,
    borderColor: '#E8E8E8',
  },
  inputValue: {
    fontSize: 19,
    marginRight: StyleGuide.spacing * 15,
    fontFamily: 'JosefinSans-Regular',
  },
  icon: {
    color: '#B6BED4',
  },
  restaurantContainer: {
    marginTop: StyleGuide.spacing * 4,
  },
  displayRestaurant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restaurantTrendingText: {
    fontSize: 20,
    fontFamily: 'JosefinSans-SemiBold',
    color: '#222455',
  },
  restaurantSeeAllText: {
    color: '#6E7FAA',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
  },
});

export default Home;

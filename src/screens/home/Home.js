/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleGuide } from 'components';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-gesture-handler';

const data = [
  {
    id: '1',
    name: 'Happy Bones',
    category: 'Italian',
    distant: '1.2km',
    address: '394 Broome St, New York, NY 10013, USA',
    image: require('assets/images/1.jpeg'),
    status: 'Open',
    rating: '4.6',
  },
  {
    id: '2',
    name: 'Uncle Bones',
    category: 'Chinese',
    distant: '2.5km',
    address: '7 Spring St, New York, NY 10012, USA',
    image: require('assets/images/2.jpg'),
    status: 'Open',
    rating: '4.1',
  },
  {
    id: '3',
    name: 'Happy Bones',
    category: 'Italian',
    distant: '1.2km',
    address: '394 Broome St, New York, NY 10113, USA',
    image: require('assets/images/3.jpg'),
    status: 'Close',
    rating: '4.3',
  },
];

const Item = ({ name, image, address, distant, category }) => {
  return (
    <View style={styles.flatlistContainer}>
      <Image style={styles.image} source={image} resizeMode="stretch" />
      <View style={styles.cardFooter}>
        <View style={{ marginLeft: 10 }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={styles.itemName}>{name}</Text>
            <View
              style={{
                height: 20,
                width: 60,
                marginLeft: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                backgroundColor: '#FF5673',
              }}>
              <Text style={{ color: 'white' }}>{category}</Text>
            </View>
            <View
              style={{
                height: 20,
                width: 50,
                marginLeft: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                backgroundColor: '#848DFF',
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                {distant}
              </Text>
            </View>
          </View>
          <Text style={styles.itemAddress}>{address}</Text>
        </View>
      </View>
    </View>
  );
};

const Home = () => {
  const renderItem = ({ item }) => (
    <Item
      key={item.id}
      image={item.image}
      name={item.name}
      address={item.address}
      category={item.category}
      distant={item.distant}
    />
  );
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

        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
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
  flatlistContainer: {
    marginTop: StyleGuide.spacing * 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
    marginRight: StyleGuide.spacing * 10,
  },
  image: {
    height: 200,
    // borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '120%',
  },
  cardFooter: {
    backgroundColor: 'white',
    width: '120%',
    height: 80,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    color: '#3E3F68',
    fontFamily: 'JosefinSans-Bold',
    fontSize: 20,
    marginBottom: StyleGuide.spacing * 2,
  },
  itemAddress: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
  },
});

export default Home;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleGuide } from 'components';
import { FlatList } from 'react-native-gesture-handler';

import { Search } from 'components/Forms';

import { data } from '../../constants';

const category = [
  {
    id: '1',
    category: 'Italian',
    image: require('assets/images/1.jpeg'),
  },
  {
    id: '2',
    category: 'Chinese',
    image: require('assets/images/2.jpg'),
  },
  {
    id: '3',
    category: 'Mexican',
    image: require('assets/images/3.jpg'),
  },
];
const profile = [
  {
    id: '1',
    image: require('assets/images/profile1.jpg'),
  },
  {
    id: '2',
    image: require('assets/images/profile2.jpeg'),
  },
  {
    id: '3',
    image: require('assets/images/profile3.jpeg'),
  },
  {
    id: '4',
    image: require('assets/images/profile4.jpeg'),
  },
  {
    id: '5',
    image: require('assets/images/profile5.jpeg'),
  },
  {
    id: '6',
    image: require('assets/images/profile6.jpeg'),
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

const Home = ({ navigation: { goBack, navigate } }) => {
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
      <View style={{ marginTop: StyleGuide.spacing * 2 }} />
      <Search placeholder="Find Restaurants" />
      <View style={styles.restaurantContainer}>
        <View style={styles.displayRestaurant}>
          <Text style={styles.restaurantTrendingText}>
            Trending Restaurants
          </Text>
          <TouchableOpacity onPress={() => navigate('Trending')}>
            <Text style={styles.restaurantSeeAllText}>See all (45)</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.restaurantContainer}>
        <View style={styles.displayRestaurant}>
          <Text style={styles.restaurantTrendingText}>Category</Text>
          <Text style={styles.restaurantSeeAllText}>See all (9)</Text>
        </View>

        <FlatList
          data={category}
          renderItem={({ item }) => (
            <View style={styles.categoryContainer}>
              <ImageBackground
                source={item.image}
                style={styles.imageCategory}
              />
              <View style={styles.overlay} />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  bottom: StyleGuide.spacing * 7,
                }}>
                <Text
                  style={{
                    fontFamily: 'JosefinSans-Bold',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  {item.category}
                </Text>
              </View>
            </View>
          )}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.restaurantContainer}>
        <View style={styles.displayRestaurant}>
          <Text style={styles.restaurantTrendingText}>Friends</Text>
          <Text style={styles.restaurantSeeAllText}>See all (56)</Text>
        </View>

        <FlatList
          data={profile}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.categoryContainer}>
              <Image source={item.image} style={styles.imageProfile} />
            </View>
          )}
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
    // backgroundColor: 'black'
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
    marginTop: StyleGuide.spacing * 2,
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
  categoryContainer: {
    marginRight: StyleGuide.spacing * 2,
    marginTop: StyleGuide.spacing * 2,
  },
  imageCategory: {
    height: 100,
    width: 115,
    borderRadius: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
    // borderRadius: 20,
    height: 100,
    backgroundColor: 'black',
  },
  imageProfile: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});

export default Home;

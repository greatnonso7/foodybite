/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from 'navigation/custom/BackButton';
import { StyleGuide } from 'components';
import { Search } from 'components/Forms';
import { FlatList } from 'react-native-gesture-handler';
import { data } from 'constants';

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

const Trending = () => {
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
      <BackButton />
      <View style={styles.textCaption}>
        <Text style={styles.textHeader}>Trending Restaurants</Text>
      </View>
      <Search placeholder="Search              " />
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: StyleGuide.spacing * 2,
  },
  textCaption: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginLeft: StyleGuide.spacing * 8,
    bottom: StyleGuide.spacing * 3 + 2,
  },
  textHeader: {
    color: '#222455',
    fontSize: 25,
    fontFamily: 'JosefinSans-SemiBold',
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '125%',
  },
  cardFooter: {
    backgroundColor: 'white',
    width: '125%',
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

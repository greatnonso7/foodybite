import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from 'navigation/custom/BackButton';
import { StyleGuide } from 'components';
import { Search } from 'components/Forms';

const Trending = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.textCaption}>
        <Text style={styles.textHeader}>Trending Restaurants</Text>
      </View>
      <Search placeholder="Search              " />
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
});

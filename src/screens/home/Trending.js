import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../navigation/custom/BackButton';

const Trending = () => {
  return (
    <SafeAreaView>
      <BackButton />
      <Text>Trending</Text>
    </SafeAreaView>
  );
};

export default Trending;

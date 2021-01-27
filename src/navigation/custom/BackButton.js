import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}>
      <AntDesignIcon name="arrowleft" size={35} color="#222455" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
  },
});

export default BackButton;

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.backButton}>
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

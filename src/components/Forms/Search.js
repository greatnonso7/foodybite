/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleGuide } from 'components';
import PropTypes from 'prop-types';

const Search = ({ placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <EvilIcons
        style={[styles.icon, { marginLeft: 5 }]}
        name="search"
        size={35}
      />
      <TextInput style={styles.inputValue} placeholder={placeholder} />
      <Ionicons
        style={[styles.icon, { marginRight: 15 }]}
        name="filter-outline"
        size={35}
      />
    </View>
  );
};

Search.PropTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Search;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: StyleGuide.spacing * 6,
    borderColor: '#E8E8E8',
  },
  icon: {
    color: '#B6BED4',
  },
  inputValue: {
    fontSize: 19,
    marginRight: StyleGuide.spacing * 15,
    fontFamily: 'JosefinSans-Regular',
  },
});

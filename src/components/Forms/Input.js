import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleGuide } from 'components';

const { width } = Dimensions.get('screen');

const Input = ({ iconName, placeholder }) => {
  return (
    <View style={styles.formControl}>
      <Ionicons style={styles.formIcon} name={iconName} size={25} />
      <TextInput
        style={styles.formText}
        placeholder={placeholder}
        placeholderTextColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    opacity: 0.4,
    width: width / 1.3,
    height: 50,
    borderRadius: 10,
    marginBottom: 30,
  },
  formIcon: {
    color: '#000',
    alignSelf: 'center',
    marginLeft: StyleGuide.spacing * 2,
  },
  formText: {
    color: '#000',
    fontSize: 20,
    marginLeft: 15,
  },
});

export default Input;

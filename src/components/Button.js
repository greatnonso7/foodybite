import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('screen');
import { StyleGuide } from 'components';

const Button = ({ title }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.7} style={styles.actionLoginButton}>
        <Text style={styles.actionLoginText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  actionLoginButton: {
    backgroundColor: '#5663FF',
    height: StyleGuide.spacing * 7,
    width: width / 1.3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionLoginText: {
    fontSize: 18,
    fontFamily: 'JosefinSans-SemiBold',
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default Button;

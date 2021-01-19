import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import { StyleGuide } from 'components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('screen');

const Login = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.image}
        source={require('assets/images/login.png')}>
        <View style={styles.overlay} />
        <View style={styles.loginContainer}>
          <Text style={styles.logoText}>Foodybite</Text>
          <View>
            <View style={styles.formControl}>
              <Ionicons color="white" name="mail-outline" size={25} />
              <TextInput style={styles.formText} placeholder="Email" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
    backgroundColor: 'black',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'JosefinSans-Bold',
    paddingTop: StyleGuide.spacing * 12,
  },
  formControl: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    opacity: 0.1,
    width: width / 1.1,
    height: 50,
    borderRadius: 10,
  },
  formText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 15,
  },
});

export default Login;

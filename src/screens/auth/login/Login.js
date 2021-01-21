import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { StyleGuide } from 'components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('screen');

const Login = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.image}
        source={require('assets/images/login.png')}>
        <View style={styles.overlay} />
        <View style={styles.loginContainer}>
          <Text style={styles.logoText}>Foodybite</Text>
          <View style={styles.formContainer}>
            <View style={styles.formControl}>
              <Ionicons
                color="white"
                style={styles.formIcon}
                name="mail-outline"
                size={25}
              />
              <TextInput style={styles.formText} placeholder="Email" />
            </View>
            <View style={styles.formControl}>
              <Ionicons
                style={styles.formIcon}
                color="white"
                name="lock-closed-outline"
                size={25}
              />
              <TextInput style={styles.formText} placeholder="Password" />
            </View>
            <TouchableOpacity onPress={() => Alert.alert('Hello World')}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.actionLoginButton}>
              <Text style={styles.actionLoginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionRegisterContainer}>
              <Text style={styles.actionRegisterText}>Create New Account</Text>
            </TouchableOpacity>
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
    opacity: 0.5,
    backgroundColor: 'black',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoText: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'JosefinSans-Bold',
    paddingTop: StyleGuide.spacing * 12,
  },
  formContainer: {
    position: 'relative',
    top: height / 5,
  },
  formControl: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    opacity: 0.2,
    width: width / 1.3,
    height: 50,
    borderRadius: 10,
    marginBottom: 30,
  },
  formText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 15,
  },
  formIcon: {
    color: 'white',
    alignSelf: 'center',
    marginLeft: StyleGuide.spacing * 2,
  },
  forgotText: {
    color: 'white',
    fontFamily: 'JosefinSans-Regular',
    alignSelf: 'flex-end',
  },
  actionContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: StyleGuide.spacing * 10,
  },
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
  actionRegisterContainer: {
    justifyContent: 'flex-end',
  },
  actionRegisterText: {
    color: 'white',
    fontFamily: 'JosefinSans-Light',
  },
});

export default Login;

import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { StyleGuide } from 'components';
import Input from 'components/Forms/Input';

const { width, height } = Dimensions.get('screen');

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.image}
        source={require('assets/images/login.png')}>
        <View style={styles.overlay} />
        <View style={styles.loginContainer}>
          <Text style={styles.logoText}>Foodybite</Text>
          <View style={styles.formContainer}>
            <Input placeholder="Email" iconName="mail-outline" />
            <Input placeholder="Password" iconName="lock-closed-outline" />
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
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
  container: {
    flex: 1,
  },
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

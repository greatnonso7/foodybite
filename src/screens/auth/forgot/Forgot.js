import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { StyleGuide, Button } from 'components';
import { Input } from 'components/Forms';

const Forgot = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.image}
        source={require('assets/images/login.png')}>
        <View style={styles.overlay} />
        <SafeAreaView>
          <TouchableOpacity style={styles.iconNavigator}>
            <AntDesignIcon name="left" size={35} color="white" />
          </TouchableOpacity>
          <View style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </View>
          <View style={styles.resetContainer}>
            <Text style={styles.resetInstructions}>
              Enter your email and receive{'\n'}
              instructions on to reset password
            </Text>
          </View>
          <View style={styles.formContainer}>
            <Input placeholder="Email" iconName="mail-outline" />
          </View>
          <View styles={styles.buttonContainer} />
          <Button title="Send" />
        </SafeAreaView>
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
  iconNavigator: {
    position: 'relative',
    top:
      Platform.OS === 'android' ? StyleGuide.spacing * 2 : StyleGuide.spacing,
  },
  forgotContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  forgotText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'JosefinSans-SemiBold',
    position: 'relative',
    bottom: StyleGuide.spacing * 2,
  },
  resetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StyleGuide.spacing * 6,
  },
  resetInstructions: {
    color: StyleGuide.palette.white,
    fontSize: StyleGuide.spacing * 3,
    fontFamily: 'JosefinSans-Light',
    textAlign: 'center',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StyleGuide.spacing * 10,
  },
});

export default Forgot;

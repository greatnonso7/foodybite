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
import { Button, StyleGuide } from 'components';
import Input from 'components/Forms/Input';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.image}
        source={require('assets/images/register.png')}>
        <View style={styles.overlay} />
        <SafeAreaView
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-outline" size={50} color="black" />
          </View>
          <View style={styles.formContainer}>
            <Input placeholder="Name" iconName="person-outline" />
            <Input placeholder="Email" iconName="mail-outline" />
            <Input placeholder="Password" iconName="lock-closed-outline" />
            <Input
              placeholder="Confirm Password"
              iconName="lock-closed-outline"
            />
          </View>
          <View style={{ marginTop: StyleGuide.spacing * 4 }}>
            <Button title="Register" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textAccount}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textNavigate}>Login</Text>
            </TouchableOpacity>
          </View>
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
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
    backgroundColor: 'black',
  },
  iconContainer: {
    position: 'relative',
    top: StyleGuide.spacing * 8,
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.5,
  },
  formContainer: {
    marginTop:
      Platform.OS === 'android'
        ? StyleGuide.spacing * 12
        : StyleGuide.spacing * 18,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: StyleGuide.spacing * 5,
  },
  textAccount: {
    fontFamily: 'JosefinSans-Light',
    color: 'white',
    fontSize: 20,
  },
  textNavigate: {
    color: '#5663FF',
    fontFamily: 'JosefinSans-Light',
    fontSize: 20,
  },
});

export default Register;

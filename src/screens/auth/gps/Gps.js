/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { StyleGuide, Button } from 'components';
import LinearGradient from 'react-native-linear-gradient';

const Gps = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.image}
        source={require('assets/images/gps.png')}>
        <View style={styles.overlay} />
        <SafeAreaView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: 10,
            }}>
            <TouchableOpacity activeOpacity={0.6} style={styles.skipContainer}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginHorizontal: 35,
              justifyContent: 'flex-start',
              position: 'relative',
              top: StyleGuide.spacing * 30,
            }}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>
                Hi John, {'\n'}
                Welcome to
              </Text>
              <Text
                style={[
                  styles.welcomeText,
                  {
                    color: '#FFCC00',
                    marginRight: 20,
                    marginBottom: Platform.OS === 'android' ? 45 : 0,
                  },
                ]}>
                Foodybite
              </Text>
            </View>
            <Text style={styles.gpsText}>
              Please turn your on your GPS to find {'\n'}
              out better restaurant suggestions {'\n'}
              near you.
            </Text>
            <View style={{ marginTop: StyleGuide.spacing * 7 }}>
              <Button title="Turn on GPS" />
            </View>
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
    opacity: 0.7,
    backgroundColor: 'black',
  },
  skipContainer: {
    width: 60,
    height: 30,
    opacity: 0.8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: StyleGuide.spacing * 4,
  },
  skipText: {
    fontSize: 16,
    fontFamily: 'JosefinSans-Regular',
    color: '#000',
  },
  welcomeText: {
    color: 'white',
    fontSize: StyleGuide.spacing * 6,
    fontFamily: 'JosefinSans-SemiBold',
    lineHeight: 50,
  },
  gpsText: {
    color: 'white',
    fontFamily: 'JosefinSans-Light',
    fontSize: 18,
    top: StyleGuide.spacing * 3,
  },
});

export default Gps;

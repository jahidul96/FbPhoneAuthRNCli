import {
  Image,
  ImageBackground,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useRef, useState} from 'react';

const Home = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mapWrapper: {
    flex: 1,
  },
});

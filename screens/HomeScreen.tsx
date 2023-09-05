import React from 'react';
import {View, Text} from 'react-native';
import {basic} from '../styles/common';

// This is your Home Screen
// @ts-ignore
const HomeScreen = () => {
  return (
    <View style={basic.container}>
      <Text style={basic.text}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

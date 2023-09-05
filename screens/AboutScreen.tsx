// This is your AboutScreen Screen
import React from 'react';
import {Text, View} from 'react-native';
import {basic} from '../styles/common';

const AboutScreen = () => {
  return (
    <View style={basic.container}>
      <Text style={basic.text}>About Screen</Text>
    </View>
  );
};

export default AboutScreen;

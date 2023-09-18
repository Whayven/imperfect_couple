import React from 'react';
import {View} from 'react-native';
import CreatePost from "../components/CreatePost";
import {basic} from '../styles/common';

// This is your Home Screen
// @ts-ignore
const HomeScreen = () => {
  return (
    <View style={basic.container}>
        <CreatePost />
    </View>
  );
};

export default HomeScreen;

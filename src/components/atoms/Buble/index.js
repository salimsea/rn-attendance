import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Buble = ({color, onPress, icon}) => {
  return (
    <View
      style={{
        width: 35,
        height: 35,
        borderRadius: 100,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
    </View>
  );
};

export default Buble;

const styles = StyleSheet.create({});

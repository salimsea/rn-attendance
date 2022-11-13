import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts, fontSize} from '../../../../utils';

const ItemMenu = ({icon, name, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{alignItems: 'center', marginHorizontal: 5}}>
      <View
        style={{
          backgroundColor: colors.blue,
          borderRadius: 5,
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {icon}
      </View>
      <Text
        style={{
          fontSize: fontSize.mini,
          fontFamily: fonts.primary[600],
          color: colors.dark,
          marginTop: 5,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemMenu;

const styles = StyleSheet.create({});

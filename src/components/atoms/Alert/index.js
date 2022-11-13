import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, fontSize} from '../../../utils';

const Alert = ({icon, desc, color = colors.primary}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      <View>{icon}</View>
      <View style={{paddingHorizontal: 10, flex: 1}}>
        <Text
          style={{
            fontSize: fontSize.small + 0.5,
            fontFamily: fonts.primary[400],
            color: colors.white,
          }}>
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({});

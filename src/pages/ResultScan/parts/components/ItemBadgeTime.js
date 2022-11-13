import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, fontSize} from '../../../../utils';

const ItemBadgeTime = ({title, icon, time}) => {
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: colors.white,
        padding: 15,
        width: '48%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: fontSize.medium,
            fontFamily: fonts.primary[600],
            color: colors.dark,
          }}>
          {title}
        </Text>
        {icon}
      </View>
      <View style={{height: 50, justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: fontSize.xlarge + 5,
            fontFamily: fonts.primary[700],
            color: colors.dark,
            textAlign: 'center',
          }}>
          {time}
        </Text>
      </View>
    </View>
  );
};

export default ItemBadgeTime;

const styles = StyleSheet.create({});

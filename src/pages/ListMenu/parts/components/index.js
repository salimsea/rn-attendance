import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts, fontSize} from '../../../../utils';

const ItemMenu = ({icon, name, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 15,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {icon}
        <Text
          style={{
            fontSize: fontSize.medium,
            fontFamily: fonts.primary[400],
            color: colors.black,
            paddingLeft: 15,
            paddingTop: Platform.OS === 'android' ? 5 : 0,
          }}>
          {name}
        </Text>
      </View>
      <View>
        <MaterialCommunityIcon
          name="chevron-right"
          color={colors.grey1}
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemMenu;

const styles = StyleSheet.create({});

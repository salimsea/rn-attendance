import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors, fonts, fontSize} from '../../../utils';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {navGoback} from '../../../config/helpers/navigationRef';

const Header2 = ({title}) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: getStatusBarHeight() + 20,
        paddingBottom: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontSize: fontSize.large,
              fontFamily: fonts.primary[600],
              color: colors.dark,
            }}>
            {title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navGoback()}>
          <MaterialCommunityIcon name="close" color={colors.dark} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({});

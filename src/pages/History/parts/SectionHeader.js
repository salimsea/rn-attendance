import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts, fontSize} from '../../../utils';
import {IMGLayer} from '../../../assets';
import {navGoback} from '../../../config/helpers/navigationRef';

const SectionHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: getStatusBarHeight() + 20,
        paddingBottom: 15,
      }}>
      <TouchableOpacity
        onPress={() => navGoback()}
        style={{flexDirection: 'row'}}>
        <MaterialCommunityIcon
          name="keyboard-backspace"
          size={25}
          color={colors.white}
        />
        <Text
          style={{
            fontSize: fontSize.large,
            fontFamily: fonts.primary[600],
            color: colors.white,
            paddingLeft: 10,
          }}>
          Riwayat Absensi
        </Text>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          top: -40,
          right: -60,
          zIndex: -1,
        }}>
        <Image source={IMGLayer} />
      </View>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});

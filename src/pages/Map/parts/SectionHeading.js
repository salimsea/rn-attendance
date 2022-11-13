import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Gap} from '../../../components';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../utils';
import {navGoback} from '../../../config/helpers/navigationRef';

const SectionHeading = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: getStatusBarHeight(),
        width: '100%',
        zIndex: 3,
      }}>
      <Gap height={20} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 100,
            backgroundColor: colors.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => navGoback()}>
            <MaterialCommunityIcon
              name="keyboard-backspace"
              size={25}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SectionHeading;

const styles = StyleSheet.create({});

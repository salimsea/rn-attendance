import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMGLogo} from '../../../assets';
import {colors, fonts, fontSize} from '../../../utils';

const SectionFooter = () => {
  return (
    <View style={{position: 'absolute', bottom: 30, width: '100%'}}>
      <View style={{alignSelf: 'center'}}>
        <Image source={IMGLogo} style={{width: 40, height: 40}} />
      </View>
      <Text
        style={{
          fontSize: fontSize.mini,
          fontFamily: fonts.primary[600],
          color: colors.grey1,
          textAlign: 'center',
          marginTop: 5,
        }}>
        Versi App
      </Text>
      <Text
        style={{
          fontSize: fontSize.mini,
          fontFamily: fonts.primary[600],
          color: colors.grey1,
          textAlign: 'center',
          marginTop: 5,
        }}>
        1.0.3
      </Text>
    </View>
  );
};

export default SectionFooter;

const styles = StyleSheet.create({});

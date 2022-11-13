import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, fontSize} from '../../../utils';

const SectionHero = () => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <Text
        style={{
          fontSize: fontSize.xlarge,
          fontFamily: fonts.primary[600],
          color: colors.dark,
          textAlign: 'center',
        }}>
        Reset Password
      </Text>
      <Text
        style={{
          fontSize: fontSize.medium,
          fontFamily: fonts.primary[400],
          color: colors.dark,
          textAlign: 'center',
        }}>
        Anda akan melakukan reset password, password baru akan dikirim kan
        melalui email
      </Text>
    </View>
  );
};

export default SectionHero;

const styles = StyleSheet.create({});

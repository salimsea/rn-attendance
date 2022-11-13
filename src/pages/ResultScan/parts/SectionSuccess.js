import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GIFLoadingSuccess} from '../../../assets';
import {colors, fonts, fontSize} from '../../../utils';

const SectionSuccess = () => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <View
        style={{
          alignContent: 'center',
          alignSelf: 'center',
          marginTop: -50,
        }}>
        <Image source={GIFLoadingSuccess} style={{width: 200, height: 200}} />
      </View>
      <View style={{marginTop: -50}}>
        <Text
          style={{
            fontSize: fontSize.xlarge,
            fontFamily: fonts.primary[600],
            color: colors.dark,
            textAlign: 'center',
          }}>
          Berhasil
        </Text>
        <Text
          style={{
            fontSize: fontSize.medium,
            fontFamily: fonts.primary[400],
            color: colors.dark,
            textAlign: 'center',
          }}>
          Anda telah melakukan presensi absen
        </Text>
      </View>
    </View>
  );
};

export default SectionSuccess;

const styles = StyleSheet.create({});

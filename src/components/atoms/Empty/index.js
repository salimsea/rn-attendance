import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILEmpty} from '../../../assets';
import {colors, fonts, fontSize} from '../../../utils';
import Gap from '../Gap';

const Empty = () => {
  return (
    <>
      <View style={{alignSelf: 'center'}}>
        <ILEmpty />
      </View>
      <Gap height={25} />
      <Text
        style={{
          fontSize: fontSize.small,
          fontFamily: fonts.primary[400],
          color: colors.dark,
          textAlign: 'center',
        }}>
        Tidak ada riwayat absensi
      </Text>
    </>
  );
};

export default Empty;

const styles = StyleSheet.create({});

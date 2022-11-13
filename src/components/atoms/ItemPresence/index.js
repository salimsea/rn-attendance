import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts, fontSize} from '../../../utils';

const ItemPresence = ({isTrue, timeIn, timeOut = '00:00', hisOut = false}) => {
  const [isOut, setIsOut] = useState(false);
  useEffect(() => {
    var timePresenOut = timeOut?.split(':');
    var timeCurr = new Date().getHours();
    if (timeCurr >= timePresenOut[0]) {
      setIsOut(true);
    } else {
      setIsOut(false);
    }
  }, [timeOut]);
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View
        style={{
          width: 15,
          height: 15,
          borderRadius: 100,
          backgroundColor: isTrue
            ? !isOut
              ? colors.primary
              : !hisOut
              ? colors.red
              : colors.primary
            : colors.red,
        }}
      />
      <Text
        style={{
          fontSize: fontSize.medium,
          fontFamily: fonts.primary[600],
          color: colors.dark,
          paddingLeft: 10,
        }}>
        {isTrue
          ? !isOut
            ? 'Sudah Absen'
            : !hisOut
            ? 'Belum Absen'
            : 'Sudah Absen'
          : 'Belum Absen'}
      </Text>
    </View>
  );
};

export default ItemPresence;

const styles = StyleSheet.create({});

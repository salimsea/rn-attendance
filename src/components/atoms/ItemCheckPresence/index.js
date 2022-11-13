import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts, fontSize} from '../../../utils';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemCheckPresence = ({
  isTrue,
  timeIn,
  timeOut = '00:00',
  hisOut = false,
}) => {
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
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
      }}>
      <MaterialCommunityIcon
        name={
          isTrue
            ? !isOut
              ? hisOut
                ? 'logout'
                : 'login'
              : !hisOut
              ? 'logout'
              : !isOut
              ? 'login'
              : 'logout'
            : 'login'
        }
        size={15}
        color={colors.dark}
      />
      <Text
        style={{
          fontSize: fontSize.small,
          fontFamily: fonts.primary[400],
          color: colors.dark,
          paddingLeft: 5,
        }}>
        {isTrue
          ? !isOut
            ? hisOut
              ? 'Check-Out'
              : 'Check-In'
            : !hisOut
            ? 'Check-Out'
            : !isOut
            ? 'Check-In'
            : 'Check-Out'
          : 'Check-In'}
      </Text>
    </View>
  );
};

export default ItemCheckPresence;

const styles = StyleSheet.create({});

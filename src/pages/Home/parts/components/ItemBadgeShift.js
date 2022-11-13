import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts, fontSize} from '../../../../utils';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {FUNCIsNight} from '../../../../config';

const ItemBadgeShift = ({timeIn = '00:00'}) => {
  const [isShift, setIsShift] = useState(false);
  useEffect(() => {
    var hour = timeIn.split(':');
    setIsShift(FUNCIsNight(hour[0]));
  }, [timeIn]);

  return (
    <View
      style={{
        backgroundColor: isShift ? colors.grey1 : colors.secondary,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
      }}>
      <Ionicon
        name={isShift ? 'md-moon-outline' : 'md-sunny-outline'}
        size={20}
        color={colors.white}
      />
      <Text
        style={{
          fontSize: fontSize.small,
          fontFamily: fonts.primary[600],
          color: colors.white,
          paddingLeft: 10,
        }}>
        {isShift ? 'Shift Malam' : 'Shift Pagi'}
      </Text>
    </View>
  );
};

export default ItemBadgeShift;

const styles = StyleSheet.create({});

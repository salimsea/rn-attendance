import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, fontSize} from '../../../utils';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {ICDate} from '../../../assets';
import Gap from '../Gap';
import {FUNCIsAmPm} from '../../../config';

const ItemHistory = ({date, month, timeIn, timeOut, latLon}) => {
  return (
    <View
      style={{
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 0.7,
        borderBottomColor: colors.grey2,
      }}>
      <View
        style={{
          width: '22%',
          borderRightColor: colors.grey2,
          marginRight: 10,
        }}>
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 10,
            backgroundColor: colors.red,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <ICDate />
          <Text
            style={{
              fontSize: fontSize.mini - 3,
              fontFamily: fonts.primary[600],
              color: colors.white,
            }}>
            {month}
          </Text>
          <View style={{position: 'absolute', top: 23}}>
            <Text
              style={{
                fontSize: fontSize.small,
                fontFamily: fonts.primary[600],
                color: colors.white,
              }}>
              {date}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '65%',
          marginRight: 10,
          paddingRight: 10,
          flex: 1,
        }}>
        <View>
          <Text
            style={{
              fontSize: fontSize.medium + 1,
              fontFamily: fonts.primary[600],
              color: colors.dark,
            }}>
            {timeIn}
            <Text
              style={{
                fontSize: fontSize.small,
                fontFamily: fonts.primary[600],
                color: colors.dark,
              }}>
              {' '}
              {FUNCIsAmPm(timeIn || '00:00')}
            </Text>
            {timeOut && (
              <>
                <Text
                  style={{
                    fontSize: fontSize.medium + 1,
                    fontFamily: fonts.primary[600],
                    color: colors.dark,
                  }}>
                  {' '}
                  - {timeOut}
                </Text>
                <Text
                  style={{
                    fontSize: fontSize.small,
                    fontFamily: fonts.primary[600],
                    color: colors.dark,
                  }}>
                  {' '}
                  {FUNCIsAmPm(timeOut || '00:00')}
                </Text>
              </>
            )}
          </Text>
        </View>
        <Gap height={2} />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Ionicon name="md-sunny-outline" size={15} color={colors.dark} />
          <Text
            style={{
              fontSize: fontSize.mini,
              fontFamily: fonts.primary[600],
              color: colors.dark,
              paddingLeft: 5,
            }}>
            Shift Pagi
          </Text>
        </View>
        <Gap height={1} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicon name="map-outline" size={15} color={colors.blue} />
          <Text
            numberOfLines={1}
            style={{
              fontSize: fontSize.mini,
              fontFamily: fonts.primary[600],
              color: colors.blue,
              paddingLeft: 5,
            }}>
            {latLon}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '8%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcon
          name="keyboard-arrow-right"
          size={15}
          color={colors.dark}
        />
      </View>
    </View>
  );
};

export default ItemHistory;

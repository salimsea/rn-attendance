import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, fontSize} from '../../../utils';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {ICDate} from '../../../assets';
import {useSelector} from 'react-redux';
import {FUNCIsAmPm} from '../../../config';
import ItemBadgeShift from '../../Home/parts/components/ItemBadgeShift';
import {ItemPresence} from '../../../components';
import ItemCheckPresence from '../../../components/atoms/ItemCheckPresence';

const SectionContent = () => {
  const {dataPegawaiKehadiran} = useSelector(state => state.presenceReducer);
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -15,
        elevation: 5,
        zIndex: 2,
      }}>
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcon name="qr-code-scanner" size={20} color={colors.white} />
          <Text
            style={{
              fontSize: fontSize.medium,
              fontFamily: fonts.primary[600],
              color: colors.white,
              paddingLeft: 10,
            }}>
            Scan QR Code
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: colors.white,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}>
        {/* HEADER */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <ItemBadgeShift timeIn={dataPegawaiKehadiran?.jadwalHadir} />
          <ItemPresence
            timeIn={dataPegawaiKehadiran?.jadwalKeluar}
            timeOut={dataPegawaiKehadiran?.jadwalKeluar}
            hisOut={dataPegawaiKehadiran?.absen?.jamKeluar}
            isTrue={dataPegawaiKehadiran?.isAbsen}
          />
        </View>

        {/* CARD */}
        <View
          style={{
            marginTop: 20,
            borderRadius: 10,
            flexDirection: 'row',
            paddingBottom: 10,
            borderBottomWidth: 0.7,
            borderBottomColor: colors.grey2,
            alignItems: 'center',
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
                September
              </Text>
              <View style={{position: 'absolute', top: 23}}>
                <Text
                  style={{
                    fontSize: fontSize.small,
                    fontFamily: fonts.primary[600],
                    color: colors.white,
                  }}>
                  {dataPegawaiKehadiran?.tanggal?.split('-')[0] || '00'}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '50%',
              borderRightWidth: 0.8,
              borderRightColor: colors.grey2,
              marginRight: 10,
            }}>
            <View>
              <Text
                style={{
                  fontSize: fontSize.large,
                  fontFamily: fonts.primary[600],
                  color: colors.dark,
                }}>
                {dataPegawaiKehadiran?.jadwalHadir || '00:00'}
                <Text
                  style={{
                    fontSize: fontSize.small,
                    fontFamily: fonts.primary[600],
                    color: colors.dark,
                  }}>
                  {' '}
                  {FUNCIsAmPm(dataPegawaiKehadiran?.jadwalHadir || '00:00')}
                </Text>
                {''} - {dataPegawaiKehadiran?.jadwalKeluar || '00:00'}
                <Text
                  style={{
                    fontSize: fontSize.small,
                    fontFamily: fonts.primary[600],
                    color: colors.dark,
                  }}>
                  {' '}
                  {FUNCIsAmPm(dataPegawaiKehadiran?.jadwalKeluar || '00:00')}
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ItemCheckPresence
              timeIn={dataPegawaiKehadiran?.jadwalKeluar}
              timeOut={dataPegawaiKehadiran?.jadwalKeluar}
              hisOut={dataPegawaiKehadiran?.absen?.jamKeluar}
              isTrue={dataPegawaiKehadiran?.isAbsen}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SectionContent;

const styles = StyleSheet.create({});

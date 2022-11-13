import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors, fonts, fontSize} from '../../../utils';
import {ILEmpty} from '../../../assets';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Empty, Gap, ItemHistory} from '../../../components/atoms';
import {useSelector} from 'react-redux';
import {FUNCGetMonth} from '../../../config/function/common';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SectionContent = ({scrollA}) => {
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);
  const {dataPegawaiKehadiran} = useSelector(state => state.presenceReducer);
  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener(a => {
      const topNaviOffset = 400 - 100 - getStatusBarHeight();
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 30,
        minHeight: hp('75%'),
        elevation: 10,
      }}>
      <View>
        <View
          style={{
            width: 45,
            height: 5,
            borderRadius: 5,
            backgroundColor: colors.grey2,
            alignSelf: 'center',
            marginBottom: 10,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: fontSize.large,
          fontFamily: fonts.primary[600],
          color: colors.dark,
        }}>
        Riwayat Absen
      </Text>

      {/* ITEM */}
      {dataPegawaiKehadiran ? (
        <>
          {dataPegawaiKehadiran.absens.length !== 0 ? (
            dataPegawaiKehadiran.absens.map((v, i) => {
              var date = v.tanggal.split('-');
              return (
                i < 6 && (
                  <ItemHistory
                    key={i}
                    date={date[0]}
                    month={FUNCGetMonth(date[1])}
                    timeIn={v.jamHadir}
                    timeOut={v.jamKeluar}
                    latLon={`${v.latitude}, ${v.longitude}`}
                  />
                )
              );
            })
          ) : (
            <View style={{marginTop: 60}}>
              <Empty />
            </View>
          )}
        </>
      ) : (
        <>
          <Text>Loading</Text>
        </>
      )}
    </View>
  );
};

export default SectionContent;

const styles = StyleSheet.create({});

import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {Empty, Gap, ItemHistory} from '../../../components';
import {useSelector} from 'react-redux';
import {FUNCGetMonth} from '../../../config';

const SectionContent = () => {
  const {dataPegawaiKehadiran} = useSelector(state => state.presenceReducer);
  return (
    <View style={styles.card}>
      <Gap height={10} />
      {dataPegawaiKehadiran ? (
        <>
          {dataPegawaiKehadiran.absens.length !== 0 ? (
            <>
              <FlatList
                data={dataPegawaiKehadiran.absens}
                renderItem={({item}) => {
                  var date = item.tanggal.split('-');
                  return (
                    <View style={{paddingHorizontal: 15}}>
                      <ItemHistory
                        date={date[0]}
                        month={FUNCGetMonth(date[1])}
                        timeIn={item.jamHadir}
                        timeOut={item.jamKeluar}
                        latLon={`${item.latitude}, ${item.longitude}`}
                      />
                    </View>
                  );
                }}
                ListFooterComponent={() => {
                  return <Gap height={60} />;
                }}
              />
            </>
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
});

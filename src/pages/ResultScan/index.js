import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts, fontSize} from '../../utils';
import {GIFLoadingSuccess} from '../../assets';
import {Header2} from '../../components';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemBadgeTime from './parts/components/ItemBadgeTime';
import SectionSuccess from './parts/SectionSuccess';
import SectionContent from './parts/SectionContent';

const ResultScan = ({navigation, route}) => {
  const {PARAMData, PARAMMap} = route.params;
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <View style={styles.page}>
        <View style={styles.content}>
          {/* SECTION HEADER */}
          <Header2 />

          {/* SECTION SUCCESS */}
          <SectionSuccess />

          {/* SECTION CONTENT */}
          <SectionContent data={PARAMData} map={PARAMMap} />
        </View>
      </View>
    </>
  );
};

export default ResultScan;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

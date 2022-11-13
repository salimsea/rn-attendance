import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import SectionCamera from './parts/SectionCamera';
import SectionContent from './parts/SectionContent';
import SectionHeader from './parts/SectionHeader';

const Scan = ({navigation}) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View style={styles.page}>
        <View style={styles.content}>
          {/* SECTION CAMERA */}
          <SectionCamera navigation={navigation} />

          {/* SECTION CONTENT */}
          <SectionContent />

          {/* SECTION HEADING */}
          <SectionHeader />
        </View>
      </View>
    </>
  );
};

export default Scan;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: 'transparent',
    flex: 1,
  },
});

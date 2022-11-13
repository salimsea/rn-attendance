import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import SectionHeader from './parts/SectionHeader';
import SectionContent from './parts/SectionContent';

const History = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor="transparent"
      />
      <View style={styles.page}>
        <View style={styles.content}>
          {/* SECTION HEADER */}
          <SectionHeader />

          {/* SECTION CONTENT */}
          <SectionContent />
        </View>
      </View>
    </>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: colors.primary,
    flex: 1,
  },
});

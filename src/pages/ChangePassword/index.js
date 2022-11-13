import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import SectionContent from './parts/SectionContent';
import {Header2} from '../../components';

const ChangePassword = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <View style={styles.page}>
        <View style={styles.content}>
          {/* SECTION HEADER */}
          <Header2 title="Ganti Password" />

          {/* SECTION CONTENT */}
          <SectionContent />
        </View>
      </View>
    </>
  );
};

export default ChangePassword;

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

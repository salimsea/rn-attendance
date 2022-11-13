import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import SectionHeader from './parts/SectionHeader';
import SectionContent from './parts/SectionContent';
import SectionFooter from './parts/SectionFooter';
import {Header2} from '../../components';

const ListMenu = ({navigation}) => {
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
          <Header2 title="Daftar Menu" />

          {/* SECTION CONTENT */}
          <SectionContent navigation={navigation} />

          {/* SECTION FOOTER */}
          <SectionFooter />
        </View>
      </View>
    </>
  );
};

export default ListMenu;

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

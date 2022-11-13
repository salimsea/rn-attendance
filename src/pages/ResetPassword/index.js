import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors, fonts, fontSize} from '../../utils';
import {ILLogin, ILResetPassword} from '../../assets';
import {Button, Gap, TextInput} from '../../components';
import SectionHero from './parts/SectionHero';
import SectionImage from './parts/SectionImage';
import SectionForm from './parts/SectionForm';

const ResetPassword = ({navigation}) => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <View style={styles.page}>
        <View style={styles.content}>
          {/* SECTION HERO */}
          <SectionHero />
          {/* SECTION IMAGE */}
          <SectionImage />

          {/* SECTION CONTENT */}
          <SectionForm />
        </View>
      </View>
    </>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: getStatusBarHeight() + 20,
    justifyContent: 'center',
  },
});

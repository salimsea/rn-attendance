import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors, fonts, fontSize} from '../../utils';
import {ILLogin} from '../../assets';
import {Button, Gap, TextInput} from '../../components';
import SectionForm from './parts/SectionForm';

const Login = ({navigation}) => {
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
          <View
            style={{paddingHorizontal: 20, paddingTop: 60, paddingBottom: 30}}>
            <ILLogin />
            <Gap height={30} />
            <Text
              style={{
                fontSize: fontSize.xlarge,
                fontFamily: fonts.primary[600],
                color: colors.dark,
              }}>
              Halaman Login
            </Text>
          </View>

          {/* SECTION FORM */}
          <SectionForm navigation={navigation} />
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: getStatusBarHeight() + 20,
  },
});

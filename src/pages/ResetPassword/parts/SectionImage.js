import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILResetPassword} from '../../../assets';
import {Gap} from '../../../components';

const SectionImage = () => {
  return (
    <View style={{paddingHorizontal: 15}}>
      <Gap height={60} />
      <View style={{alignItems: 'center'}}>
        <ILResetPassword />
      </View>
    </View>
  );
};

export default SectionImage;

const styles = StyleSheet.create({});

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Gap, ImageDynamic} from '../../../components';
import {IMGUser} from '../../../assets';
import {FUNCSetFullName, storage} from '../../../config';
import {colors, fonts, fontSize} from '../../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {navNavigate} from '../../../config/helpers/navigationRef';
import {useDispatch, useSelector} from 'react-redux';

const SectionProfile = ({navigation}) => {
  const {dataUser} = useSelector(state => state.userReducer);
  console.log('ok', dataUser?.profileFile);

  return (
    <View style={{paddingHorizontal: 20}}>
      <Gap height={30} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <View
            style={{
              width: 70,
              height: 70,
              borderWidth: 1,
              padding: 3,
              borderRadius: 100,
              borderColor: colors.white,
            }}>
            <ImageDynamic src={dataUser?.profileFile} />
          </View>
          <View style={{marginLeft: 20, width: '65%'}}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: fontSize.medium,
                fontFamily: fonts.primary[600],
                color: colors.white,
                maxWidth: '90%',
              }}>
              {FUNCSetFullName(
                dataUser?.firstName,
                dataUser?.middleName,
                dataUser?.lastName,
              )}{' '}
            </Text>
            <Text
              style={{
                fontSize: fontSize.small,
                fontFamily: fonts.primary[400],
                color: colors.white,
              }}>
              {dataUser?.roles?.length != 0 && dataUser?.roles[0]?.name}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navNavigate('User')}>
          <Icon name="pencil-plus-outline" size={30} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SectionProfile;

const styles = StyleSheet.create({});

import {StyleSheet, View} from 'react-native';
import React from 'react';
import ItemMenu from './components';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  navigationRef,
  navNavigate,
} from '../../../config/helpers/navigationRef';
import {colors} from '../../../utils';
import {storage} from '../../../config';
import {CommonActions, StackActions} from '@react-navigation/native';

const SectionContent = ({navigation}) => {
  const btnLogout = () => {
    storage.clearAll();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Login',
          },
        ],
      }),
    );
  };
  return (
    <View style={{paddingHorizontal: 20}}>
      <ItemMenu
        icon={
          <MaterialCommunityIcon
            name="account-edit-outline"
            color={colors.blue}
            size={25}
          />
        }
        name="Perbarui Akun"
        onPress={() => navNavigate('User')}
      />
      <ItemMenu
        icon={
          <MaterialCommunityIcon
            name="lock-outline"
            color={colors.secondary}
            size={25}
          />
        }
        name="Ganti Password"
        onPress={() => navNavigate('ChangePassword')}
      />
      <ItemMenu
        icon={
          <MaterialCommunityIcon name="update" color={colors.red} size={25} />
        }
        name="Cek Pembaruan"
        onPress={() => navNavigate('UpdateApp')}
      />
      <ItemMenu
        icon={
          <MaterialCommunityIcon
            name="logout"
            color={colors.primary}
            size={25}
          />
        }
        name="Logout"
        onPress={() => btnLogout()}
      />
    </View>
  );
};

export default SectionContent;

const styles = StyleSheet.create({});

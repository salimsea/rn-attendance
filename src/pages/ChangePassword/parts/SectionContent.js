import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, TextInput} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  apiChangePassword,
  setFormUser,
} from '../../../config/redux/action/userAction';

const SectionContent = () => {
  const {dataUser, formUser} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const btnSave = () => dispatch(apiChangePassword(formUser));
  return (
    <View style={{paddingHorizontal: 20}}>
      <TextInput
        label="Password Lama"
        placeholder={'Masukkan Password Lama'}
        onChangeText={e => dispatch(setFormUser('OldPassword', e))}
      />
      <Gap height={20} />
      <TextInput
        label="Password Baru"
        placeholder={'Masukkan Password Baru'}
        onChangeText={e => dispatch(setFormUser('NewPassword1', e))}
      />
      <Gap height={20} />
      <TextInput
        label="Konfirmasi Password Baru"
        placeholder={'Masukkan Konfirmasi Password Baru'}
        onChangeText={e => dispatch(setFormUser('NewPassword2', e))}
      />
      <Gap height={30} />
      <Button
        type={'primary'}
        title={'Simpan'}
        onPress={() => btnSave()}
        width={'100%'}
      />
    </View>
  );
};

export default SectionContent;

const styles = StyleSheet.create({});

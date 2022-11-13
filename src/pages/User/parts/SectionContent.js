import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Gap, ImageDynamic, TextInput} from '../../../components';
import {useSelector, useDispatch} from 'react-redux';
import {
  apiUpdateProfile,
  setFormUser,
} from '../../../config/redux/action/userAction';
import {useEffect} from 'react';

const SectionContent = ({onModalPhoto}) => {
  const {dataUser, formUser} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormUser('IdUser', dataUser.idUser));
    dispatch(setFormUser('FirstName', dataUser.firstName));
    dispatch(setFormUser('MiddleName', dataUser.middleName));
    dispatch(setFormUser('LastName', dataUser.lastName));
    dispatch(setFormUser('Email', dataUser.email));
    dispatch(setFormUser('Address', dataUser.address));
    dispatch(setFormUser('MobileNumber', dataUser.mobileNumber));
  }, [dataUser]);

  const btnSave = () => dispatch(apiUpdateProfile(formUser));

  return (
    <ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <View style={{alignSelf: 'center', position: 'relative'}}>
          <View style={{width: 120, height: 120}}>
            <ImageDynamic
              src={formUser?.FileFoto?.uri || dataUser.profileFile}
            />
          </View>
          <TouchableOpacity
            onPress={() => onModalPhoto()}
            style={styles.btnEdit}>
            <Icon name="pencil-plus-outline" size={15} color={colors.white} />
          </TouchableOpacity>
        </View>

        <Gap height={30} />
        <TextInput
          label="Nama Depan"
          placeholder={'Masukkan Nama Depan'}
          defaultValue={dataUser.firstName}
          onChangeText={e => dispatch(setFormUser('FirstName', e))}
        />
        <Gap height={30} />
        <TextInput
          label="Nama Tengah"
          placeholder={'Masukkan Nama Tengah'}
          defaultValue={dataUser.middleName}
          onChangeText={e => dispatch(setFormUser('MiddleName', e))}
        />
        <Gap height={20} />
        <TextInput
          label="Nama Akhir"
          placeholder={'Masukkan Nama Akhir'}
          defaultValue={dataUser.lastName}
          onChangeText={e => dispatch(setFormUser('LastName', e))}
        />
        <Gap height={20} />
        <TextInput
          label="Alamat Email"
          placeholder={'Masukkan Alamat Email'}
          defaultValue={dataUser.email}
          onChangeText={e => dispatch(setFormUser('Email', e))}
        />
        <Gap height={20} />
        <TextInput
          label="Alamat Rumah"
          placeholder={'Masukkan Alamat Rumah'}
          defaultValue={dataUser.address}
          isTextArea={true}
          onChangeText={e => dispatch(setFormUser('Address', e))}
        />
        <Gap height={20} />
        <TextInput
          label="Nomor HP"
          placeholder={'Masukkan Nomor HP'}
          defaultValue={dataUser.mobileNumber}
          onChangeText={e => dispatch(setFormUser('MobileNumber', e))}
        />
        <Gap height={30} />
        <Button
          type={'primary'}
          title={'Simpan'}
          onPress={() => btnSave()}
          width={'100%'}
        />
        <Gap height={30} />
      </View>
    </ScrollView>
  );
};

export default SectionContent;

const styles = StyleSheet.create({
  btnEdit: {
    width: 30,
    height: 30,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

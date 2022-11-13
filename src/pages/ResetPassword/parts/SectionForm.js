import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Gap, TextInput} from '../../../components';
import {apiResetPassword, setFormUser} from '../../../config/redux/action';
import {colors, fonts, fontSize} from '../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {navGoback} from '../../../config/helpers/navigationRef';

const SectionForm = ({navigation}) => {
  const {formUser} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const btnReset = () => dispatch(apiResetPassword(formUser, navigation));
  return (
    <View style={{paddingHorizontal: 20}}>
      <Gap height={60} />
      <TextInput
        label="Email"
        placeholder={'Masukkan Email'}
        defaultValue={formUser.Email}
        onChangeText={e => dispatch(setFormUser('Email', e))}
      />
      <Gap height={30} />
      <Button
        type={'primary'}
        title={'Reset'}
        onPress={() => btnReset()}
        width={'100%'}
      />
      <Gap height={30} />

      <TouchableOpacity onPress={() => navGoback()}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: fontSize.small,
            fontFamily: fonts.primary[400],
            color: colors.grey1,
          }}>
          Ingat Password ?{' '}
          <Text
            style={{
              textAlign: 'center',
              fontSize: fontSize.small,
              fontFamily: fonts.primary[400],
              color: colors.blue,
            }}>
            Login
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionForm;

const styles = StyleSheet.create({});

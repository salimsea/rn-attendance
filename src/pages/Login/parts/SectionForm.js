import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Button, Gap, TextInput} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {apiLogin, setFormUser} from '../../../config/redux/action';
import {colors, fonts, fontSize} from '../../../utils';

const SectionForm = ({navigation}) => {
  const {formUser} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const btnLogin = () => dispatch(apiLogin(formUser, navigation));
  return (
    <View style={{paddingHorizontal: 20}}>
      <TextInput
        label="Email / Username"
        placeholder={'Masukkan Email / Username'}
        defaultValue={formUser.UsernameOrEmail}
        onChangeText={e => dispatch(setFormUser('UsernameOrEmail', e))}
      />
      <Gap height={20} />
      <TextInput
        label="Password"
        placeholder={'Masukkan Password'}
        defaultValue={formUser.Password}
        onChangeText={e => dispatch(setFormUser('Password', e))}
        isSecure
      />
      <Gap height={30} />
      <Button
        type={'primary'}
        title={'Masuk'}
        onPress={() => btnLogin()}
        width={'100%'}
      />
      <Gap height={30} />
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: fontSize.small,
            fontFamily: fonts.primary[400],
            color: colors.grey1,
          }}>
          Lupa Password ?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionForm;

const styles = StyleSheet.create({});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Buble, Gap} from '../../../components';
import {colors} from '../../../utils';
import {navGoback} from '../../../config/helpers/navigationRef';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {setFormGlobal} from '../../../config/redux/action/globalAction';

const SectionHeader = () => {
  const {formGlobal} = useSelector(state => state.globalReducer);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        position: 'absolute',
        top: getStatusBarHeight(),
        width: '100%',
        zIndex: 3,
      }}>
      <Gap height={20} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 100,
            backgroundColor: colors.white,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => navGoback()}>
            <MaterialIcon
              name="keyboard-backspace"
              size={25}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{paddingRight: 10}}>
            <Buble
              icon={
                <MaterialIcon
                  name={
                    !formGlobal.isBackCam && formGlobal.isFlashOn
                      ? 'flash-off'
                      : 'flash-on'
                  }
                  size={20}
                  color={colors.white}
                />
              }
              color={colors.dark}
              onPress={() =>
                dispatch(setFormGlobal('isFlashOn', !formGlobal.isFlashOn))
              }
            />
          </View>
          <View>
            <Buble
              icon={
                <MaterialIcon
                  name="flip-camera-android"
                  size={20}
                  color={colors.white}
                />
              }
              color={colors.dark}
              onPress={() =>
                dispatch(setFormGlobal('isBackCam', !formGlobal.isBackCam))
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({});

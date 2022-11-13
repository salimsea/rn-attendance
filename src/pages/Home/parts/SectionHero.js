import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {IMGLayer, IMGLogo} from '../../../assets';
import {colors, fonts, fontSize} from '../../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {navNavigate} from '../../../config/helpers/navigationRef';

const SectionHero = () => {
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight() + 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: '22.5%'}}>
          <View>
            <View
              style={{
                paddingVertical: 5,
                paddingLeft: 20,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                backgroundColor: colors.white,
                width: 80,
              }}>
              <Image source={IMGLogo} style={{width: 50, height: 50}} />
            </View>
          </View>
        </View>
        <View
          style={{
            width: '55%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontSize.xlarge,
              fontFamily: fonts.primary[600],
              color: colors.white,
            }}>
            Absensi
          </Text>
        </View>
        <View style={{width: '22.5%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              paddingRight: 20,
            }}>
            <TouchableOpacity onPress={() => navNavigate('ListMenu')}>
              <View
                style={{
                  padding: 10,
                  borderRadius: 100,
                  backgroundColor: colors.white,
                }}>
                <Icon
                  name="format-list-bulleted"
                  size={15}
                  color={colors.primary}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: -40,
          right: -60,
          zIndex: -1,
        }}>
        <Image source={IMGLayer} />
      </View>
    </View>
  );
};

export default SectionHero;

const styles = StyleSheet.create({});

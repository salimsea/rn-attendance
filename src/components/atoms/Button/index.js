import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableRipple} from 'react-native-paper';

const Button = ({type, title, onPress, width = '100%', icon = false}) => {
  return (
    <TouchableRipple
      onPress={onPress}
      borderless={true}
      rippleColor={'rgb(152 152 152 / 24%)'}
      style={{width, borderRadius: 10}}>
      <View style={styles.container(type)}>
        {icon}
        <Text style={styles.text(type, icon)}>{title}</Text>
      </View>
    </TouchableRipple>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? colors.white : colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 11,
    flexDirection: 'row',
  }),
  text: (type, icon) => ({
    fontSize: RFValue(17, hp('100%')),
    fontFamily: fonts.primary[600],
    color: type === 'secondary' ? colors.primary : colors.white,
    textAlign: 'center',
    paddingLeft: !icon ? 0 : 10,
  }),
});

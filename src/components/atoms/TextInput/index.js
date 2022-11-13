import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput as TextInputPaper} from 'react-native-paper';
import {colors} from '../../../utils';

const TextInput = ({
  value,
  onChangeText,
  placeholder,
  isSecure = false,
  label,
  ...props
}) => {
  return (
    <TextInputPaper
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={isSecure}
      mode={'outlined'}
      outlineColor={colors.grey2}
      selectionColor={colors.dark}
      style={{
        backgroundColor: colors.white,
        borderRadius: 50,
        minHeight: props.isTextArea ? 100 : 0,
        textAlignVertical: props.isTextArea ? 'top' : 'center',
      }}
      activeOutlineColor={colors.primary}
      theme={{roundness: 10}}
      {...props}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({});

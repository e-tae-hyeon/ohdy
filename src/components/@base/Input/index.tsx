import colors from 'common/styles/colors';
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

type InputProps = TextInputProps & {};

function Input({...rest}: InputProps) {
  return (
    <TextInput
      {...rest}
      className="items-center justify-center px-4 py-2 border rounded-2xl border-neutral-400 font-default"
      placeholderTextColor={colors.gray[300]}
      style={{fontSize: 16, textAlignVertical: 'center'}}
    />
  );
}

export default Input;

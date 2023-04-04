import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import React from 'react';
import {Pressable} from 'react-native';

type KeywordBtnProps = {
  label: string;
  onPress: () => void;
  isChecked: boolean;
};

function KeywordBtn({label, onPress, isChecked}: KeywordBtnProps) {
  const {bgColor, textColor} = styleMap[isChecked ? 'checked' : 'default'];

  return (
    <Pressable
      onPress={onPress}
      className="px-2 py-1 rounded-2xl"
      style={{backgroundColor: bgColor}}>
      <AppText color={textColor}>{label}</AppText>
    </Pressable>
  );
}

export default KeywordBtn;

const styleMap = {
  default: {
    bgColor: colors.gray[100],
    textColor: colors.gray[400],
  },
  checked: {
    bgColor: colors.black,
    textColor: colors.white,
  },
};

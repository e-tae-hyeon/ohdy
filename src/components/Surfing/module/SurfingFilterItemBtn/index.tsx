import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import React from 'react';
import {Pressable} from 'react-native';

type SurfingFilterItemBtnProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

function SurfingFilterItemBtn({
  label,
  isSelected,
  onPress,
}: SurfingFilterItemBtnProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`${
        isSelected ? 'bg-black' : 'bg-white border border-neutral-200'
      } items-center justify-center px-4 py-2  rounded-2xl`}>
      <AppText color={isSelected ? colors.white : colors.black}>
        {label}
      </AppText>
    </Pressable>
  );
}

export default SurfingFilterItemBtn;

import colors from 'common/styles/colors';
import AppText from 'components/@base/AppText';
import React from 'react';
import {Pressable} from 'react-native';

type SurfingCategoryItemProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

function SurfingCategoryItem({
  label,
  isSelected,
  onPress,
}: SurfingCategoryItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`${isSelected ? 'bg-neutral-100' : 'bg-white'} p-4`}>
      <AppText
        typoStyle="Action"
        color={isSelected ? colors.black : colors.gray[400]}>
        {label}
      </AppText>
    </Pressable>
  );
}

export default SurfingCategoryItem;
